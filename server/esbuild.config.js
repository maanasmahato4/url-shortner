import esbuild from 'esbuild';

esbuild.build({
	entryPoints: ['./src/**/*'],
	platform: 'node',
	outdir: './dist',
	format: 'esm',
	bundle: true,
});
