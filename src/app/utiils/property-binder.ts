export function bindBooleanProperty(bool: '' | boolean | undefined): boolean {
  if (bool === '') {
    return true;
  }
  return bool;
}
