'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styled = require('styled-components');
var bech32 = require('bech32');
var buffer = require('buffer');
var cborg = require('cborg');
var react = require('react');
var cardanoPeerConnect = require('@fabianbormann/cardano-peer-connect');
var Color = require('color');
var reactQrcodeLogo = require('react-qrcode-logo');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Menu$1 = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  display: none;\n  position: absolute;\n  margin-top: 8px;\n  font-family: sans-serif;\n  width: 100%;\n  overflow: hidden;\n  z-index: 10;\n"], ["\n  display: none;\n  position: absolute;\n  margin-top: 8px;\n  font-family: sans-serif;\n  width: 100%;\n  overflow: hidden;\n  z-index: 10;\n"])));
var MenuItem$1 = styled.span(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  color: ", ";\n  padding: 12px 16px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n  border-bottom: none;\n  background-color: white;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:first-child {\n    border-top-left-radius: ", "\n    border-top-right-radius: ", "\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: ", "\n    border-bottom-right-radius: ", "\n    border-bottom: 1px solid ", ";\n  }\n"], ["\n  color: ", ";\n  padding: 12px 16px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n  border-bottom: none;\n  background-color: white;\n\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:first-child {\n    border-top-left-radius: ", "\n    border-top-right-radius: ", "\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: ", "\n    border-bottom-right-radius: ", "\n    border-bottom: 1px solid ", ";\n  }\n"])), function (props) { return props.primaryColor; }, function (props) { return props.primaryColor; }, function (props) { return props.primaryColorLight; }, function (props) {
    return "".concat(props.borderRadius, "px;");
}, function (props) {
    return "".concat(props.borderRadius, "px;");
}, function (props) {
    return "".concat(props.borderRadius, "px;");
}, function (props) {
    return "".concat(props.borderRadius, "px;");
}, function (props) { return props.primaryColor; });
var MenuItemIcon$1 = styled.img(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n"], ["\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n"])));
var Button = styled.button(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  padding: 16px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border: 1px solid ", ";\n  color: ", ";\n  background-color: white;\n\n  ", "\n\n  &:disabled {\n    border: 1px solid #333;\n    color: #333;\n    backgroundcolor: #eee;\n  }\n"], ["\n  padding: 16px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border: 1px solid ", ";\n  color: ", ";\n  background-color: white;\n\n  ", "\n\n  &:disabled {\n    border: 1px solid #333;\n    color: #333;\n    backgroundcolor: #eee;\n  }\n"])), function (props) { return props.primaryColor; }, function (props) { return props.primaryColor; }, function (props) {
    return props.borderRadius && "border-radius: ".concat(props.borderRadius, "px;");
});
var Dropdown = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  min-width: 180px;\n  max-width: 240px;\n  font-weight: bold;\n  position: relative;\n  display: inline-block;\n  padding-bottom: 8px;\n  padding-top: 8px;\n\n  ", "\n\n  &:hover ", " {\n    display: block;\n  }\n\n  &:hover ", " {\n    background-color: ", ";\n    color: white;\n  }\n"], ["\n  min-width: 180px;\n  max-width: 240px;\n  font-weight: bold;\n  position: relative;\n  display: inline-block;\n  padding-bottom: 8px;\n  padding-top: 8px;\n\n  ", "\n\n  &:hover ", " {\n    display: block;\n  }\n\n  &:hover ", " {\n    background-color: ", ";\n    color: white;\n  }\n"])), function (props) { return props.customCSS; }, Menu$1, Button, function (props) { return props.primaryColor; });
var DesktopMenuItem$1 = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: #333;\n  position: relative;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  border-color: #333;\n  border-style: solid;\n  border-width: 1px;\n  border-bottom: none;\n  background-color: #e3e3e3;\n  overflow: hidden;\n\n  &:first-child {\n    border-top-left-radius: ", "\n    border-top-right-radius: ", "\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: ", "\n    border-bottom-right-radius: ", "\n    border-bottom: 1px solid #333;\n  }\n\n  & > span {\n    text-transform: uppercase;\n    font-size: 0.5rem;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    padding: 3px;\n    background: #777;\n    color: #fff;\n    text-align: center;\n    transform: rotate(-35deg);\n    translate: 25%;\n  }\n\n  & ", " {\n    filter: brightness(0);\n  }\n"], ["\n  color: #333;\n  position: relative;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  border-color: #333;\n  border-style: solid;\n  border-width: 1px;\n  border-bottom: none;\n  background-color: #e3e3e3;\n  overflow: hidden;\n\n  &:first-child {\n    border-top-left-radius: ", "\n    border-top-right-radius: ", "\n    border-bottom: none;\n  }\n\n  &:last-child {\n    border-bottom-left-radius: ", "\n    border-bottom-right-radius: ", "\n    border-bottom: 1px solid #333;\n  }\n\n  & > span {\n    text-transform: uppercase;\n    font-size: 0.5rem;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    padding: 3px;\n    background: #777;\n    color: #fff;\n    text-align: center;\n    transform: rotate(-35deg);\n    translate: 25%;\n  }\n\n  & ", " {\n    filter: brightness(0);\n  }\n"])), function (props) {
    return "".concat(props.borderRadius, "px;");
}, function (props) {
    return "".concat(props.borderRadius, "px;");
}, function (props) {
    return "".concat(props.borderRadius, "px;");
}, function (props) {
    return "".concat(props.borderRadius, "px;");
}, MenuItemIcon$1);
var templateObject_1$2, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5, templateObject_6;

