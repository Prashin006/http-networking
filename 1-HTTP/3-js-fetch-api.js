import { getURL, generateKey, logIssues, getSettings } from "./0-utilities.js";

const url = getURL();
const settings = getSettings();

const response = await fetch(url, settings);
const issues = await response.json();

logIssues(issues);
