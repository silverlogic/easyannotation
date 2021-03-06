import Config from "../Config";
export declare class ColorPicker {
    private readonly target;
    private bodyElement;
    private hueValPicker;
    private paletteDiv;
    private sampleDiv;
    private colorPicker;
    private transparencyPicker;
    private alpha;
    private color;
    private originalColor;
    private hsvColor;
    private docEventsAdded;
    private isColorSlider;
    private listeners;
    constructor(target: HTMLElement, config: Config);
    private init;
    private changeVisibility;
    private onPickerDown;
    private addDocEvents;
    private transparencyEvt;
    private colorSlider;
    private transparencySlider;
    private docMouseMove;
    private getHex;
    private paletteClick;
    private hsvToRgb;
    private rgbToHsv;
    private hidePicker;
    show(): void;
    hide(): void;
    private getValidHexColor;
    setColor(color: string): void;
    private setColorInternal;
    private _setColor;
    on: (event: PickerEventType, callback: (color: string) => void, thisArg: any) => void;
    un: (event: PickerEventType, callback: (color: string) => void) => void;
    private addSwatches;
    private swatchClick;
    private onSave;
    private onCancel;
    isVisible: () => boolean;
}
declare type PickerEventType = 'change' | 'save' | 'cancel';
export {};
