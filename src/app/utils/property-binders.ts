/**
 * プロパティバインディングでプロパティ名のみ指定だと値が空文字で渡ってくるため明示的にtrueに変換するヘルパーメソッド
 * @param bool: '' | undefined | boolean
 * @returns {boolean}
 */
export function bindBooleanProperty(bool: '' | undefined | boolean): boolean {
  return !!(bool || bool === '');
}
