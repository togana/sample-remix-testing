import { renderHook } from "@testing-library/react"
import { useState } from "react"
import { describe, expect, it } from "vitest"

describe("useState", () => {
  it("Get the initial value of the state", () => {
    const { result } = renderHook(() => useState(1))
    expect(result.current[0]).toEqual(1)
  })
})
