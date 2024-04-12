import type {TurboModule} from "react-native";
import {TurboModuleRegistry} from "react-native";

export interface Config {
    url: string;
    timeStamp?: number;
    format?: "jpeg" | "png";
    dirSize?: number;
    headers?: { [key: string] : string|number };
    cacheName?: string;
}

export interface Thumbnail {
    path: string;
    size: number;
    mime: string;
    width: number;
    height: number;
}

export interface Spec extends TurboModule {
    readonly getConstants: () => {};

    createThumbnail(config: Config): Promise<Thumbnail>;

}

export default TurboModuleRegistry.get<Spec>("CreateThumbnail");