var isWalletInstalled = function (walletName) {
    var cardano = window.cardano;
    if (typeof cardano === 'undefined') {
        return false;
    }
    else {
        return Object.keys(cardano).includes(walletName);
    }
};
var NetworkId$1;
(function (NetworkId) {
    NetworkId[NetworkId["MAINNET"] = 1] = "MAINNET";
    NetworkId[NetworkId["TESTNET"] = 0] = "TESTNET";
})(NetworkId$1 || (NetworkId$1 = {}));
var getWalletIcon = function (walletName) {
    var cardano = window.cardano || {};
    var genericWalletIcon = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20122.88%20101.33%22%20style%3D%22enable-background%3Anew%200%200%20122.88%20101.33%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M90.62%2C33.32h18.4v-2.79c-2.88-10.73-10.2-10.66-19.25-10.57c-1.49%2C0.02-2.84%2C0.03-2.92%2C0.03H18.07%20c-1.58%2C0-2.86-1.28-2.86-2.86c0-1.58%2C1.28-2.86%2C2.86-2.86h68.78c2.03%2C0%2C2.46%2C0%2C2.87-0.01c7.74-0.08%2C14.5-0.15%2C19.3%2C4.38v-1.31%20c0-3.2-1.31-6.1-3.42-8.21c-2.11-2.11-5.02-3.42-8.21-3.42H17.34c-3.2%2C0-6.1%2C1.31-8.21%2C3.42c-2.11%2C2.11-3.42%2C5.02-3.42%2C8.21v66.64%20c0%2C3.2%2C1.31%2C6.1%2C3.42%2C8.21c2.11%2C2.11%2C5.02%2C3.42%2C8.21%2C3.42h80.04c3.2%2C0%2C6.1-1.31%2C8.21-3.42c2.11-2.11%2C3.42-5.02%2C3.42-8.21v-9.46%20h-18.4c-5.55%2C0-10.6-2.27-14.25-5.92c-3.65-3.65-5.92-8.7-5.92-14.25v-0.87c0-5.55%2C2.27-10.6%2C5.92-14.25%20C80.02%2C35.59%2C85.06%2C33.32%2C90.62%2C33.32L90.62%2C33.32z%20M114.73%2C33.43c2.07%2C0.31%2C3.92%2C1.29%2C5.33%2C2.71c1.74%2C1.74%2C2.81%2C4.14%2C2.81%2C6.78%20v21.6c0%2C2.76-1.12%2C5.26-2.93%2C7.07c-1.39%2C1.39-3.2%2C2.38-5.21%2C2.76v9.63c0%2C4.77-1.95%2C9.11-5.09%2C12.25%20c-3.14%2C3.14-7.48%2C5.09-12.25%2C5.09H17.34c-4.77%2C0-9.11-1.95-12.25-5.09C1.95%2C93.1%2C0%2C88.76%2C0%2C83.99V17.34%20c0-4.77%2C1.95-9.11%2C5.09-12.25C8.23%2C1.95%2C12.57%2C0%2C17.34%2C0h80.04c4.77%2C0%2C9.11%2C1.95%2C12.25%2C5.09c3.14%2C3.14%2C5.09%2C7.48%2C5.09%2C12.25V33.43%20L114.73%2C33.43z%20M88.14%2C46.11c4.05%2C0%2C7.33%2C3.28%2C7.33%2C7.33c0%2C4.05-3.28%2C7.33-7.33%2C7.33c-4.05%2C0-7.33-3.28-7.33-7.33%20C80.81%2C49.39%2C84.09%2C46.11%2C88.14%2C46.11L88.14%2C46.11z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    var fallbackIcons = [
        {
            name: 'nami',
            icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 486.17 499.86'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23349ea3;%7D%3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpath id='path16' class='cls-1' d='M73.87,52.15,62.11,40.07A23.93,23.93,0,0,1,41.9,61.87L54,73.09,486.17,476ZM102.4,168.93V409.47a23.76,23.76,0,0,1,32.13-2.14V245.94L395,499.86h44.87Zm303.36-55.58a23.84,23.84,0,0,1-16.64-6.68v162.8L133.46,15.57H84L421.28,345.79V107.6A23.72,23.72,0,0,1,405.76,113.35Z'/%3E%3Cpath id='path18' class='cls-1' d='M38.27,0A38.25,38.25,0,1,0,76.49,38.27v0A38.28,38.28,0,0,0,38.27,0ZM41.9,61.8a22,22,0,0,1-3.63.28A23.94,23.94,0,1,1,62.18,38.13V40A23.94,23.94,0,0,1,41.9,61.8Z'/%3E%3Cpath id='path20' class='cls-1' d='M405.76,51.2a38.24,38.24,0,0,0,0,76.46,37.57,37.57,0,0,0,15.52-3.3A38.22,38.22,0,0,0,405.76,51.2Zm15.52,56.4a23.91,23.91,0,1,1,8.39-18.18A23.91,23.91,0,0,1,421.28,107.6Z'/%3E%3Cpath id='path22' class='cls-1' d='M134.58,390.81A38.25,38.25,0,1,0,157.92,426a38.24,38.24,0,0,0-23.34-35.22Zm-15,59.13A23.91,23.91,0,1,1,143.54,426a23.9,23.9,0,0,1-23.94,23.91Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
        },
        {
            name: 'flint',
            icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkwIiBoZWlnaHQ9IjE5MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBkPSJtNTYuMDExLDU5LjM4NWw0My40NjIyLC00NC4wODMzYzIuOTcwOCwtMy4yNTM0IDQuMDMxOCwtMi45MzY1IDUuMDQ0OCwwLjc4NzJsMC4zODgsMzEuNDg4MWMtMC4xMDgsNC45MTM2IC0wLjQ2NSw3LjAzMjYgLTEuOTQsOS4wNTI4bC0yNi4zODgxLDI3LjE1ODVjLTMuNDUwNCw0LjI2NjcgLTIuOTc2OSw1Ljk2OTggLTMuMTA0NCw3Ljg3MmMtMC4xMjc2LDEuOTAyMiAzLjM1NzQsNy40NDg0IDkuMzEzMyw3Ljg3MjFjMCwwIDE2LjE1MDUsMC4wMDMzIDE3Ljg1MDIsMGMxLjcsLTAuMDAzNCAyLjg5MSwyLjczNDYgMCw1LjUxMDZsLTM2LjQ3NjksMzYuNjA1Yy00LjUxNDMsNC4yNTIgLTcuMDY4LDQuMjQgLTExLjY0MTYsMi43NTVjLTcuMDE5NiwtMy45MzUgLTcuMTQ1LC03LjU2NyAtNy4zNjM4LC0xMy45MDFsLTAuMDA5MywtMC4yNjlsMCwtNDAuMTQ3MWMtMC4yNDMxLC0xMi43OTgzIDEuNTg2NiwtMTkuNjE4MSAxMC44NjU2LC0zMC43MDA5eiIgZmlsbD0iI0ZGNjEwMCIgaWQ9InN2Z18xIi8+CiAgPHBhdGggZD0ibTEzNC43MSwxMzEuNTlsLTQ0Ljc3ODgsNDQuMDgzYy0zLjA2MTEsMy4yNTQgLTQuMTU0LDIuOTM3IC01LjE5NzYsLTAuNzg3bC0wLjM5OTgsLTMxLjQ4OGMwLjExMDcsLTQuOTEzIC0wLjA3NTMsLTIuOTk4NTcgNi4zNTAyNiwtMTAuOTI0MjRsMjIuODM1OTQsLTI1LjI4Njc2YzMuNTU1LC00LjI2NyAzLjA2NywtNS45NyAzLjE5OSwtNy44NzIyYzAuMTMxLC0xLjkwMjIgLTMuNDU5LC03LjQ0ODQgLTkuNTk2LC03Ljg3MjFjMCwwIC0xNi42Mzk3LC0wLjAwMzMgLTE4LjM5MTMsMGMtMS43NTE1LDAuMDAzNCAtMi45Nzg3LC0yLjczNSAwLC01LjUxMDRsMzcuNTgyMywtMzYuNjA1YzQuNjUxLC00LjI1MjMgNy4yODMsLTQuMjQwNSAxMS45OTUsLTIuNzU1MmM3LjIzMiwzLjkzNSA3LjM2MSw3LjU2NzQgNy41ODcsMTMuOTAxM2wwLjAwOSwwLjI2ODRsMCw0MC4xNDcyYzAuMjUxLDEyLjc5OSAtMS42MzQsMTkuNjE4IC0xMS4xOTUsMzAuNzAxeiIgZmlsbD0iI0ZGNjEwMCIgaWQ9InN2Z18yIi8+CiA8L2c+Cgo8L3N2Zz4=',
        },
        {
            name: 'yoroi',
            icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA3MiA2MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExODRfODQyNDApIj4KPHBhdGggZD0iTTU1LjYyNzEgNDguOTEzNkw0OS45MjEgNTIuODcxMkw3LjkwMjMyIDIzLjg2MjNDNy45MDIzMiAyMy44MDU2IDcuOTAyMzIgMjMuNzQ4OCA3Ljg4NTYgMjMuNjkyVjIxLjEwMzdDNy44ODU2IDIwLjI2NDMgNy44ODU2IDE5LjQyNjEgNy44ODU2IDE4LjU4ODlWMTUuOTUzOUw1NS42MjcxIDQ4LjkxMzZaTTQzLjkwMDYgMTEuNDc1M0M0MS4zNjM1IDEzLjIxMTkgMzguODAyOSAxNC45MTUyIDM2LjI2NTggMTYuNjUxOUMzNi4xMzk2IDE2Ljc2NjYgMzUuOTc1MSAxNi44MzAyIDM1LjgwNDQgMTYuODMwMkMzNS42MzM4IDE2LjgzMDIgMzUuNDY5MyAxNi43NjY2IDM1LjM0MzEgMTYuNjUxOUMzMi4yMDc2IDE0LjQ3MSAyOS4wNTU0IDEyLjMxMDIgMjUuOTE2NSAxMC4xNDYxQzIyLjYxMzkgNy44NTUwMyAxOS4zMTM0IDUuNTU3MyAxNi4wMTUyIDMuMjUyODlMMTEuMzMyIDBIMEMwLjYwMTY5OSAwLjQyMDgwNSAxLjA5NjQzIDAuNzc0ODE2IDEuNTk0NSAxLjExODgxTDEwLjQ3NjMgNy4yNzA1OEMxMy40MDQ1IDkuMzA1NTkgMTYuMzMxNyAxMS4zNDA2IDE5LjI1NzcgMTMuMzc1NkMyMi4wMTIyIDE1LjI4OTMgMjQuNzU5OSAxNy4yMTI5IDI3LjUxNzcgMTkuMTIzM0MzMC4xMzUxIDIwLjkzNjcgMzIuNzU5MiAyMi43MzAyIDM1LjM3NjYgMjQuNTQ3QzM1LjQ4MjMgMjQuNjQyNyAzNS42MTk5IDI0LjY5NTggMzUuNzYyNyAyNC42OTU4QzM1LjkwNTQgMjQuNjk1OCAzNi4wNDMgMjQuNjQyNyAzNi4xNDg4IDI0LjU0N0MzOC4yNjE0IDIzLjEwMDkgNDAuMzk3NCAyMS42NzgyIDQyLjUgMjAuMjMyMUM0Ny43MzI2IDE2LjY0OTYgNTIuOTYwNyAxMy4wNjE3IDU4LjE4NDMgOS40NjgxMkw2OS42MDMyIDEuNjY5ODZDNzAuMzkyMSAxLjEzMjE3IDcxLjE3NzcgMC41ODQ0NTIgNzIgMEg2MC42MzQ2QzU1LjA1NDQgMy44MjI4NyA0OS40NzY0IDcuNjQ3OTcgNDMuOTAwNiAxMS40NzUzWk03Ljk0NTc3IDM1LjI0NzRDNy45MjA5NyAzNS4yOTU1IDcuOTAwODIgMzUuMzQ1OCA3Ljg4NTYgMzUuMzk3N1Y0MC4xNTM1QzcuODg1NiA0MS4xMDIgNy44ODU2IDQyLjA1MDUgNy44ODU2IDQyLjk5NTZDNy44ODgxNCA0My4wNTMzIDcuOTAxNzYgNDMuMTEgNy45MjU3MiA0My4xNjI2TDM1Ljk3MTYgNjIuNTMzSDM1Ljk5ODNMNDEuNzA0NCA1OC41Nzg4TDcuOTQ1NzcgMzUuMjQ3NFpNNjMuOTc0IDE1Ljk3MDZMNDMuMTAxNyAzMC4zOTE1QzQzLjE2NzYgMzAuNDgwNCA0My4yNDE1IDMwLjU2MzEgNDMuMzIyMyAzMC42Mzg2QzQ1LjA4NzMgMzEuODg3NyA0Ni44NTM0IDMzLjEzMTIgNDguNjIwNiAzNC4zNjkxQzQ4LjY3ODkgMzQuNDAwNCA0OC43NDU3IDM0LjQxMjEgNDguODExMiAzNC40MDI1TDYzLjkyMzkgMjMuOTQ5MkM2My45NDY2IDIzLjkwNDggNjMuOTYzNCAyMy44NTc2IDYzLjk3NCAyMy44MDg5VjE1Ljk3MDZaTTYzLjk5MDcgMzUuNTUxNEM2MS42MjA3IDM3LjE4NDUgNTkuMzM0MiAzOC43NjQyIDU3LjAyMSA0MC4zNjM5TDYyLjQ0MyA0NC4yMDQ2TDYzLjk5MDcgNDMuMTMyNVYzNS41NTE0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzExODRfODQyNDApIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMTg0Xzg0MjQwIiB4MT0iOS4xNTU4NiIgeTE9IjQ0LjM4NDkiIHgyPSI2Mi43NDE3IiB5Mj0iLTkuMjQ5ODQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFBNDRCNyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NzYwRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTg0Xzg0MjQwIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjYyLjUyNjMiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==',
        },
        {
            name: 'eternl',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZmU4ODM0My1iMjExLTQ2YWEtYmE3MS0xZWFiZmZkNWZjMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NURCQTYwMDhBMTI1MTFFQzhBMjdGRTQzMjI4NjJBRDIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NURCQTYwMDdBMTI1MTFFQzhBMjdGRTQzMjI4NjJBRDIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YzY1MGU0NC04MzE3LTQxMjMtOGFlNy03ZWQyZTVlYmVhMTciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0N2NhMTg2Yy04YThlLThkNDYtYWE3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',
        },
        {
            name: 'lace',
            icon: "data:image/svg+xml,%3Csvg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.20581 19.7194C6.97849 20.2972 6.78249 20.8867 6.61867 21.4856C5.89494 24.1253 5.77235 26.8937 6.25994 29.5871C6.28266 29.721 6.30896 29.855 6.33766 29.9877C6.4405 30.4971 6.56725 31.0065 6.71553 31.5052C6.87936 32.06 7.07427 32.6185 7.29789 33.1637C8.7964 36.8437 11.4627 39.9293 14.8864 41.9457C15.6873 42.4187 16.5242 42.8281 17.3892 43.1702C20.6506 44.4602 24.2155 44.7792 27.6541 44.0885C31.0927 43.3979 34.258 41.7272 36.7683 39.2778C38.3477 37.7378 39.6295 35.9197 40.5494 33.9147C40.3927 34.0797 40.2313 34.2435 40.0711 34.4038C37.4141 37.0117 34.0672 38.8061 30.4246 39.5756C30.2596 39.6569 30.0922 39.7311 29.9235 39.8052C27.3481 40.9225 24.5061 41.2775 21.735 40.8279C18.9638 40.3784 16.3798 39.1432 14.2897 37.2689C14.0505 37.0561 13.8182 36.8336 13.5926 36.6017L13.4909 36.4952C11.4347 34.3597 10.0778 31.6485 9.60099 28.7226C9.55794 28.4603 9.52167 28.1964 9.49217 27.9309C9.43497 27.4039 9.40583 26.8742 9.40488 26.3441C9.39359 23.459 10.2366 20.6351 11.8276 18.2282C12.2275 17.62 12.6732 17.0431 13.1609 16.5027C13.3666 16.2743 13.5818 16.0471 13.8066 15.8283C16.4992 13.1837 20.1109 11.6838 23.8848 11.643C23.9434 11.643 24.0115 11.643 24.0785 11.643H24.2339C27.4415 11.6683 30.5515 12.7496 33.0828 14.7198C32.9951 14.3953 32.8959 14.0741 32.7851 13.756C32.6954 13.5049 32.6009 13.2597 32.4969 13.017C31.9158 11.6256 31.0986 10.3452 30.0814 9.23227L30.0228 9.18803C29.1693 8.89153 28.2941 8.66125 27.4052 8.49925C25.1046 8.07597 22.7442 8.09749 20.4516 8.56263C19.3778 8.77909 18.3263 9.09412 17.3103 9.50372C16.8212 9.69983 16.3453 9.91507 15.8957 10.1447C14.904 10.6473 13.9608 11.2406 13.0784 11.9168L12.9994 11.9766C12.4412 12.4128 11.9078 12.8799 11.4019 13.3757C10.2717 14.4804 9.29155 15.7287 8.48651 17.0887C8.02665 17.8674 7.62689 18.6801 7.29071 19.5197L7.28114 19.7182L7.20581 19.7194ZM18.1521 5.9534C17.0596 5.95245 15.9692 6.05172 14.8948 6.24996C14.7537 6.27268 14.6174 6.29899 14.481 6.33008C13.9788 6.43292 13.473 6.56086 12.9719 6.71153C12.6802 6.79644 12.3896 6.89091 12.1014 6.99135C11.8132 7.0918 11.5477 7.19464 11.2739 7.30585C7.5843 8.79264 4.49573 11.4672 2.49676 14.9063C2.24206 15.3392 1.99931 15.7948 1.77929 16.26C1.60231 16.6295 1.43609 17.0061 1.28662 17.3828C-0.413844 21.6522 -0.429267 26.4081 1.24347 30.6884C2.91621 34.9687 6.15224 38.4539 10.2969 40.439L10.5481 40.5585C10.3806 40.3995 10.2144 40.2369 10.053 40.0719C7.44279 37.411 5.64753 34.0595 4.87879 30.4122C4.81063 30.2926 4.72334 30.1001 4.63963 29.9064C4.5069 29.6015 4.38732 29.2906 4.27491 28.9725C3.6319 27.1539 3.35445 25.2262 3.45849 23.3001C3.56253 21.374 4.04602 19.4875 4.88118 17.7487C5.16523 17.1562 5.48717 16.5827 5.84499 16.0316C6.24791 15.4151 6.69723 14.8303 7.18907 14.2821C7.4354 14.0059 7.69011 13.7404 7.95796 13.4857C8.45652 13.0044 8.99012 12.5607 9.55435 12.1584C10.4163 11.5414 11.343 11.0202 12.3178 10.6039C14.603 8.86233 17.2524 7.66007 20.0678 7.08702C21.112 6.8698 22.1722 6.73862 23.2379 6.6948L22.9987 6.62544C21.4217 6.1797 19.7909 5.95356 18.1521 5.9534V5.9534ZM21.2325 37.7616L21.4717 37.8273C24.1094 38.5547 26.8767 38.6805 29.5696 38.1957L29.6437 38.1825C29.7633 38.1598 29.8829 38.1383 30.0025 38.1119C30.4975 38.0127 30.9866 37.8883 31.5056 37.7341C32.0246 37.5798 32.5411 37.404 33.0601 37.196L33.2371 37.4351L33.1295 37.1673C35.3219 36.2836 37.3184 34.976 39.0044 33.3192C40.1359 32.2115 41.1179 30.9609 41.9258 29.5991C42.3923 28.8074 42.7973 27.9811 43.1371 27.1274C44.4487 23.8612 44.7818 20.2839 44.0958 16.8317C43.4098 13.3795 41.7342 10.2015 39.2735 7.68491V7.68491C37.7389 6.11162 35.9283 4.83362 33.9319 3.91457C36.1679 6.04959 37.8668 8.68359 38.8896 11.6011C39.1754 12.4129 39.4091 13.2421 39.5892 14.0836C39.6537 14.2032 39.7386 14.3897 39.8188 14.5751C40.2832 15.6624 40.6144 16.8019 40.8053 17.9688C40.9355 18.7637 41.0011 19.5679 41.0014 20.3735C41.007 23.2506 40.1648 26.0655 38.5799 28.4667C38.1801 29.0749 37.734 29.6514 37.2454 30.191C37.0397 30.4206 36.8245 30.6478 36.5997 30.8666L36.4956 30.9647C35.226 32.1895 33.7442 33.1733 32.1226 33.8681C30.5316 35.063 28.7658 36.0052 26.8874 36.6614C26.0713 36.9493 25.2372 37.1838 24.3906 37.3634C23.3504 37.5813 22.2942 37.7149 21.2325 37.7628V37.7616ZM14.3973 35.2504C15.2548 35.5521 16.1343 35.7867 17.0281 35.9523C19.3407 36.3904 21.7171 36.368 24.0211 35.8866C24.8231 35.719 25.6132 35.4989 26.3864 35.2277C26.659 35.132 26.9281 35.0292 27.1912 34.9228C27.6539 34.7362 28.1047 34.5305 28.534 34.3129C31.6453 32.7525 34.2367 30.3223 35.9934 27.3175C36.2457 26.8918 36.4873 26.4362 36.7109 25.9615C36.8807 25.6027 37.0349 25.2512 37.1808 24.8924L37.2012 24.8362C38.4673 21.6854 38.8136 18.2401 38.1997 14.9003V14.892C38.1793 14.7616 38.153 14.6337 38.1243 14.5045C38.0239 14.0071 37.8959 13.4953 37.7417 12.9799C37.6544 12.6869 37.5623 12.3964 37.4595 12.1058C37.365 11.8403 37.2669 11.5784 37.1605 11.3201C35.6856 7.63287 33.0272 4.54032 29.6031 2.52864C29.1415 2.2548 28.668 2.00369 28.1968 1.77888C27.8488 1.61266 27.4985 1.45601 27.1421 1.31491C22.8673 -0.40841 18.0966 -0.438843 13.8002 1.2298C9.50371 2.89845 6.00412 6.14088 4.01303 10.2977C3.97596 10.3755 3.93889 10.4532 3.90302 10.5369C6.03985 8.29653 8.67675 6.59391 11.598 5.56835C12.404 5.28601 13.2267 5.05359 14.0613 4.8724C14.194 4.79946 14.3937 4.70858 14.597 4.62368C14.8852 4.5041 15.1806 4.38452 15.4807 4.28048C16.2996 3.9932 17.1418 3.77716 17.9979 3.63475C21.6437 3.04462 25.3781 3.84571 28.4611 5.87926C29.0651 6.27329 29.6379 6.71304 30.1747 7.19464C30.4425 7.4338 30.7016 7.68212 30.9519 7.93962C32.1751 9.21219 33.1575 10.6958 33.8517 12.3186C33.9821 12.6247 34.1029 12.9333 34.2105 13.2502C34.498 14.0619 34.7133 14.8974 34.8538 15.747C34.9004 16.0112 34.9351 16.2803 34.965 16.5482C35.2664 19.2655 34.7947 22.0127 33.6042 24.4739C33.0016 25.7325 32.2247 26.8999 31.2963 27.9417C29.9367 29.4529 28.2794 30.6668 26.4284 31.5072C24.5774 32.3476 22.5728 32.7964 20.5401 32.8253C19.8147 32.8353 19.0896 32.7901 18.371 32.6902C16.8586 32.4808 15.388 32.037 14.0123 31.3748C13.077 30.9268 12.1909 30.3826 11.3684 29.7509C11.9155 31.8031 12.9543 33.691 14.3949 35.2516L14.3973 35.2504ZM10.963 27.3582C12.0346 28.4496 13.2893 29.3449 14.67 30.0033C14.9777 30.1507 15.2894 30.2859 15.6051 30.4086C13.3915 28.0523 12.0214 25.0287 11.7092 21.8109C11.0674 23.5868 10.813 25.4794 10.963 27.3617V27.3582ZM28.839 14.0382C31.0416 16.3937 32.4128 19.4053 32.7432 22.6132C33.3848 20.8547 33.6417 18.9789 33.4966 17.1126V17.1066C32.1808 15.7632 30.5926 14.7169 28.839 14.0382V14.0382Z' fill='url(%23paint0_radial_7152_190498)'/%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_7152_190498' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(22.219 22.2222) scale(22.2239)'%3E%3Cstop stop-color='%23FDC300'/%3E%3Cstop offset='0.11' stop-color='%23FDC205'/%3E%3Cstop offset='0.25' stop-color='%23FDBF13'/%3E%3Cstop offset='0.39' stop-color='%23FDB92B'/%3E%3Cstop offset='0.54' stop-color='%23FEB24C'/%3E%3Cstop offset='0.7' stop-color='%23FEA977'/%3E%3Cstop offset='0.86' stop-color='%23FF9DAA'/%3E%3Cstop offset='1' stop-color='%23FF92DE'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E%0A",
        },
        {
            name: 'peer-connect',
            icon: 'data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2033%2033%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22m22%2028h-2v1h2zm4%201v-1h2v1h1v-5h-1v-1h-1v3h-3v1h-1v1h2v-1h1v1h-1v1zm-7%200v-2h-1v1h-2v1zm-6-1h-1v1h3v-1h-1v-1h-1zm-2%201h-7v-7h7zm-6-6v5h5v-5zm4%204h-3v-3h3zm4-8h-2v1h-1v1h1v-1h1v6h2v1h1v-2h-2v-2h1v1h1v-1h1v-1h1v-1h-2v1h-2v-1h2v-1h-2zm8-1v-2h1v1h2v-1h4v1h1v-3h-1v1h-2v-1h2v-1h1v-1h-3v1h-1v-1h-1v1h-1v1h-1v-2h-1v2h-1v-2h-1v1h-2v-1h-1v1h-2v1h-1v2h1v-1h1v2h2v-2h1v-1h1v1h1v2h-2v2h3v1h-1v3h-1v-2h-1v2h-2v2h1v-1h1v2h-2v1h2v-1h1v1h1v-2h1v2h1v-1h1v-1h2v-5h-1v-1h1v1h1v2h2v-2h-1v-1h1v1h1v-2h-1v-1h-1v1h-2v-1h-1v2h-1v-1zm0%203v3h3v-3zm2%201h-1v1h1zm6%200h-1v1h1zm-22-2v-1h-1v2h2v-1zm11%200h-1v1h1zm-13-2v-2h-1v5h1v-2h1v-1zm5%201h-2v1h2zm7-1h-2v2h1v-1h1zm-6%200h-1v1h1zm4-1h-2v1h2zm-4-3v-1h-2v1zm1%203h-1v1h1zm-1-1h-1v1h1zm-4%200h-1v1h1zm-1-1h-1v1h1zm1-1h-1v1h1zm17%200v1h1v-1zm-19%200h-1v1h1zm1-1h-1v1h1zm-1-1h-1v1h1zm14%200v-3h-1v2h-1v1zm-1-4v-2h-4v1h-1v1h-1v1h2v2h-1v1h2v-4h1v-1h1v1zm-5%202h-1v1h1zm4%200h-1v1h1zm4%201v-6h-1v1h-1v1h1v4zm-10%200h-7v-7h7zm18%200h-7v-7h7zm-6-6v5h5v-5zm-18%200v5h5v-5zm12%203h-1v1h1zm10%201h-3v-3h3zm-18%200h-3v-3h3zm9-5h-6v3h1v-2h5zm1%201h-1v1h1zm-12%207v2h1v4h1v-2h1v-1h1v1h1v-2h1v-2z%22%2F%3E%0A%3C%2Fsvg%3E',
        },
    ];
    if (typeof cardano[walletName.toLowerCase()] === 'undefined') {
        var fallbackWallet = fallbackIcons.find(function (fallbackIcon) { return fallbackIcon.name === walletName.toLowerCase(); });
        if (fallbackWallet) {
            return fallbackWallet.icon;
        }
        else {
            return genericWalletIcon;
        }
    }
    else {
        return cardano[walletName.toLowerCase()].icon;
    }
};

