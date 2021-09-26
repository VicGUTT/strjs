/**
 * Escape every character that is part of the regular expression syntax.
 *
 * The special regular expression characters are: . \ + * ? [ ^ ] $ ( ) { } = ! < > | : - #
 * (https://www.php.net/manual/en/function.preg-quote)
 *
 * @see https://stackoverflow.com/a/9310752
 * @see https://github.com/tc39/proposal-regex-escaping
 */
export default function escapeRegExp(value: string): string {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
