import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';

const bootstrap = async () => {
	try {
 		return await bootstrapApplication(App);
	} catch (err) {
		// Make sure any bootstrap errors are visible during route extraction
		console.error('SERVER BOOTSTRAP ERROR:', err && ((err as any).stack || err));
		throw err;
	}
};

export default bootstrap;