var Observable = /** @class */ (function () {
    function Observable(value) {
        this.observers = new Array();
        this.value = value;
    }
    Observable.prototype.subscribe = function (subscriber) {
        this.observers.push(subscriber);
    };
    Observable.prototype.unsubscribe = function (subscriber) {
        this.observers = this.observers.filter(function (observer) { return observer !== subscriber; });
    };
    Observable.prototype.get = function () {
        return this.value;
    };
    Observable.prototype.set = function (value) {
        if (this.value === value)
            return;
        this.value = value;
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer(this.value);
        }
    };
    return Observable;
}());

var NetworkId;
(function (NetworkId) {
    NetworkId[NetworkId["MAINNET"] = 1] = "MAINNET";
    NetworkId[NetworkId["TESTNET"] = 0] = "TESTNET";
})(NetworkId || (NetworkId = {}));
var mobileWallets = ['flint'];
var flintDeepLink = 'https://flint-wallet.app.link/browse?dappUrl=';
var chromeStoreUrl = 'https://chrome.google.com/webstore/detail/';
var chromeWalletExtensions = {
    NAMI: {
        id: 'lpfcbjknijpeeillifnkikgncikgfhdo',
        name: 'nami',
    },
    FLINT: {
        id: 'hnhobjmcibchnmglfbldbfabcgaknlkj',
        name: 'flint-wallet',
    },
    TYPHON: {
        id: 'kfdniefadaanbjodldohaedphafoffoh',
        name: 'typhon-wallet',
    },
    YOROI: {
        id: 'ffnbelfdoeiohenkjibnmadjiehjhajb',
        name: 'yoroi',
    },
    ETERNL: {
        id: 'kmhcihpebfmpgmihbkipmjlmmioameka',
        name: 'eternl',
    },
    GEROWALLET: {
        id: 'bgpipimickeadkjlklgciifhnalhdjhe',
        name: 'gerowallet',
    },
    NUFI: {
        id: 'gpnihlnnodeiiaakbikldcihojploeca',
        name: 'gerowallet',
    },
    LACE: {
        id: 'gafhhkghbfjjkeiendhlofajokpaflmk',
        name: 'lace',
    },
};

