import { describe, it, expect } from 'vitest';
import strTitle from '../../src/strTitle';

describe('str/strTitle', () => {
    it('works', () => {
        expect(strTitle('jefferson costella')).toEqual('Jefferson Costella');
        expect(strTitle('jefFErson coSTella')).toEqual('Jefferson Costella');

        expect(strTitle('hey hello beautiful world')).toEqual('Hey Hello Beautiful World');
        expect(strTitle('hey hello beautiful world')).toEqual('Hey Hello Beautiful World');
        expect(strTitle('hey hello beautiful world')).toEqual('Hey Hello Beautiful World');
        expect(strTitle('mary had a Little lamb and she loved it so')).toEqual(
            'Mary Had A Little Lamb And She Loved It So'
        );
        expect(strTitle('MARY HAD A LITTLE LAMB AND SHE LOVED IT SO')).toEqual(
            'Mary Had A Little Lamb And She Loved It So'
        );

        // TODO: The expectation here should be `.toEqual` and not `.not.toEqual`.
        expect(strTitle('Τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός')).not.toEqual(
            'Τάχιστη Αλώπηξ Βαφής Ψημένη Γη, Δρασκελίζει Υπέρ Νωθρού Κυνός'
        );

        // TODO: The expectation here should be `.not.toEqual` and not `.toEqual`.
        expect(strTitle('Τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός')).toEqual(
            'τάχιστη αλώπηξ βαφής ψημένη γη, δρασκελίζει υπέρ νωθρού κυνός'
        );
    });
});
