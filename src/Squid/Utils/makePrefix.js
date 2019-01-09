export function makePrefix(prefix, suffix) {
  return prefix + '-' + suffix
}

export default function makeDefaultPrefix(suffix, customPrefix) {
  if (customPrefix) return customPrefix
  return makePrefix('squid', suffix)
}