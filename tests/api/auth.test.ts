import { describe, expect, test } from "vitest";
import { getAPIKey } from "../../src/api/auth.ts";
import { IncomingHttpHeaders } from "http";

describe("Get api key", () => {
    test("valid api key", () => {
        const headers: IncomingHttpHeaders = {
            authorization: "ApiKey api_key_123",
        };

        expect(getAPIKey(headers)).toBe("api_key_123");
    });

    test("invalid authorization header", () => {
        const headers: IncomingHttpHeaders = {
            authorization: "Bearer bearer_token_123",
        };

        expect(getAPIKey(headers)).toBe(null);
    });

    test("invalid authorization header 2", () => {
        const headers: IncomingHttpHeaders = {
            authorization: "authorization",
        };

        expect(getAPIKey(headers)).toBe(null);
    });

    test("authorization header not present", () => {
        const headers: IncomingHttpHeaders = {
            a: "1",
            b: "2",
            c: "3",
        };

        expect(getAPIKey(headers)).toBe(null);
    });
});
