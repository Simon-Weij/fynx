import { $ } from "bun";
import Electrobun, { BrowserWindow, Updater } from "electrobun/bun";

const DEV_SERVER_PORT = 5173;
const DEV_SERVER_URL = `http://localhost:${DEV_SERVER_PORT}`;

// Check if Vite dev server is running for HMR
async function getMainViewUrl(): Promise<string> {
	const channel = await Updater.localInfo.channel();
	if (channel === "dev") {
		try {
			await fetch(DEV_SERVER_URL, { method: "HEAD" });
			console.log(`HMR enabled: Using Vite dev server at ${DEV_SERVER_URL}`);
			return DEV_SERVER_URL;
		} catch {
			console.log(
				"Vite dev server not running. Run 'bun run dev:hmr' for HMR support.",
			);
		}
	}
	return "views://mainview/index.html";
}

async function getIsDark(): Promise<boolean> {
  try {
    const out = await $`dbus-send --session --print-reply \
      --dest=org.freedesktop.portal.Desktop \
      /org/freedesktop/portal/desktop \
      org.freedesktop.portal.Settings.Read \
      string:"org.freedesktop.appearance" \
      string:"color-scheme"`.text();
    return out.includes("uint32 1");
  } catch {
	console.error("Couldn't detect theme, falling back to light theme.")
    return false; 
  }
}

const isDark = await getIsDark();
const baseUrl = await getMainViewUrl();

const url = new URL(baseUrl);
url.searchParams.set("theme", isDark ? "dark" : "light");

const mainWindow = new BrowserWindow({
	title: "Svelte App",
	url: url.toString(),
	frame: {
		width: 900,
		height: 700,
		x: 200,
		y: 200,
	},
});

console.log("Svelte app started!");
