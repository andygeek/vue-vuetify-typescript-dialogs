/**
 * Dialog definition
 */
export interface Dialog {
	id: string;
	component: Vue.Component;
	props: Record<string, any>;
	dismissable?: boolean;
	handler: (result: boolean) => void;
	open?: boolean;
	resolved?: boolean;
	hideOverlay?: boolean;
	overlayColor?: string;
	overlayOpacity?: number;
	fullscreen?: boolean;
	width?: number;
	maxWidth?: number;
}
