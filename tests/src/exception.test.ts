import {
    NodeRPCException,
    NotFoundException,
    InvalidParameterException,
    UnauthorizedException,
    ForbiddenException,
    AlreadyExistsException,
    InsufficientStorageException,
    ServerUnknownException
 } from "../../src/exception"

describe("test HTTP Exceptions", () => {
    test("Validate BAD_REQUEST", () => {
        let exception = NodeRPCException.forHttpCode(NodeRPCException.BAD_REQUEST);
        expect(exception).toBeInstanceOf(InvalidParameterException);
    });
    test("Validate UNAUTHORIZED", () => {
        let exception = NodeRPCException.forHttpCode(NodeRPCException.UNAUTHORIZED);
        expect(exception).toBeInstanceOf(UnauthorizedException);
    });
    test("Validate FORBIDDEN", () => {
        let exception = NodeRPCException.forHttpCode(NodeRPCException.FORBIDDEN);
        expect(exception).toBeInstanceOf(ForbiddenException);
    });
    test("Validate NOTFOUND", () => {
        let exception = NodeRPCException.forHttpCode(NodeRPCException.NOT_FOUND);
        expect(exception).toBeInstanceOf(NotFoundException);
    });
    test("Validate ALREADY_EXISTS", () => {
        let exception = NodeRPCException.forHttpCode(NodeRPCException.ALREADY_EXISTS);
        expect(exception).toBeInstanceOf(AlreadyExistsException);
    });
    test("Validate INSUFFICIENT_STORAGE", () => {
        let exception = NodeRPCException.forHttpCode(NodeRPCException.INSUFFICIENT_STORAGE);
        expect(exception).toBeInstanceOf(InsufficientStorageException);
    });
    test("Validate SERVER_EXCEPTION", () => {
        let exception = NodeRPCException.forHttpCode(NodeRPCException.SERVER_EXCEPTION);
        expect(exception).toBeInstanceOf(ServerUnknownException);
    });
    test("Validate default error", () => {
        let exception = NodeRPCException.forHttpCode(123);
        expect(exception).toBeInstanceOf(ServerUnknownException);
    });
});