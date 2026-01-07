import type { User, UserAuth, CreateUserInput, LoginUserInput, UpdateUserInput } from "./user.model.js";
import pool from "../../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 10;

/**
 * Create user
 * @param input - CreateUserInput
 * @returns UserAuth - User authentication object
 * @throws Error - Invalid email or password
 * @throws Error - Internal server error
 */
export const createUser = async (input: CreateUserInput) : Promise<UserAuth> => {
  const { email, password, username } = input;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  // Insert user into database
  const result = await pool.query(
    `INSERT INTO users (username, email, password_hash) 
     VALUES ($1, $2, $3) 
     RETURNING id, username, email, created_at, updated_at`,
    [username, email, hashedPassword]
  );

  const user = result.rows[0];

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );

  return {
    id: user.id,
    email: user.email,
    username: user.username,
    token: token,
    bio: null,
    image: null,
  };
};

/**
 * Login user
 * @param input - LoginUserInput
 * @returns UserAuth - User authentication object
 * @throws Error - Invalid email or password
 * @throws Error - Internal server error
 */
export const loginUser = async (input: LoginUserInput) : Promise<UserAuth> => {
  const { email, password } = input;
  // Find user by email
  const result = await pool.query(
    `SELECT id, email, username, password_hash, bio, image 
     FROM users 
     WHERE email = $1`,
    [email]
  );

  const user = result.rows[0];

  // Add this check BEFORE comparing password
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare password
  const isValidPassword = await bcrypt.compare(password, user.password_hash);

  if (!isValidPassword) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );

  return {
    id: user.id,
    email: user.email,
    username: user.username,
    token: token,
    bio: user.bio,
    image: user.image,
  };
};

/**
 * Get current user
 * @param userId - User ID
 * @param token - JWT token
 * @returns UserAuth - User authentication object
 * @throws Error - User not found
 * @throws Error - Internal server error
 */
/**
 * Get current user
 * @param userId - User ID (from JWT token)
 * @param token - Current JWT token (to return to client)
 * @returns UserAuth
 */
export const getUser = async (userId: number, token: string): Promise<UserAuth> => {
  const result = await pool.query(
    `SELECT id, email, username, bio, image 
     FROM users 
     WHERE id = $1`,
    [userId]
  );

  const user = result.rows[0];

  if (!user) {
    throw new Error("User not found");
  }

  return {
    id: user.id,
    email: user.email,
    username: user.username,
    token,  // Return the same token they sent
    bio: user.bio,
    image: user.image,
  };
};

/**
 * Update user
 * @param input - UpdateUserInput
 * @returns UserAuth - User authentication object
 * @throws Error - User not found
 * @throws Error - Internal server error
 */
export const updateUser = async (userId: number, input: UpdateUserInput, token: string) : Promise<UserAuth> => {
  const updates: string[] = [];
  const values: (string | number | null)[] = [];
  let paramCount = 1;

  if (input.email) {
    updates.push(`email = $${paramCount++}`);
    values.push(input.email);
  }
  if (input.username) {
    updates.push(`username = $${paramCount++}`);
    values.push(input.username);
  }
  if (input.bio !== undefined) {
    updates.push(`bio = $${paramCount++}`);
    values.push(input.bio);
  }
  if (input.image !== undefined) {
    updates.push(`image = $${paramCount++}`);
    values.push(input.image);
  }
  if (input.password) {
    const hashedPassword = await bcrypt.hash(input.password, SALT_ROUNDS);
    updates.push(`password_hash = $${paramCount++}`);
    values.push(hashedPassword);
  }

  updates.push(`updated_at = NOW()`);

  values.push(userId);

  const result = await pool.query(
    `UPDATE users
     SET ${updates.join(", ")}
     WHERE id = $${paramCount}
     RETURNING id, email, username, bio, image`,
    values
  );

  const user = result.rows[0];

  if (!user) {
    throw new Error("User not found");
  }

  return {
    id: user.id,
    email: user.email,
    username: user.username,
    token,
    bio: user.bio,
    image: user.image,
  };
};
