import strUcwords from '../../src/strUcwords';

describe('str:strUcwords', () => {
    it('works', () => {
        expect(strUcwords('hello world!')).toEqual('Hello World!');
        expect(strUcwords('HELLO WORLD!')).toEqual('HELLO WORLD!');

        expect(strUcwords('hello|world!')).toEqual('Hello|world!');
        expect(strUcwords('hello|world!', '|')).toEqual('Hello|World!');

        expect(strUcwords('hello world!', '')).toEqual('Hello World!');
        expect(strUcwords('hello world!', ' ')).toEqual('Hello World!');
        expect(strUcwords('hello world!', [''])).toEqual('Hello World!');
        expect(strUcwords('hello world!', [' '])).toEqual('Hello World!');

        expect(strUcwords("mike o'hara")).toEqual("Mike O'hara");
        expect(strUcwords("mike o'hara", "'")).toEqual("Mike o'Hara");
        expect(strUcwords("mike o'hara", [' ', "'"])).toEqual("Mike O'Hara");

        expect(strUcwords('hello\tworld!')).toEqual('Hello\tWorld!');
        expect(strUcwords('hello\rworld!')).toEqual('Hello\rWorld!');
        expect(strUcwords('hello\nworld!')).toEqual('Hello\nWorld!');
        expect(strUcwords('hello\r\nworld!')).toEqual('Hello\r\nWorld!');
        expect(strUcwords('hello\fworld!')).toEqual('Hello\fWorld!');
        expect(strUcwords('hello\vworld!')).toEqual('Hello\vWorld!');

        expect(strUcwords('hello\tworld!', ' ')).toEqual('Hello\tworld!');
        expect(strUcwords('hello\rworld!', ' ')).toEqual('Hello\rworld!');
        expect(strUcwords('hello\nworld!', ' ')).toEqual('Hello\nworld!');
        expect(strUcwords('hello\r\nworld!', ' ')).toEqual('Hello\r\nworld!');
        expect(strUcwords('hello\fworld!', ' ')).toEqual('Hello\fworld!');
        expect(strUcwords('hello\vworld!', ' ')).toEqual('Hello\vworld!');
    });
});
