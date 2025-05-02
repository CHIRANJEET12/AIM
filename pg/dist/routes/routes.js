"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db/db");
const router = express_1.default.Router();
router.get('/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.pool.query('SELECT * FROM todo');
    res.json(result.rows);
}));
router.post('/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    const result = yield db_1.pool.query('INSERT INTO todo (title,description) VALUES ($1,$2)  RETURNING *', [title, description]);
    res.json(result.rows);
}));
router.delete('/todo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield db_1.pool.query('DELETE FROM todo WHERE id = $1 RETURNING * ', [id]);
    res.json(result.rows);
}));
exports.default = router;
