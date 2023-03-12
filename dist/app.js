var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { EasyHTTP } from "./easyHttp";
const http = new EasyHTTP();
const getJSON = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield http.get("https://jsonplaceholder.typicode.com/users");
        const innerHtmlContent = data
            .map((post) => `<h4>Title: ${post.title}</h4>
              <h5>Body: ${post.body}</h5>`)
            .join("");
        console.log({ data });
        document.getElementById("output").innerHTML = innerHtmlContent;
    }
    catch (error) {
        document.getElementById("output").innerHTML = `<h1>${error.message}</h1>`;
    }
});
document.getElementById("button").addEventListener("click", getJSON);
