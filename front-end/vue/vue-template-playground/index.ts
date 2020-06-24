import * as compiler from "vue-template-compiler";
import * as fs from "fs";

//prevent.stop.self.once.capture.native.passive

const template = `<span v-model.trim="xxxx" @click="xxxx=>xxxxx=yyyy" kk=1 v-bind="xxx" ref="span">{{1+2+xxx}}</span>`;

fs.writeFileSync("output.js", compiler.compile(template).render);
