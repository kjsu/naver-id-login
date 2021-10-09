import React, { useEffect } from 'react';

const useScript = (
	scriptUrl: string,
	scriptId: string,
	callback?: () => void
) => {
	useEffect(() => {
		const existingScript = document.getElementById(scriptId);

		if (!existingScript) {
			const script = document.createElement('script');
			script.src = scriptUrl;
			script.id = scriptId;
			document.body.appendChild(script);

			script.onload = () => {
				callback?.();
			};
		}

		existingScript && callback?.();

		return () => {
			callback && existingScript?.remove();
		};
	}, [scriptUrl, scriptId]);
};

export default useScript;