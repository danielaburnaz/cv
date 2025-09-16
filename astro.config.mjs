import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

/** @type {import('astro').AstroUserConfig} */
export default {
	integrations: [react(), tailwind({ config: { applyBaseStyles: true } })],
};