var decodeHexAddress = function (hexAddress) {
    hexAddress = hexAddress.toLowerCase();
    var addressType = hexAddress.charAt(0);
    var networkId = Number(hexAddress.charAt(1));
    var addressBytes = buffer.Buffer.from(hexAddress, 'hex');
    var words = bech32.bech32.toWords(addressBytes);
    var prefix;
    if (['e', 'f'].includes(addressType)) {
        if (networkId === NetworkId.MAINNET) {
            prefix = 'stake';
        }
        else if (networkId === NetworkId.TESTNET) {
            prefix = 'stake_test';
        }
        else {
            throw new TypeError('Unsupported network type');
        }
        return bech32.bech32.encode(prefix, words, 1000);
    }
    else {
        if (networkId === NetworkId.MAINNET) {
            prefix = 'addr';
        }
        else if (networkId === NetworkId.TESTNET) {
            prefix = 'addr_test';
        }
        else {
            throw new TypeError('Unsupported network type');
        }
        return bech32.bech32.encode(prefix, words, 1000);
    }
};

var capitalize = function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};
var formatSupportedWallets = function (supportedWallets) {
    if (supportedWallets.length > 1) {
        return "".concat(supportedWallets.slice(0, -1).join(', '), " or ").concat(supportedWallets.slice(-1)[0]);
    }
    else {
        return supportedWallets[0];
    }
};

var WrongNetworkTypeError = /** @class */ (function (_super) {
    __extends(WrongNetworkTypeError, _super);
    function WrongNetworkTypeError(targetNetwork, currentNetwork) {
        var _this = this;
        var message = "You have tried to call functions on ".concat(capitalize(currentNetwork), ", while the network type is limited to ").concat(capitalize(targetNetwork), ".");
        _this = _super.call(this, message) || this;
        _this.name = 'WrongNetworkTypeError';
        return _this;
    }
    return WrongNetworkTypeError;
}(Error));

var NetworkType;
(function (NetworkType) {
    NetworkType["MAINNET"] = "mainnet";
    NetworkType["TESTNET"] = "testnet";
})(NetworkType || (NetworkType = {}));

