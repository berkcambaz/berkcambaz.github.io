function Input() {
  const keys = [];
  const keyPressed = [];
  const keyReleased = [];

  this.mouse = { x: 0, y: 0, pressed: false };

  let keyId = 0;
  this.KEY_UP = keyId++;
  this.KEY_DOWN = keyId++;
  this.KEY_LEFT = keyId++;
  this.KEY_RIGHT = keyId++;
  this.KEY_JUMP = keyId++;
  this.KEY_BREAK = keyId++;
  this.KEY_PLACE = keyId++;
  this.KEY_INVENTORY = keyId++;
  const keyToId = {
    "KeyW": this.KEY_UP,
    "KeyS": this.KEY_DOWN,
    "KeyA": this.KEY_LEFT,
    "KeyD": this.KEY_RIGHT,
    "Space": this.KEY_JUMP,
    "Digit1": this.KEY_BREAK,
    "Digit2": this.KEY_PLACE,
    "KeyE": this.KEY_INVENTORY
  };

  for (let i = 0; i < keyId; ++i) keys[i] = false;
  for (let i = 0; i < keyId; ++i) keyPressed[i] = false;
  for (let i = 0; i < keyId; ++i) keyReleased[i] = true;

  window.addEventListener("keydown", (ev) => {
    const keyId = keyToId[ev.code];

    keys[keyId] = true;
    if (keyReleased[keyId]) {
      keyPressed[keyId] = true
      keyReleased[keyId] = false;
    };
  });

  window.addEventListener("keyup", (ev) => {
    const keyId = keyToId[ev.code];

    keys[keyId] = false;
    keyReleased[keyId] = true;
  });

  window.addEventListener("mousedown", (ev) => {
    this.mouse.pressed = true;
    this.mouse.x = ev.x;
    this.mouse.y = ev.y;
  });

  window.addEventListener("mouseup", (ev) => {
    this.mouse.pressed = false;
    this.mouse.x = ev.x;
    this.mouse.y = ev.y;
  });

  window.addEventListener("mousemove", (ev) => {
    this.mouse.x = ev.x;
    this.mouse.y = ev.y;
  });

  this.getKey = (keyId) => {
    return keys[keyId];
  }

  this.getKeyDown = (keyId) => {
    return keyPressed[keyId];
  }

  this.update = () => {
    for (let i = 0; i < keyPressed.length; ++i) keyPressed[i] = false;
  }
}

export const input = new Input();