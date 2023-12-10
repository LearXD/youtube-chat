/// <reference types="node" />
import { EventEmitter } from "events";
import { YoutubeId } from "./types/data";
/**
 * YouTubeライブチャット取得イベント
 */
export declare class LiveChat extends EventEmitter {
    #private;
    liveId?: string;
    constructor(id: YoutubeId, interval?: number);
    pause(): Promise<void>;
    resume(): Promise<void>;
    isPaused(): Promise<boolean | undefined>;
    start(): Promise<boolean>;
    stop(reason?: string): void;
}
