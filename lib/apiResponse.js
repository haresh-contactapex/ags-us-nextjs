import { NextResponse } from "next/server";

export function ok(data, status = 200) {
  return NextResponse.json(data, { status });
}

export function fail(status, message, errors) {
  return NextResponse.json(
    errors ? { message, data: { errors } } : { message },
    { status },
  );
}
