with (this) {
  return _c(
    "form",
    _b(
      {
        directives: [
          {
            name: "mode",
            rawName: "v-mode.lazy.trim",
            value: cook,
            expression: "cook",
            modifiers: { lazy: true, trim: true }
          }
        ],
        attrs: { id: 2 },
        nativeOn: {
          submit: function($event) {
            return onSubmit($event);
          }
        }
      },
      "form",
      bindAll,
      false
    )
  );
}
