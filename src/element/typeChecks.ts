import {
  ExcalidrawElement,
  ExcalidrawTextElement,
  ExcalidrawLinearElement,
  ExcalidrawPathElement,
} from "./types";

export function isTextElement(
  element: ExcalidrawElement | null,
): element is ExcalidrawTextElement {
  return element != null && element.type === "text";
}

export function isLinearElement(
  element?: ExcalidrawElement | null,
): element is ExcalidrawLinearElement {
  return (
    element != null && (element.type === "arrow" || element.type === "line")
  );
}

export function isPathElement(
  element?: ExcalidrawElement | null,
): element is ExcalidrawPathElement {
  return element != null && element.type === "path";
}

export function isExcalidrawElement(element: any): boolean {
  return (
    element?.type === "text" ||
    element?.type === "diamond" ||
    element?.type === "rectangle" ||
    element?.type === "ellipse" ||
    element?.type === "arrow" ||
    element?.type === "line"
  );
}
