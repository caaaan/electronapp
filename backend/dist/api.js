"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const task_1 = __importDefault(require("./routes/task"));
const app = (0, express_1.default)();
const port = 8000;
app.use(body_parser_1.default.json());
app.use('/api', task_1.default);
app.use((0, morgan_1.default)('combined'));
app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});
