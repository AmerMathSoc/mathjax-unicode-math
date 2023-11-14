# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.1](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v2.0.0...v2.0.1) (2023-11-14)


### Bug Fixes

* adjust to mathjax v4-beta.4 ([e870acd](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/e870acdc43781edfd31cb89f6df1145dc3f1ced8)), closes [#28](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/28)

## [2.0.0](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.4.0...v2.0.0) (2023-09-04)


### ⚠ BREAKING CHANGES

* **README:** Drops support for MathJax v3, replaces CJS with ESM.

* **README:** update  to ESM and v2 ([685380b](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/685380b2afd661a0f9c4fe7a2ba79ca439f1d6ba)), closes [#26](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/26) [#27](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/27)

## [1.4.0](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.3.0...v1.4.0) (2023-09-04)


### Features

* add components/lib/unicode-math.js ([b2a6250](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/b2a6250e063c066ebc5a402afd624583a1636be5))


### Bug Fixes

* adjust browser build to MathJax v4 ([8636748](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/86367483e3ab3f160cebfde14825482b00725ab3)), closes [mathjax/MathJax#3086](https://github.com/mathjax/MathJax/issues/3086)
* **unicode-math.ts:** adjust import paths ([92cc19f](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/92cc19fc025bcf79f55c6d0ebd791d8e1f271a43))

## [1.3.0](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.2.3...v1.3.0) (2023-08-17)


### Features

* upgrade to MathJax v4 ([3d0d678](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/3d0d678ca89ec0b329930a3c3182334cc34e427f)), closes [#44](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/44)

### [1.2.3](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.2.2...v1.2.3) (2022-12-21)


### Bug Fixes

* disable \tilde overwrite ([104bc0a](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/104bc0aa78a804754cbc13d08fc7a226fb18edd4)), closes [#22](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/22)
* disable overbrace, overparen, underparen ([cdd9a69](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/cdd9a690178dabc57d4d086e9799c0521ff73d9e)), closes [#23](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/23)

### [1.2.2](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.2.1...v1.2.2) (2021-05-17)


### Bug Fixes

* disable backslash, widehat, widetilde ([42e2ca3](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/42e2ca37d7dab5a3bbac6d365e5458d1917502f1)), closes [#18](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/18) [#19](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/19) [#20](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/20)

### [1.2.1](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.2.0...v1.2.1) (2021-05-13)


### Bug Fixes

* scope package name ([f5b31cd](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/f5b31cd6fbfc104ad6d5bd0ad4170becb30ca2e4)), closes [#16](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/16)

## [1.2.0](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.1.3...v1.2.0) (2021-05-13)


### Features

* client-side build ([fb2cd79](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/fb2cd7994dc7a123cbf981f13d7d557ed268d2a9)), closes [#15](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/15)


### Bug Fixes

* **package.json:** run tsc as pretest script ([1d50148](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/1d50148265ab00ccabcd788354152f1eb355813a))
* add emptyset ([5a65e8f](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/5a65e8f85e1eb25597680ffa2309c20a49e5fbcb)), closes [#11](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/11)
* disable \nabla ([f9e5b75](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/f9e5b752186f29c3c28d352f0906c6e5aee17705))
* disable \prime ([1d92989](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/1d929891c21fa0da3fe2e8691c6b8ce04c4f8ebc)), closes [#11](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/11)
* fix under/over arrow(like) constructions ([e905808](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/e90580866675d47ed7ffb34a62d204e0f44fe318)), closes [#11](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/11)
* remove movesubsup from integrals ([072c879](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/072c879d143c1e94c81886efa932d1960f30fcf3)), closes [#11](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/11)
* **unicode-math.ts:** disable sqrt redefinition ([aa1cf27](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/aa1cf27a0a9c1301962dcd7f436ad62e435222de)), closes [#11](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/11)

### [1.1.3](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.1.2...v1.1.3) (2021-03-16)


### Bug Fixes

* make charactermaps name unique ([3d78065](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/3d78065997448ea2ce6c2bc963666c63352aa5b9)), closes [#10](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/10)

### [1.1.2](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.1.1...v1.1.2) (2021-03-01)


### Bug Fixes

* **package:** rename postinstall script ([2a4af8c](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/2a4af8c956cf50634562e841c32acfbe08103259)), closes [#9](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/9)

### [1.1.1](https://github.com/AmerMathSoc/mathjax-unicode-math/compare/v1.1.0...v1.1.1) (2021-03-01)


### Bug Fixes

* Revised definitions of unicode-math characters. ([3e0b4e7](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/3e0b4e7b91a40ea9bebf182fd33e71ea602cd162))

## 1.1.0 (2021-01-27)


### Features

* add Apache2 license ([fc846e2](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/fc846e2472831acbe0a82bffbed5ad55a89c12e7))
* add base test ([8ac165c](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/8ac165c2fb32b464fb4eafc99c4ce8bd39661431)), closes [#4](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/4)
* rename Configuration => unicode-math ([8311297](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/831129748a45b4f82012cf03efbec4514bce9e22)), closes [#3](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/3)
* setup package ([596b27d](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/596b27d2ab3fb58d7600a22f2886cda590ada48d))


### Bug Fixes

* **template:** import Not from BaseMethods ([893b6f7](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/893b6f771faf836162e91d210fe0fa00e847edee)), closes [#6](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/6)
* add missing baseMethods ([ab36147](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/ab36147cc76f69b8f8dedb618e06bcab89a3dac0)), closes [#5](https://github.com/AmerMathSoc/mathjax-unicode-math/issues/5)
* rename exported config name ([3039dc5](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/3039dc5e65b073f7f46fb2dba10424f1e997868d))
* **make_maps:** adjust path to template ([d92cacb](https://github.com/AmerMathSoc/mathjax-unicode-math/commit/d92cacb048e802ee7d785326156511de38a0acaf))