var Wallet = /** @class */ (function () {
    function Wallet() {
    }
    Wallet.disconnect = function () {
        this.enabledObserver.set(false);
        this.enabledWalletObserver.set(null);
        this.stakeAddressObserver.set(null);
        this.usedAddressesObserver.set([]);
        this.unusedAddressesObserver.set([]);
        this.accountBalanceObserver.set(0);
        this.isConnected.set(false);
        this.lastConnectedWallet.set('');
        this.meerkatAddressObserver.set('');
        window.dispatchEvent(new Event('storage'));
        this.clearLocalStorage();
    };
    Wallet.clearLocalStorage = function () {
        window.localStorage.removeItem('cf-wallet-connected');
        window.localStorage.removeItem('cf-last-connected-wallet');
    };
    Wallet.subscribeToObservables = function (setIsEnabled, setIsConnecting, setEnabledWallet, setStakeAddress, setUsedAddresses, setUnusedAddresses, setInstalledExtensions, setAccountBalance, setIsConnected, setLastConnectedWallet, setMeerkatAddress) {
        this.enabledObserver.subscribe(setIsEnabled);
        this.isConnectingObserver.subscribe(setIsConnecting);
        this.enabledWalletObserver.subscribe(setEnabledWallet);
        this.stakeAddressObserver.subscribe(setStakeAddress);
        this.usedAddressesObserver.subscribe(setUsedAddresses);
        this.unusedAddressesObserver.subscribe(setUnusedAddresses);
        this.installedWalletExtensionsObserver.subscribe(setInstalledExtensions);
        this.accountBalanceObserver.subscribe(setAccountBalance);
        this.isConnected.subscribe(setIsConnected);
        this.lastConnectedWallet.subscribe(setLastConnectedWallet);
        this.meerkatAddressObserver.subscribe(setMeerkatAddress);
    };
    Wallet.unsubscribeFromObservables = function (setIsEnabled, setIsConnecting, setEnabledWallet, setStakeAddress, setUsedAddresses, setUnusedAddresses, setInstalledExtensions, setAccountBalance, setIsConnected, setLastConnectedWallet, setMeerkatAddress) {
        this.enabledObserver.unsubscribe(setIsEnabled);
        this.isConnectingObserver.unsubscribe(setIsConnecting);
        this.enabledWalletObserver.unsubscribe(setEnabledWallet);
        this.stakeAddressObserver.unsubscribe(setStakeAddress);
        this.usedAddressesObserver.unsubscribe(setUsedAddresses);
        this.unusedAddressesObserver.unsubscribe(setUnusedAddresses);
        this.installedWalletExtensionsObserver.unsubscribe(setInstalledExtensions);
        this.accountBalanceObserver.unsubscribe(setAccountBalance);
        this.isConnected.unsubscribe(setIsConnected);
        this.lastConnectedWallet.unsubscribe(setLastConnectedWallet);
        this.meerkatAddressObserver.unsubscribe(setMeerkatAddress);
    };
    Wallet.startInjectWalletListener = function () {
        var _this = this;
        this.injectWalletListener = new InjectWalletListener(function () {
            _this.installedWalletExtensionsObserver.set(_this.getInstalledWalletExtensions());
        });
        this.injectWalletListener.start();
    };
    Wallet.stopInjectWalletListener = function () {
        if (this.injectWalletListener) {
            this.injectWalletListener.stop();
        }
    };
    Wallet.unwrapApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cardano;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cardano = window.cardano;
                        return [4 /*yield*/, cardano[this.lastConnectedWallet.get() === 'typhon'
                                ? 'typhoncip30'
                                : this.lastConnectedWallet.get()].enable()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Wallet.checkEnabled = function (network) {
        return __awaiter(this, void 0, void 0, function () {
            var cardano;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cardano = window.cardano;
                        if (typeof cardano === 'undefined') {
                            return [2 /*return*/];
                        }
                        if (!(Wallet.lastConnectedWallet.get() !== '')) return [3 /*break*/, 4];
                        if (!(Wallet.lastConnectedWallet.get() === 'typhon')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.connectToWallet('typhoncip30', network)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.connectToWallet(this.lastConnectedWallet.get(), network)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Wallet.connectToWallet = function (walletName, netWorkType, retries, retryIntervalInMs) {
        if (retries === void 0) { retries = 20; }
        if (retryIntervalInMs === void 0) { retryIntervalInMs = 25; }
        return __awaiter(this, void 0, void 0, function () {
            var checkWalletAvailable, establishConnection;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        checkWalletAvailable = function (walletName, retries, retryIntervalInMs) {
                            return new Promise(function (resolve, reject) {
                                var cardano = window.cardano;
                                if (typeof cardano === 'undefined' ||
                                    typeof cardano[walletName] === 'undefined') {
                                    if (retries > 0) {
                                        setTimeout(function () {
                                            return resolve(checkWalletAvailable(walletName, retries - 1, retryIntervalInMs));
                                        }, retryIntervalInMs);
                                    }
                                    else {
                                        reject();
                                    }
                                }
                                else {
                                    resolve();
                                }
                            });
                        };
                        establishConnection = function (limitNetwork) { return __awaiter(_this, void 0, void 0, function () {
                            var cardano, api_1, hexAddresses, bech32Address, networkType, setValuesAsync;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, checkWalletAvailable(walletName, retries, retryIntervalInMs)];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _a.sent();
                                        throw new ExtensionNotInjectedError(walletName);
                                    case 3:
                                        cardano = window.cardano;
                                        if (!(typeof cardano[walletName] !== 'undefined' &&
                                            typeof cardano[walletName].isEnabled === 'function')) return [3 /*break*/, 7];
                                        return [4 /*yield*/, cardano[walletName].enable()];
                                    case 4:
                                        api_1 = _a.sent();
                                        if (!(typeof api_1.getRewardAddresses === 'function')) return [3 /*break*/, 6];
                                        return [4 /*yield*/, api_1.getRewardAddresses()];
                                    case 5:
                                        hexAddresses = _a.sent();
                                        if (hexAddresses && hexAddresses.length > 0) {
                                            try {
                                                bech32Address = decodeHexAddress(hexAddresses[0]);
                                                networkType = NetworkType.MAINNET;
                                                if (bech32Address.startsWith('stake_test')) {
                                                    networkType = NetworkType.TESTNET;
                                                }
                                                if (limitNetwork && limitNetwork !== networkType) {
                                                    throw new WrongNetworkTypeError(networkType, limitNetwork);
                                                }
                                                setValuesAsync = function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var usedAddresses, unusedAddresses, cborBalance, balance;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                if (!(typeof api_1.getUsedAddresses === 'function')) return [3 /*break*/, 2];
                                                                return [4 /*yield*/, api_1.getUsedAddresses()];
                                                            case 1:
                                                                usedAddresses = _a.sent();
                                                                this.usedAddressesObserver.set(usedAddresses.map(function (address) {
                                                                    return decodeHexAddress(address);
                                                                }));
                                                                _a.label = 2;
                                                            case 2:
                                                                if (!(typeof api_1.getUnusedAddresses === 'function')) return [3 /*break*/, 4];
                                                                return [4 /*yield*/, api_1.getUnusedAddresses()];
                                                            case 3:
                                                                unusedAddresses = _a.sent();
                                                                this.unusedAddressesObserver.set(unusedAddresses.map(function (address) {
                                                                    return decodeHexAddress(address);
                                                                }));
                                                                _a.label = 4;
                                                            case 4:
                                                                if (!(typeof api_1.getBalance === 'function')) return [3 /*break*/, 6];
                                                                return [4 /*yield*/, api_1.getBalance()];
                                                            case 5:
                                                                cborBalance = _a.sent();
                                                                balance = cborg.decode(buffer.Buffer.from(cborBalance, 'hex'));
                                                                this.accountBalanceObserver.set(balance / 1000000);
                                                                _a.label = 6;
                                                            case 6: return [2 /*return*/];
                                                        }
                                                    });
                                                }); };
                                                // without await otherwise the main process will be blocked for a few seconds
                                                setValuesAsync();
                                                this.stakeAddressObserver.set(bech32Address);
                                                this.enabledWalletObserver.set(walletName);
                                                this.enabledObserver.set(true);
                                                this.isConnected.set(true);
                                                if (walletName === 'typhoncip30') {
                                                    window.localStorage.setItem('cf-last-connected-wallet', 'typhon');
                                                    this.lastConnectedWallet.set('typhon');
                                                }
                                                else {
                                                    window.localStorage.setItem('cf-last-connected-wallet', walletName);
                                                    this.lastConnectedWallet.set(walletName);
                                                }
                                                window.localStorage.setItem('cf-wallet-connected', String(true));
                                                window.dispatchEvent(new Event('storage'));
                                            }
                                            catch (error) {
                                                throw error;
                                            }
                                        }
                                        return [3 /*break*/, 7];
                                    case 6: throw new WalletNotCip30CompatibleError(walletName);
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, establishConnection(netWorkType)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Wallet.connect = function (walletName, network, onConnect, onError) {
        return __awaiter(this, void 0, void 0, function () {
            var cardano, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isConnecting.set(true);
                        cardano = window.cardano;
                        walletName = walletName.toLowerCase();
                        if (!(typeof cardano !== 'undefined')) return [3 /*break*/, 8];
                        if (!(typeof cardano[walletName] !== 'undefined')) return [3 /*break*/, 6];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        if (walletName === 'typhon') {
                            walletName = 'typhoncip30';
                        }
                        return [4 /*yield*/, this.connectToWallet(walletName, network)];
                    case 2:
                        _a.sent();
                        if (typeof onConnect === 'function') {
                            onConnect();
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        error_2 = _a.sent();
                        if (typeof onError === 'function') {
                            onError(error_2);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        this.isConnecting.set(false);
                        return [7 /*endfinally*/];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        this.isConnecting.set(false);
                        if (typeof onError === 'function') {
                            onError(new WalletNotInstalledError(walletName));
                        }
                        _a.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        this.isConnecting.set(false);
                        if (typeof onError === 'function') {
                            onError(new ExtensionNotInjectedError(walletName));
                        }
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    Wallet.getInstalledWalletExtensions = function (supportedWallets) {
        var cardano = window.cardano;
        if (typeof cardano === 'undefined') {
            return [];
        }
        if (supportedWallets) {
            return Object.keys(cardano)
                .map(function (walletExtension) { return walletExtension.toLowerCase(); })
                .filter(function (walletExtension) {
                return supportedWallets
                    .map(function (walletName) { return walletName.toLowerCase(); })
                    .includes(walletExtension);
            });
        }
        else {
            return Object.keys(cardano)
                .filter(function (walletExtension) {
                return typeof cardano[walletExtension].enable === 'function';
            })
                .map(function (walletExtension) { return walletExtension.toLowerCase(); });
        }
    };
    Wallet.getRewardAddresses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var api, hexAddresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.unwrapApi()];
                    case 1:
                        api = _a.sent();
                        if (!(typeof api.getRewardAddresses === 'function')) return [3 /*break*/, 3];
                        return [4 /*yield*/, api.getRewardAddresses()];
                    case 2:
                        hexAddresses = _a.sent();
                        if (hexAddresses && hexAddresses.length > 0) {
                            return [2 /*return*/, hexAddresses.map(function (hexAddress) {
                                    return decodeHexAddress(hexAddress);
                                })];
                        }
                        else {
                            return [2 /*return*/, []];
                        }
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Wallet.signMessage = function (message, onSignMessage, onSignError, limitNetwork) {
        return __awaiter(this, void 0, void 0, function () {
            var api, hexAddresses, networkType, error, hexAddress, hexMessage, i, l, dataSignature, signature, key, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabledObserver.get() || !this.enabledWalletObserver.get()) {
                            return [2 /*return*/];
                        }
                        if (typeof message === 'undefined') {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Wallet.unwrapApi()];
                    case 1:
                        api = _a.sent();
                        return [4 /*yield*/, this.getRewardAddresses()];
                    case 2:
                        hexAddresses = _a.sent();
                        if (!(hexAddresses.length > 0)) return [3 /*break*/, 6];
                        networkType = NetworkType.MAINNET;
                        if (hexAddresses[0] && hexAddresses[0].startsWith('stake_test')) {
                            networkType = NetworkType.TESTNET;
                        }
                        if (limitNetwork && limitNetwork !== networkType) {
                            error = new WrongNetworkTypeError(networkType, limitNetwork);
                            if (typeof onSignError === 'function') {
                                onSignError(error);
                            }
                            else {
                                console.warn(error);
                            }
                            return [2 /*return*/];
                        }
                        if (!(hexAddresses.length > 0)) return [3 /*break*/, 6];
                        hexAddress = hexAddresses[0];
                        hexMessage = '';
                        for (i = 0, l = message.length; i < l; i++) {
                            hexMessage += message.charCodeAt(i).toString(16);
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, api.signData(hexAddress, hexMessage)];
                    case 4:
                        dataSignature = _a.sent();
                        if (typeof onSignMessage === 'function') {
                            signature = dataSignature.signature, key = dataSignature.key;
                            onSignMessage(signature, key);
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_3 = _a.sent();
                        if (typeof onSignError === 'function') {
                            onSignError(error_3);
                        }
                        else {
                            console.warn(error_3);
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Wallet.isConnecting = new Observable(Boolean(window.localStorage.getItem('cf-wallet-connected')));
    Wallet.lastConnectedWallet = new Observable(window.localStorage.getItem('cf-last-connected-wallet') || '');
    Wallet.isConnected = new Observable(false);
    Wallet.enabledObserver = new Observable(false);
    Wallet.isConnectingObserver = new Observable(false);
    Wallet.enabledWalletObserver = new Observable(null);
    Wallet.stakeAddressObserver = new Observable(null);
    Wallet.installedWalletExtensionsObserver = new Observable([]);
    Wallet.usedAddressesObserver = new Observable([]);
    Wallet.unusedAddressesObserver = new Observable([]);
    Wallet.accountBalanceObserver = new Observable(0);
    Wallet.meerkatAddressObserver = new Observable('');
    return Wallet;
}());

// shared types for frontend frameworks
var UnavailableWalletVisibility;
(function (UnavailableWalletVisibility) {
    UnavailableWalletVisibility[UnavailableWalletVisibility["SHOW_UNAVAILABLE"] = 0] = "SHOW_UNAVAILABLE";
    UnavailableWalletVisibility[UnavailableWalletVisibility["HIDE_UNAVAILABLE"] = 1] = "HIDE_UNAVAILABLE";
    UnavailableWalletVisibility[UnavailableWalletVisibility["SHOW_UNAVAILABLE_ON_MOBILE"] = 2] = "SHOW_UNAVAILABLE_ON_MOBILE";
})(UnavailableWalletVisibility || (UnavailableWalletVisibility = {}));

/** @class */ ((function (_super) {
    __extends(WrongNetworkTypeError, _super);
    function WrongNetworkTypeError(targetNetwork, currentNetwork) {
        var _this = this;
        var message = "You have tried to call functions on ".concat(capitalize(currentNetwork), ", while the network type is limited to ").concat(capitalize(targetNetwork), ".");
        _this = _super.call(this, message) || this;
        _this.name = 'WrongNetworkTypeError';
        return _this;
    }
    return WrongNetworkTypeError;
})(Error));
var WalletNotCip30CompatibleError = /** @class */ (function (_super) {
    __extends(WalletNotCip30CompatibleError, _super);
    function WalletNotCip30CompatibleError(walletname) {
        var _this = this;
        var message = "It seems that the API of ".concat(capitalize(walletname), " is not cip30 compatible.");
        _this = _super.call(this, message) || this;
        _this.name = 'WalletNotCip30CompatibleError';
        return _this;
    }
    return WalletNotCip30CompatibleError;
}(Error));
var ExtensionNotInjectedError = /** @class */ (function (_super) {
    __extends(ExtensionNotInjectedError, _super);
    function ExtensionNotInjectedError(walletname) {
        var _this = this;
        var message = "It seems that the API of ".concat(capitalize(walletname), " is not injected and window.cardano.").concat(walletname, " is not available.");
        _this = _super.call(this, message) || this;
        _this.name = 'ExtensionNotInjectedError';
        return _this;
    }
    return ExtensionNotInjectedError;
}(Error));
var WalletNotInstalledError = /** @class */ (function (_super) {
    __extends(WalletNotInstalledError, _super);
    function WalletNotInstalledError(walletName) {
        var _this = _super.call(this, "The wallet ".concat(walletName, " is not installed.")) || this;
        _this.name = 'WalletNotInstalledError';
        return _this;
    }
    return WalletNotInstalledError;
}(Error));
var WalletExtensionNotFoundError = /** @class */ (function (_super) {
    __extends(WalletExtensionNotFoundError, _super);
    function WalletExtensionNotFoundError(walletname) {
        var _this = this;
        var message = "".concat(capitalize(walletname), " was not found. Please check if it is installed correctly.");
        _this = _super.call(this, message) || this;
        _this.name = 'WalletExtensionNotFoundError';
        return _this;
    }
    return WalletExtensionNotFoundError;
}(Error));
/** @class */ ((function (_super) {
    __extends(EnablementFailedError, _super);
    function EnablementFailedError(walletname) {
        var _this = this;
        var message = "Enablement of ".concat(capitalize(walletname), " failed. Please check your setup.");
        _this = _super.call(this, message) || this;
        _this.name = 'EnablementFailedError';
        return _this;
    }
    return EnablementFailedError;
})(Error));
var checkIsMobile = function () {
    return typeof navigator === 'undefined'
        ? false
        : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
var estimateAvailableWallets = function (supportedWallets, showUnavailableWallets, alwaysVisibleWallets, installedExtensions) {
    var availableWallets = [];
    var HIDE_UNAVAILABLE = UnavailableWalletVisibility.HIDE_UNAVAILABLE, SHOW_UNAVAILABLE = UnavailableWalletVisibility.SHOW_UNAVAILABLE;
    if (showUnavailableWallets === HIDE_UNAVAILABLE) {
        availableWallets = installedExtensions.filter(function (extension) {
            return supportedWallets
                .map(function (supportedExtension) { return supportedExtension.toLowerCase(); })
                .includes(extension);
        });
    }
    else if (showUnavailableWallets === SHOW_UNAVAILABLE) {
        availableWallets = supportedWallets;
    }
    else {
        if (checkIsMobile()) {
            availableWallets = supportedWallets;
        }
        else {
            availableWallets = installedExtensions.filter(function (extension) {
                return supportedWallets
                    .map(function (supportedExtension) { return supportedExtension.toLowerCase(); })
                    .includes(extension);
            });
        }
    }
    availableWallets = Array.from(new Set(__spreadArray(__spreadArray([], alwaysVisibleWallets.map(function (wallet) { return wallet.toLowerCase(); }), true), availableWallets, true)));
    return availableWallets;
};
var InjectWalletListener = /** @class */ (function () {
    function InjectWalletListener(onChangeCallback) {
        this.interval = 20;
        this.timeoutId = null;
        this.onChangeCallback = onChangeCallback;
        this.wallets = [];
    }
    InjectWalletListener.prototype.checkWallets = function () {
        if (typeof window.cardano === 'undefined') {
            if (this.wallets.length > 0) {
                this.wallets = [];
                this.onChangeCallback(this.wallets);
            }
            return;
        }
        var injectedWallets = Object.keys(window.cardano).sort();
        if (JSON.stringify(this.wallets) !== JSON.stringify(injectedWallets)) {
            this.wallets = injectedWallets;
            this.onChangeCallback(this.wallets);
        }
    };
    InjectWalletListener.prototype.start = function () {
        var _this = this;
        this.timeoutId = setTimeout(function () {
            _this.checkWallets();
            if (_this.interval < 10000) {
                _this.interval = _this.interval * 1.5;
            }
            _this.start();
        }, this.interval);
    };
    InjectWalletListener.prototype.stop = function () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    };
    return InjectWalletListener;
}());

function useCardano(props) {
    var _this = this;
    var dAppConnect = react.useRef(null);
    var _a = react.useState(Wallet.meerkatAddressObserver.get()), meerkatAddress = _a[0], setMeerkatAddress = _a[1];
    var _b = react.useState(Wallet.enabledObserver.get()), isEnabled = _b[0], setIsEnabled = _b[1];
    var _c = react.useState(Wallet.isConnectingObserver.get()), isConnecting = _c[0], setIsConnecting = _c[1];
    var _d = react.useState(Wallet.enabledWalletObserver.get()), enabledWallet = _d[0], setEnabledWallet = _d[1];
    var _e = react.useState(Wallet.stakeAddressObserver.get()), stakeAddress = _e[0], setStakeAddress = _e[1];
    var _f = react.useState(Wallet.usedAddressesObserver.get()), usedAddresses = _f[0], setUsedAddresses = _f[1];
    var _g = react.useState(Wallet.unusedAddressesObserver.get()), unusedAddresses = _g[0], setUnusedAddresses = _g[1];
    var _h = react.useState(Wallet.accountBalanceObserver.get()), accountBalance = _h[0], setAccountBalance = _h[1];
    var _j = react.useState(Wallet.installedWalletExtensionsObserver.get()), installedExtensions = _j[0], setInstalledExtensions = _j[1];
    var _k = react.useState(Wallet.isConnected.get()), isConnected = _k[0], setIsConnected = _k[1];
    var _l = react.useState(Wallet.lastConnectedWallet.get()), lastConnectedWallet = _l[0], setLastConnectedWallet = _l[1];
    var limitNetwork = (props === null || props === void 0 ? void 0 : props.limitNetwork) || NetworkType.TESTNET;
    react.useEffect(function () {
        Wallet.checkEnabled(limitNetwork);
        Wallet.subscribeToObservables(setIsEnabled, setIsConnecting, setEnabledWallet, setStakeAddress, setUsedAddresses, setUnusedAddresses, setInstalledExtensions, setAccountBalance, setIsConnected, setLastConnectedWallet, setMeerkatAddress);
        return function () {
            Wallet.unsubscribeFromObservables(setIsEnabled, setIsConnecting, setEnabledWallet, setStakeAddress, setUsedAddresses, setUnusedAddresses, setInstalledExtensions, setAccountBalance, setIsConnected, setLastConnectedWallet, setMeerkatAddress);
        };
    }, []);
    var initDappConnect = react.useCallback(function (dAppName, dAppUrl, verifyConnection, onApiInject, onApiEject) {
        dAppConnect.current = new cardanoPeerConnect.DAppPeerConnect({
            dAppInfo: {
                name: dAppName,
                url: dAppUrl,
            },
            verifyConnection: verifyConnection,
            onApiInject: onApiInject,
            onApiEject: onApiEject,
        });
        dAppConnect.current.generateIdenticon();
        setMeerkatAddress(dAppConnect.current.getAddress());
    }, []);
    var disconnect = react.useCallback(function () {
        Wallet.disconnect();
    }, []);
    var connectToWallet = react.useCallback(function (walletName, retries, retryIntervalInMs) {
        if (retries === void 0) { retries = 20; }
        if (retryIntervalInMs === void 0) { retryIntervalInMs = 25; }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                Wallet.connectToWallet(walletName, limitNetwork, retries, retryIntervalInMs);
                return [2 /*return*/];
            });
        });
    }, [limitNetwork]);
    var checkEnabled = react.useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            Wallet.checkEnabled(limitNetwork);
            return [2 /*return*/];
        });
    }); }, [lastConnectedWallet]);
    var signMessage = react.useCallback(function (message, onSignMessage, onSignError) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            Wallet.signMessage(message, onSignMessage, onSignError);
            return [2 /*return*/];
        });
    }); }, [isEnabled, enabledWallet, limitNetwork]);
    var connect = react.useCallback(function (walletName, onConnect, onError) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (isConnecting)
                return [2 /*return*/];
            Wallet.connect(walletName, limitNetwork, onConnect, onError);
            return [2 /*return*/];
        });
    }); }, [connectToWallet, isConnecting]);
    react.useEffect(function () {
        if (isConnected) {
            checkEnabled();
        }
    }, [isConnected]);
    react.useEffect(function () {
        Wallet.startInjectWalletListener();
        return function () {
            Wallet.stopInjectWalletListener();
        };
    }, []);
    return {
        isEnabled: isEnabled,
        isConnected: isConnected,
        isConnecting: isConnecting,
        enabledWallet: enabledWallet,
        stakeAddress: stakeAddress,
        usedAddresses: usedAddresses,
        unusedAddresses: unusedAddresses,
        signMessage: signMessage,
        connect: connect,
        disconnect: disconnect,
        installedExtensions: installedExtensions,
        accountBalance: accountBalance,
        dAppConnect: dAppConnect,
        initDappConnect: initDappConnect,
        meerkatAddress: meerkatAddress,
    };
}

