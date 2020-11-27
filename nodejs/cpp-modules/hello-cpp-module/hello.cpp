#include <node.h>
#include <iostream>

using v8::Context;
using v8::Function;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;

void Cool(const FunctionCallbackInfo<Value> &func)
{
  std::cout << "222222";
}

void Method(const FunctionCallbackInfo<Value> &args)
{
  Isolate *isolate = args.GetIsolate();
  // args.GetReturnValue().SetNull();
  // args.GetReturnValue().Set(String::NewFromUtf8(isolate, "world"));
  args.GetReturnValue().Set(Function::New(isolate, Cool, args.This(), 2));
  // args.GetReturnValue().Set( Function::NewInstance(Context::New(isolate)));
}

void init(Local<Object> exports)
{
  NODE_SET_METHOD(exports, "hello", Method);
}

NODE_MODULE(addon, init)
