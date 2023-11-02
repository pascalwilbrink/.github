const createCopyButton = (container: HTMLElement) => {
  const button: HTMLButtonElement = document.createElement("button");
  button.classList.add("button", "button--copy-code");
  button.type = "button";
  button.innerText = "Copy";

  button.addEventListener("click", () => {
    copyCodeToClipboard(button, container);
  });
  addCopyButtonToDom(button, container);
};

const copyCodeToClipboard = async (
  button: HTMLButtonElement,
  container: HTMLElement
) => {
  const codeToCopy: HTMLElement = container.querySelector(
    "pre > code[data-lang]"
  )!;

  try {
    await navigator.clipboard.writeText(codeToCopy.innerText);
  } catch (_) {
  } finally {
    codeWasCopied(button);
  }
};

const codeWasCopied = (button: HTMLButtonElement) => {
  button.blur();
  button.innerText = "Copied!";
  setTimeout(() => {
    button.innerText = "Copy";
  }, 2000);
};

const addCopyButtonToDom = (
  button: HTMLButtonElement,
  container: HTMLElement
) => {
  container.insertBefore(button, container.firstChild);
  const wrapper: HTMLDivElement = document.createElement("div");
  wrapper.classList.add("highlight-wrapper");
  container.parentNode?.insertBefore(wrapper, container);
  wrapper.appendChild(container);
};

document
  .querySelectorAll<HTMLElement>("div.highlight")
  .forEach((highlightDiv) => createCopyButton(highlightDiv));