var Modal = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n"], ["\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n"])));
var ModalContent = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #aeaeae;\n  border-radius: 9px;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"], ["\n  background-color: #fefefe;\n  margin: 15% auto;\n  padding: 20px;\n  border: 1px solid #aeaeae;\n  border-radius: 9px;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));
var templateObject_1$1, templateObject_2$1;

var ModalDialog = function (props) {
    var visible = props.visible, content = props.content, handleClose = props.handleClose, icon = props.icon;
    return (jsxRuntime.jsx(Modal, __assign({ onClick: function () {
            if (typeof handleClose === 'function') {
                handleClose();
            }
        }, style: { display: visible ? 'block' : 'none' } }, { children: jsxRuntime.jsxs(ModalContent, __assign({ "data-testid": "modal-content" }, { children: [jsxRuntime.jsx(reactQrcodeLogo.QRCode, { removeQrCodeBehindLogo: true, logoImage: icon ? icon : undefined, ecLevel: "H", eyeRadius: 5, qrStyle: "dots", value: content }), jsxRuntime.jsx("p", __assign({ style: { maxWidth: 300 } }, { children: "You can use a CIP45 compliant mobile wallet on your smartphone (e.g. Eternl) to connect an external peer to peer wallet" }))] })) })));
};

var ConnectWalletButton = function (_a) {
    var _b;
    var label = _a.label, disabled = _a.disabled, message = _a.message, _c = _a.supportedWallets, supportedWallets = _c === void 0 ? [
        'Flint',
        'Nami',
        'Eternl',
        'Yoroi',
        'Typhon',
        'NuFi',
        'Lace',
    ] : _c, _d = _a.showUnavailableWallets, showUnavailableWallets = _d === void 0 ? UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE : _d, _e = _a.alwaysVisibleWallets, alwaysVisibleWallets = _e === void 0 ? [] : _e, primaryColor = _a.primaryColor, _f = _a.borderRadius, borderRadius = _f === void 0 ? 15 : _f, customCSS = _a.customCSS, _g = _a.customActions, customActions = _g === void 0 ? [] : _g, _h = _a.hideActionMenu, hideActionMenu = _h === void 0 ? false : _h, afterComponent = _a.afterComponent, beforeComponent = _a.beforeComponent, limitNetwork = _a.limitNetwork, _j = _a.peerConnectEnabled, peerConnectEnabled = _j === void 0 ? false : _j, onConnect = _a.onConnect, onDisconnect = _a.onDisconnect, onSignMessage = _a.onSignMessage, _k = _a.showAccountBalance, showAccountBalance = _k === void 0 ? false : _k, onStakeAddressClick = _a.onStakeAddressClick, onConnectError = _a.onConnectError, _l = _a.dAppName, dAppName = _l === void 0 ? 'Awesome DApp' : _l, _m = _a.dAppUrl, dAppUrl = _m === void 0 ? 'http://awesome-dapp-url.tld/' : _m;
    var _o = useCardano({ limitNetwork: limitNetwork }), isEnabled = _o.isEnabled, stakeAddress = _o.stakeAddress, signMessage = _o.signMessage, connect = _o.connect, disconnect = _o.disconnect, isConnected = _o.isConnected, installedExtensions = _o.installedExtensions, enabledWallet = _o.enabledWallet, accountBalance = _o.accountBalance, dAppConnect = _o.dAppConnect, initDappConnect = _o.initDappConnect, meerkatAddress = _o.meerkatAddress;
    var _p = react.useState(false), showModalDialog = _p[0], setShowModalDialog = _p[1];
    react.useEffect(function () {
        if (peerConnectEnabled && dAppConnect.current === null) {
            var verifyConnection = function (walletInfo, callback) {
                callback(window.confirm("Do you want to connect to wallet ".concat(walletInfo.address, "?")), true);
            };
            var onApiInject = function (name, address) {
                connect(name);
            };
            var onApiEject = function (name, address) {
                disconnect();
            };
            initDappConnect(dAppName, dAppUrl, verifyConnection, onApiInject, onApiEject);
        }
    }, []);
    var isMobile = checkIsMobile();
    var availableWallets = estimateAvailableWallets(supportedWallets, showUnavailableWallets, alwaysVisibleWallets, installedExtensions);
    var connectWallet = function (walletName) { return __awaiter(void 0, void 0, void 0, function () {
        var onSuccess, onError;
        return __generator(this, function (_a) {
            onSuccess = function () {
                if (typeof onConnect === 'function') {
                    onConnect(walletName);
                }
            };
            onError = function (error) {
                if (typeof onConnectError === 'function') {
                    onConnectError(walletName, error);
                }
                else {
                    if (error instanceof WalletExtensionNotFoundError) {
                        if (walletName.toLowerCase() === 'nami') {
                            window.open("".concat(chromeStoreUrl).concat(chromeWalletExtensions.NAMI.name, "/").concat(chromeWalletExtensions.NAMI.id));
                        }
                        else if (walletName.toLowerCase() === 'flint') {
                            window.open("".concat(chromeStoreUrl).concat(chromeWalletExtensions.FLINT.name, "/").concat(chromeWalletExtensions.FLINT.id));
                        }
                        else if (walletName.toLowerCase() === 'typhon') {
                            window.open("".concat(chromeStoreUrl).concat(chromeWalletExtensions.TYPHON.name, "/").concat(chromeWalletExtensions.TYPHON.id));
                        }
                        else if (walletName.toLowerCase() === 'yoroi') {
                            window.open("".concat(chromeStoreUrl).concat(chromeWalletExtensions.YOROI.name, "/").concat(chromeWalletExtensions.YOROI.id));
                        }
                        else if (walletName.toLowerCase() === 'eternl') {
                            window.open("".concat(chromeStoreUrl).concat(chromeWalletExtensions.ETERNL.name, "/").concat(chromeWalletExtensions.ETERNL.id));
                        }
                        else if (walletName.toLowerCase() === 'gerowallet') {
                            window.open("".concat(chromeStoreUrl).concat(chromeWalletExtensions.GEROWALLET.name, "/").concat(chromeWalletExtensions.GEROWALLET.id));
                        }
                        else if (walletName.toLowerCase() === 'nufi') {
                            window.open("".concat(chromeStoreUrl).concat(chromeWalletExtensions.NUFI.name, "/").concat(chromeWalletExtensions.NUFI.id));
                        }
                        else if (walletName.toLowerCase() === 'lace') {
                            window.open("".concat(chromeStoreUrl).concat(chromeWalletExtensions.LACE.name, "/").concat(chromeWalletExtensions.LACE.id));
                        }
                        else {
                            alert("Please make sure you are using a modern browser and the ".concat(walletName, " browser extension has been installed."));
                        }
                    }
                    else {
                        alert("Something went wrong. Please try again later.");
                    }
                }
            };
            connect(walletName, onSuccess, onError);
            return [2 /*return*/];
        });
    }); };
    var connectMobileWallet = function (walletName) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!isMobile) {
                connectWallet(walletName);
            }
            if (!mobileWallets.includes(walletName.toLowerCase())) {
                return [2 /*return*/];
            }
            if (walletName.toLowerCase() === 'flint') {
                if (isWalletInstalled('flint')) {
                    connectWallet(walletName);
                }
                else {
                    window.location.href = "".concat(flintDeepLink).concat(encodeURIComponent(window.location.href));
                }
            }
            return [2 /*return*/];
        });
    }); };
    var themeColorObject = primaryColor
        ? Color(primaryColor)
        : Color('#0538AF');
    var getDefaultButtonTitle = function () {
        if (showAccountBalance) {
            var balanceWithTwoDecimalPlaces = Math.round(accountBalance * 100) / 100;
            return "\u20B3 ".concat(balanceWithTwoDecimalPlaces);
        }
        return "".concat(stakeAddress.slice(0, 12), "...");
    };
    var buttonTitle = stakeAddress && isConnected
        ? getDefaultButtonTitle()
        : label || 'Connect Wallet';
    var clickStakeAddress = function () {
        if (stakeAddress &&
            isConnected &&
            typeof onStakeAddressClick === 'function') {
            onStakeAddressClick(stakeAddress);
        }
    };
    var walletMenu = (jsxRuntime.jsxs(Menu$1, __assign({ id: "connect-wallet-menu" }, { children: [peerConnectEnabled && (jsxRuntime.jsxs(MenuItem$1, __assign({ borderRadius: borderRadius, primaryColor: themeColorObject.hex(), primaryColorLight: themeColorObject.mix(Color('white'), 0.9).hex(), onClick: function () { return setShowModalDialog(true); } }, { children: [jsxRuntime.jsx(MenuItemIcon$1, { src: getWalletIcon('peer-connect') }), "Link Wallet"] }))), availableWallets ? (availableWallets.map(function (availableWallet) {
                if (isMobile &&
                    !mobileWallets.includes(availableWallet.toLowerCase())) {
                    return (jsxRuntime.jsxs(DesktopMenuItem$1, __assign({ borderRadius: borderRadius }, { children: [jsxRuntime.jsx(MenuItemIcon$1, { src: getWalletIcon(availableWallet) }), capitalize(availableWallet), jsxRuntime.jsx("span", { children: "Desktop Only" })] }), availableWallet));
                }
                return (jsxRuntime.jsxs(MenuItem$1, __assign({ borderRadius: borderRadius, primaryColor: themeColorObject.hex(), primaryColorLight: themeColorObject
                        .mix(Color('white'), 0.9)
                        .hex(), onClick: function () { return connectMobileWallet(availableWallet); } }, { children: [jsxRuntime.jsx(MenuItemIcon$1, { src: getWalletIcon(availableWallet) }), capitalize(availableWallet)] }), availableWallet));
            })) : (jsxRuntime.jsx("span", __assign({ id: "connect-wallet-hint" }, { children: "Please install a wallet browser extension (".concat(formatSupportedWallets(supportedWallets), " are supported)") })))] })));
    var actionMenu = hideActionMenu ? null : (jsxRuntime.jsxs(Menu$1, __assign({ id: "connect-wallet-menu" }, { children: [typeof message === 'string' && (jsxRuntime.jsx(MenuItem$1, __assign({ borderRadius: borderRadius, primaryColor: themeColorObject.hex(), primaryColorLight: themeColorObject.mix(Color('white'), 0.9).hex(), onClick: function () { return signMessage(message, onSignMessage); } }, { children: "Sign a message" }))), customActions.map(function (customAction, index) { return (jsxRuntime.jsx(MenuItem$1, __assign({ borderRadius: borderRadius, primaryColor: themeColorObject.hex(), primaryColorLight: themeColorObject.mix(Color('white'), 0.9).hex(), onClick: customAction.onClick }, { children: customAction.label }), "custom-action-".concat(index))); }), jsxRuntime.jsx(MenuItem$1, __assign({ borderRadius: borderRadius, primaryColor: themeColorObject.hex(), primaryColorLight: themeColorObject.mix(Color('white'), 0.9).hex(), onClick: function () {
                    disconnect();
                    if (typeof onDisconnect === 'function') {
                        onDisconnect();
                    }
                } }, { children: "Disconnect" }))] })));
    if (typeof beforeComponent === 'undefined' && enabledWallet) {
        var walletIcon = getWalletIcon(enabledWallet);
        beforeComponent = (jsxRuntime.jsx("img", { height: 24, width: 24, style: { marginRight: '8px' }, src: walletIcon, alt: "".concat(enabledWallet, "-icon") }));
    }
    return (jsxRuntime.jsxs(Dropdown, __assign({ id: "connect-wallet-dropdown", customCSS: customCSS, primaryColor: themeColorObject.hex() }, { children: [peerConnectEnabled && (jsxRuntime.jsx(ModalDialog, { handleClose: function () { return setShowModalDialog(false); }, content: meerkatAddress, icon: (_b = dAppConnect.current) === null || _b === void 0 ? void 0 : _b.getIdenticon(), visible: showModalDialog })), jsxRuntime.jsxs(Button, __assign({ id: "connect-wallet-button", onClick: clickStakeAddress, borderRadius: borderRadius, primaryColor: themeColorObject.hex() }, { children: [beforeComponent, buttonTitle, afterComponent] })), !disabled && (isEnabled && isConnected ? actionMenu : walletMenu)] })));
};

