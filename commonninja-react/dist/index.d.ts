/// <reference types="react" />
interface ICommonNinjaPluginProps {
    pluginId: string;
    type: string;
    pluginProps?: string;
    muteEvents?: boolean;
    onLoad?: () => void;
}
declare global {
    interface Window {
        CommonNinja: any;
    }
}
declare const CommonNinjaPlugin: (props: ICommonNinjaPluginProps) => JSX.Element;

export { CommonNinjaPlugin };
