import { AbstractToolbarItem } from "./AbstractToolbarItem";
import InternalConfig from "../utils/InternalConfig";
import { BaseAnnotator } from "../annotators/BaseAnnotator";
import { AnnotatorContainer } from "../AnnotatorContainer";
export declare class EllipseToolbarItem extends AbstractToolbarItem {
    constructor();
    createAnnotator(config: InternalConfig, parent: AnnotatorContainer): BaseAnnotator;
}
