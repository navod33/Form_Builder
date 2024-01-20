export function renderProptiyFields(component) {
    if (!!component) {
      if (component.type === "Input") {
        return ["placeholder", "label", "type"];
      } else if (component.type === "Button") {
        return ["title", "style"];
      }
    }
    return [];
  }
  