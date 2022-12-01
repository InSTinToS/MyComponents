"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
const formatDate = date => {
    const us = date === null || date === void 0 ? void 0 : date.split('T')[0].split('-');
    return us ? `${us[2]}/${us[1]}/${us[0]}` : date;
};
exports.formatDate = formatDate;
//# sourceMappingURL=dates.js.map