var Menu = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: sans-serif;\n  min-width: 160px;\n  max-width: 240px;\n  width: fit-content;\n  z-index: 1;\n  ", "\n"], ["\n  font-family: sans-serif;\n  min-width: 160px;\n  max-width: 240px;\n  width: fit-content;\n  z-index: 1;\n  ", "\n"])), function (props) { return props.customCSS; });
var MenuItem = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  padding: 12px 16px;\n  text-decoration: none;\n  display: flex;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  align-items: center;\n  cursor: pointer;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n  border-bottom: none;\n  background-color: white;\n\n  ", "\n\n  ", "\n\n  ", "  \n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  color: ", ";\n  padding: 12px 16px;\n  text-decoration: none;\n  display: flex;\n  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  align-items: center;\n  cursor: pointer;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n  border-bottom: none;\n  background-color: white;\n\n  ", "\n\n  ", "\n\n  ", "  \n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (props) { return props.primaryColor; }, function (props) { return props.primaryColor; }, function (props) {
    return props.gap && props.gap > 0
        ? "margin-bottom: ".concat(props.gap, "px;\n         border-bottom: 1px solid ").concat(props.primaryColor, ";")
        : "&:first-child {\n          border-bottom: none;\n        }\n        \n        &:last-child {\n          border: 1px solid ".concat(props.primaryColor, ";\n        }");
}, function (props) {
    return props.borderRadius && "border-radius: ".concat(props.borderRadius, "px;");
}, function (props) {
    return props.borderRadius &&
        (!props.gap || props.gap < 1) &&
        "border-radius: unset;\n      &:first-child {\n    border-top-left-radius: ".concat(props.borderRadius, "px;\n    border-top-right-radius: ").concat(props.borderRadius, "px;\n      }\n      \n      &:last-child {\n    border-bottom-left-radius: ").concat(props.borderRadius, "px;\n    border-bottom-right-radius: ").concat(props.borderRadius, "px;\n      }\n    ");
}, function (props) { return props.primaryColorLight; });
var MenuItemIcon = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n"], ["\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n"])));
var DesktopMenuItem = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: #333;\n  position: relative;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  border-color: #333;\n  border-style: solid;\n  border-width: 1px;\n  background-color: #e3e3e3;\n  overflow: hidden;\n  border-bottom: none;\n\n  ", "\n\n  ", "\n\n  ", "  \n\n  & > span {\n    text-transform: uppercase;\n    font-size: 0.5rem;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    padding: 3px;\n    background: #777;\n    color: #fff;\n    text-align: center;\n    transform: rotate(-35deg);\n    translate: 25%;\n  }\n\n  & ", " {\n    filter: brightness(0);\n  }\n"], ["\n  color: #333;\n  position: relative;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  border-color: #333;\n  border-style: solid;\n  border-width: 1px;\n  background-color: #e3e3e3;\n  overflow: hidden;\n  border-bottom: none;\n\n  ", "\n\n  ", "\n\n  ", "  \n\n  & > span {\n    text-transform: uppercase;\n    font-size: 0.5rem;\n    position: absolute;\n    right: 0;\n    width: 100%;\n    padding: 3px;\n    background: #777;\n    color: #fff;\n    text-align: center;\n    transform: rotate(-35deg);\n    translate: 25%;\n  }\n\n  & ", " {\n    filter: brightness(0);\n  }\n"])), function (props) {
    return props.borderRadius && "border-radius: ".concat(props.borderRadius, "px;");
}, function (props) {
    return props.gap && props.gap > 0
        ? "margin-bottom: ".concat(props.gap, "px;\n         border-bottom: 1px solid #333;")
        : "&:first-child {\n          border-bottom: none;\n        }\n        \n        &:last-child {\n          border-bottom: 1px solid #333;\n        }";
}, function (props) {
    return props.borderRadius &&
        (!props.gap || props.gap < 1) &&
        "border-radius: unset;\n      &:first-child {\n    border-top-left-radius: ".concat(props.borderRadius, "px;\n    border-top-right-radius: ").concat(props.borderRadius, "px;\n      }\n      \n      &:last-child {\n    border-bottom-left-radius: ").concat(props.borderRadius, "px;\n    border-bottom-right-radius: ").concat(props.borderRadius, "px;\n      }\n    ");
}, MenuItemIcon);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

