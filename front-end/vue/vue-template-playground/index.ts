import * as compiler from "vue-template-compiler";
import * as fs from "fs";

//prevent.stop.self.once.capture.native.passive

const template = `
<form  v-on:submit.native="onSubmit" v-mode.lazy.trim="cook" :id=2 v-bind="bindAll"></form>
`;

fs.writeFileSync("output.js", compiler.compile(template).render);
