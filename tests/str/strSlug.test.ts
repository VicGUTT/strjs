import strSlug from '../../src/strSlug';

describe('str:strSlug', () => {
    it('works', () => {
        expect(strSlug('hello world')).toEqual('hello-world');
        expect(strSlug('hello-world')).toEqual('hello-world');
        expect(strSlug('hello_world')).toEqual('hello-world');
        expect(strSlug('-_hello--world-')).toEqual('hello-world');
        expect(
            strSlug(`
                I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'
                ― Muhammad Ali
            `)
        ).toEqual(
            'i-hated-every-minute-of-training-but-i-said-dont-quit-suffer-now-and-live-the-rest-of-your-life-as-a-champion-muhammad-ali'
        );

        expect(strSlug('user@host')).toEqual('user-at-host');
        expect(strSlug('juliette&romeo')).toEqual('julietteromeo');

        expect(strSlug('start)+&+°middle£¨%µ§/.?²end')).toEqual('startmiddleend'); // Laravel => 'startmiddleps2end' because £ = ps & ² = 2
        expect(strSlug('hello_👍world👍')).toEqual('hello-world');
        expect(strSlug('hello_👍world👍')).toEqual('hello-world');

        expect(strSlug('hello_world', '-')).toEqual('hello-world');
        expect(strSlug('hello_world', '_')).toEqual('hello_world');
        expect(strSlug('hello_world', '*')).toEqual('hello*world');
        expect(strSlug('hello_world', '.')).toEqual('hello.world');
        expect(strSlug('hello_world', '\\w')).toEqual('hello\\wworld');
        expect(strSlug('hello_world', ')+&+°middle£¨%µ§/.?²')).toEqual('hello)+&+°middle£¨%µ§/.?²world');
        expect(strSlug('hello_world', '✌😊')).toEqual('hello✌😊world');

        expect(strSlug('some text', '')).toEqual('sometext');
        expect(strSlug('', '')).toEqual('');
        expect(strSlug('')).toEqual('');

        // expect(strSlug('سلام دنیا', '-')).toEqual('سلام-دنیا');
        // expect(strSlug('سلام دنیا', '-', null)).toEqual('سلام-دنیا');
    });

    it('does NOT work with ascii strings', () => {
        expect(strSlug('سلام دنیا')).toEqual(''); // Should've been "سلام-دنیا"
        expect(strSlug('àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;')).toEqual('aaaaeeeeiiiioooouuuuncyrsnpwgnmuxzh'); // Should've been "aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh"
    });
});