var ConnectWalletList = function (_a) {
    var _b = _a.supportedWallets, supportedWallets = _b === void 0 ? ['Flint', 'Nami', 'Eternl', 'Yoroi', 'NuFi', 'Lace'] : _b, primaryColor = _a.primaryColor, borderRadius = _a.borderRadius, gap = _a.gap, _c = _a.showUnavailableWallets, showUnavailableWallets = _c === void 0 ? UnavailableWalletVisibility.SHOW_UNAVAILABLE_ON_MOBILE : _c, _d = _a.alwaysVisibleWallets, alwaysVisibleWallets = _d === void 0 ? [] : _d, customCSS = _a.customCSS, limitNetwork = _a.limitNetwork, onConnect = _a.onConnect, onConnectError = _a.onConnectError;
    var _e = useCardano({
        limitNetwork: limitNetwork,
    }), connect = _e.connect, installedExtensions = _e.installedExtensions;
    var mobileWallets = ['flint'];
    var isMobile = checkIsMobile();
    var availableWallets = estimateAvailableWallets(supportedWallets, showUnavailableWallets, alwaysVisibleWallets, installedExtensions);
    var connectWallet = function (walletName) { return __awaiter(void 0, void 0, void 0, function () {
        var onSuccess, onError;
        return __generator(this, function (_a) {
            onSuccess = function () {
                if (typeof onConnect === 'function') {
                    onConnect(walletName);
                }
            };
            onError = function (error) {
                if (typeof onConnectError === 'function') {
                    onConnectError(walletName, error);
                }
                else {
                    if (error instanceof WalletExtensionNotFoundError) {
                        var chromeStoreUrl = 'https://chrome.google.com/webstore/detail/';
                        if (walletName.toLowerCase() === 'nami') {
                            window.open("".concat(chromeStoreUrl, "nami/lpfcbjknijpeeillifnkikgncikgfhdo"));
                        }
                        else if (walletName.toLowerCase() === 'flint') {
                            window.open("".concat(chromeStoreUrl, "flint-wallet/hnhobjmcibchnmglfbldbfabcgaknlkj"));
                        }
                        else if (walletName.toLowerCase() === 'typhon') {
                            window.open("".concat(chromeStoreUrl, "typhon-wallet/kfdniefadaanbjodldohaedphafoffoh"));
                        }
                        else if (walletName.toLowerCase() === 'yoroi') {
                            window.open("".concat(chromeStoreUrl, "yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb"));
                        }
                        else if (walletName.toLowerCase() === 'eternl') {
                            window.open("".concat(chromeStoreUrl, "eternl/kmhcihpebfmpgmihbkipmjlmmioameka"));
                        }
                        else if (walletName.toLowerCase() === 'gerowallet') {
                            window.open("".concat(chromeStoreUrl, "gerowallet/bgpipimickeadkjlklgciifhnalhdjhe"));
                        }
                        else if (walletName.toLowerCase() === 'nufi') {
                            window.open("".concat(chromeStoreUrl, "nufi/gpnihlnnodeiiaakbikldcihojploeca"));
                        }
                        else if (walletName.toLowerCase() === 'lace') {
                            window.open("".concat(chromeStoreUrl, "lace/gafhhkghbfjjkeiendhlofajokpaflmk"));
                        }
                        else {
                            alert("Please make sure you are using a modern browser and the ".concat(walletName, " browser extension has been installed."));
                        }
                    }
                    else {
                        alert("Something went wrong. Please try again later.");
                    }
                }
            };
            connect(walletName, onSuccess, onError);
            return [2 /*return*/];
        });
    }); };
    var connectMobileWallet = function (walletName) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (!isMobile) {
                connectWallet(walletName);
            }
            if (!mobileWallets.includes(walletName.toLowerCase())) {
                return [2 /*return*/];
            }
            if (walletName.toLowerCase() === 'flint') {
                if (isWalletInstalled('flint')) {
                    connectWallet(walletName);
                }
                else {
                    window.location.href = "https://flint-wallet.app.link/browse?dappUrl=".concat(encodeURIComponent(window.location.href));
                }
            }
            return [2 /*return*/];
        });
    }); };
    var themeColorObject = primaryColor
        ? Color(primaryColor)
        : Color('#0538AF');
    return (jsxRuntime.jsx(Menu, __assign({ customCSS: customCSS, "data-testid": "connect-wallet-list" }, { children: availableWallets ? (availableWallets.map(function (availableWallet) {
            if (isMobile &&
                !mobileWallets.includes(availableWallet.toLowerCase())) {
                return (jsxRuntime.jsxs(DesktopMenuItem, __assign({ primaryColor: themeColorObject.hex(), primaryColorLight: themeColorObject
                        .mix(Color('white'), 0.9)
                        .hex(), borderRadius: borderRadius, gap: gap }, { children: [jsxRuntime.jsx(MenuItemIcon, { src: getWalletIcon(availableWallet) }), capitalize(availableWallet), jsxRuntime.jsx("span", { children: "Desktop Only" })] }), availableWallet));
            }
            return (jsxRuntime.jsxs(MenuItem, __assign({ primaryColor: themeColorObject.hex(), primaryColorLight: themeColorObject
                    .mix(Color('white'), 0.9)
                    .hex(), borderRadius: borderRadius, gap: gap, onClick: function () { return connectMobileWallet(availableWallet); } }, { children: [jsxRuntime.jsx(MenuItemIcon, { src: getWalletIcon(availableWallet) }), capitalize(availableWallet)] }), availableWallet));
        })) : (jsxRuntime.jsx("span", { children: "Please install a wallet browser extension (".concat(formatSupportedWallets(supportedWallets), " are supported)") })) })));
};

exports.ConnectWalletButton = ConnectWalletButton;
exports.ConnectWalletList = ConnectWalletList;
exports.useCardano = useCardano;
//# sourceMappingURL=index.js.map