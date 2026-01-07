import app from "./app.js";
const PORT = Number.isFinite(Number(process.env.PORT)) ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map