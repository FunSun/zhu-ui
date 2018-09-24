const zhihuStyle = `
button {
    padding: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

body,button,p,pre {
    margin: 0
}

h1,h2,h3 {
    margin: 0;
    font: inherit
}

ol,ul {
    padding: 0;
    margin: 0
}

li {
    list-style-type: none
}

a {
    color: inherit;
    text-decoration: none
}

.Button {
    display: inline-block;
    padding: 0 16px;
    font-size: 14px;
    line-height: 32px;
    color: #8590a6;
    text-align: center;
    cursor: pointer;
    background: none;
    border: 1px solid;
    border-radius: 3px
}

.Button::-moz-focus-inner {
    padding: 0;
    border: 0
}

.Button:focus {
    outline: none
}

.Button:disabled {
    cursor: default;
    opacity: .5
}

html[data-theme=dark] .Button {
    color: #606a80
}

.Button--grey {
    color: #8590a6;
    border-color: #8590a6
}

.Button--grey:hover:not(:disabled) {
    background-color: rgba(133,144,166,.06)
}

html[data-theme=dark] .Button--grey:hover:not(:disabled) {
    background-color: rgba(96,106,128,.06)
}

html[data-theme=dark] .Button--grey {
    color: #606a80;
    border-color: #606a80
}

.Button--blue {
    color: #0084ff;
    border-color: #0084ff
}

.Button--blue:hover:not(:disabled) {
    background-color: rgba(0,132,255,.06)
}

html[data-theme=dark] .Button--blue:hover:not(:disabled) {
    background-color: rgba(58,118,208,.06)
}

html[data-theme=dark] .Button--blue {
    color: #3a76d0;
    border-color: #3a76d0
}

.Button--green {
    color: #11a668;
    border-color: #11a668
}

.Button--green:hover:not(:disabled) {
    background-color: rgba(17,166,104,.06)
}

.Button--red {
    color: #f36;
    border-color: #f36
}

.Button--red:hover:not(:disabled) {
    background-color: rgba(255,51,102,.06)
}

html[data-theme=dark] .Button--red:hover:not(:disabled) {
    background-color: rgba(217,33,85,.06)
}

html[data-theme=dark] .Button--red {
    color: #d92155;
    border-color: #d92155
}

.Button--primary.Button--blue {
    color: #fff;
    background-color: #0084ff
}

.Button--primary.Button--blue:hover:not(:disabled) {
    border-color: #0077e6;
    background-color: #0077e6
}

html[data-theme=dark] .Button--primary.Button--blue:hover:not(:disabled) {
    border-color: #2f69c1;
    background-color: #2f69c1
}

html[data-theme=dark] .Button--primary.Button--blue {
    color: #ebebeb;
    background-color: #3a76d0
}

.Button--primary.Button--green {
    color: #fff;
    background-color: #12b370
}

.Button--primary.Button--green:hover:not(:disabled) {
    border-color: #109e63;
    background-color: #109e63!important
}

html[data-theme=dark] .Button--primary.Button--green {
    color: #ebebeb
}

.Button--primary.Button--red {
    color: #fff;
    background-color: #f36
}

.Button--primary.Button--red:hover:not(:disabled) {
    border-color: #ff1a53;
    background-color: #ff1a53
}

html[data-theme=dark] .Button--primary.Button--red:hover:not(:disabled) {
    border-color: #c31d4c;
    background-color: #c31d4c
}

html[data-theme=dark] .Button--primary.Button--red {
    color: #ebebeb;
    background-color: #d92155
}

.Button--primary.Button--grey {
    color: #fff;
    background-color: #8590a6
}

.Button--primary.Button--grey:hover:not(:disabled) {
    border-color: #77839c;
    background-color: #77839c
}

html[data-theme=dark] .Button--primary.Button--grey:hover:not(:disabled) {
    border-color: #565e71;
    background-color: #565e71
}

html[data-theme=dark] .Button--primary.Button--grey {
    color: #ebebeb;
    background-color: #606a80
}

.Button--spread {
    width: 100%
}

.Button-icon {
    margin-right: 7px
}

.Button--plain .Button-icon {
    margin-right: 6px
}

.Button--blue .Button-icon,.Button--green .Button-icon,.Button--red .Button-icon {
    fill: currentColor
}

.Button--link,.Button--plain {
    height: auto;
    padding: 0;
    line-height: inherit;
    background-color: transparent;
    border: none;
    border-radius: 0
}

html[data-theme=dark] .Button--link,html[data-theme=dark] .Button--plain {
    border: none
}

.Button--plain:hover,html[data-theme=dark] .Button--link:hover,html[data-theme=dark] .Button--plain:hover {
    background-color: transparent;
    background-color: initial
}

.Button--plain:hover {
    color: #77839c
}

html[data-theme=dark] .Button--plain:hover {
    color: #565e71
}

.Button--link {
    color: #175199
}

.Button--link:hover {
    background-color: transparent;
    background-color: initial;
    color: #144785
}

html[data-theme=dark] .Button--link:hover {
    color: #144785
}

html[data-theme=dark] .Button--link {
    color: #175199
}

.Button--withIcon.Button--iconOnly {
    padding: 0 4px
}

.Button--withIcon.Button--link,.Button--withIcon.Button--plain {
    padding: 0
}

.Button--withIcon.Button--withLabel .Button-zi {
    margin-right: 4px
}

.ModalButtonGroup--vertical {
    margin-top: 40px;
    margin-bottom: 16px
}

.ModalButtonGroup--vertical .Button {
    display: block;
    width: 220px;
    margin-right: auto;
    margin-left: auto
}

.ModalButtonGroup--vertical .Button+.Button {
    margin-top: 28px
}

.Modal-content--buttonGroupOnly .ModalButtonGroup--vertical {
    margin-top: 60px
}

.ModalButtonGroup--horizontal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-top: 48px
}

.ModalButtonGroup--horizontal .Button {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.ModalButtonGroup--horizontal .Button:last-child:first-child {
    width: 220px;
    margin-right: auto;
    margin-left: auto;
    -webkit-box-flex: initial;
    -ms-flex: initial;
    flex: initial
}

.ModalButtonGroup--horizontal .Button+.Button {
    margin-left: 16px
}

.Modal-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 203;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    transition: opacity .3s ease-out
}

.Modal-wrapper.Modal-enter {
    opacity: .01
}

.Modal-wrapper.Modal-enter-active,.Modal-wrapper.Modal-leave {
    opacity: 1
}

.Modal-wrapper.Modal-leave-active {
    opacity: .01
}

.Modal-backdrop {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background-color: rgba(26,26,26,.65);
    transition: background-color .3s ease-out
}

.Modal-wrapper--transparent .Modal-backdrop {
    background-color: transparent
}

html[data-theme=dark] .Modal-backdrop {
    background-color: rgba(0,0,0,.65)
}

.Modal {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 400px;
    max-height: calc(100vh - 24px * 2);
    margin-right: auto;
    margin-left: auto;
    outline: 0;
    box-shadow: 0 5px 20px rgba(26,26,26,.1);
    box-sizing: border-box;
    transition: max-height .8s ease
}

html[data-theme=dark] .Modal {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.Modal--large {
    width: 536px
}

.Modal--fullPage {
    width: 688px;
    height: calc(100vh - 24px * 2)
}

.Modal-enter .Modal {
    -webkit-transform: translateY(20px);
    transform: translateY(20px)
}

.Modal-enter-active .Modal {
    transition: opacity .3s ease-out,-webkit-transform .3s ease-out;
    transition: transform .3s ease-out,opacity .3s ease-out;
    transition: transform .3s ease-out,opacity .3s ease-out,-webkit-transform .3s ease-out
}

.Modal-enter-active .Modal,.Modal-leave .Modal {
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.Modal-leave-active .Modal {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
    transition: opacity .3s ease-out,-webkit-transform .3s ease-out;
    transition: transform .3s ease-out,opacity .3s ease-out;
    transition: transform .3s ease-out,opacity .3s ease-out,-webkit-transform .3s ease-out
}

.Modal-inner {
    overflow: auto;
    background: #fff;
    border-radius: 2px
}

.Modal--fullPage .Modal-inner {
    height: 100%
}

html[data-theme=dark] .Modal-inner {
    background: #1a1a1a
}

.Modal-closeButton {
    position: absolute;
    top: 8px;
    right: -60px;
    padding: 12px
}

.Modal-closeIcon {
    vertical-align: top;
    fill: #fff
}

html[data-theme=dark] .Modal-closeIcon {
    fill: #ebebeb
}

.Modal-title {
    margin-top: 40px;
    font-size: 24px;
    font-weight: 500;
    color: #1a1a1a;
    text-align: center
}

.Modal-title.Modal-title--simple {
    font-family: inherit;
    font-size: 20px
}

html[data-theme=dark] .Modal-title {
    color: #999
}

.Modal-subtitle {
    padding: 0 38px;
    margin-top: 4px;
    font-size: 14px;
    line-height: 1.5;
    color: #8590a6;
    text-align: center
}

.Modal-subtitle a {
    text-decoration: underline
}

html[data-theme=dark] .Modal-subtitle {
    color: #606a80
}

.Modal-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 24px 32px;
    margin-top: 24px;
    line-height: 1.7;
    opacity: 1
}

.Modal--fullPage .Modal-content {
    padding: 0
}

.Modal-content.Modal-content--spread {
    height: 100%;
    margin-top: 0
}

.Modal-content.Modal-content--hidden {
    opacity: 0;
    transition: opacity .3s ease-out
}

.Modal-footer {
    padding: 16px 24px;
    font-size: 13px;
    line-height: 1.7;
    color: #8590a6;
    background: #f6f6f6;
    border-top: 1px solid #ebebeb
}

.Modal-footer a {
    text-decoration: underline
}

html[data-theme=dark] .Modal-footer {
    color: #606a80;
    background: #2e2e2e;
    border-top: 1px solid #444
}

.Card {
    margin-bottom: 10px;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box
}

html[data-theme=dark] .Card {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.Card:last-child {
    margin-bottom: 0
}

html[data-theme=dark] .Card {
    background: #1a1a1a
}

.Card-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box
}

.Card-header:last-child {
    border-bottom: none
}

html[data-theme=dark] .Card-header {
    border-bottom: 1px solid #2e2e2e
}

.Card-headerText {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Card-headerText {
    font-weight: 500
}

html[data-android] .Card-headerText {
    font-weight: 700
}

.Card-section {
    padding: 16px 20px;
    position: relative
}

.Card-section+.Card-section:after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 20px;
    display: block;
    border-bottom: 1px solid #f6f6f6;
    content: ""
}

html[data-theme=dark] .Card-section+.Card-section:after {
    border-bottom: 1px solid #2e2e2e
}

.Input-wrapper {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 180px;
    height: 34px;
    padding: 4px 10px;
    font-size: 14px;
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-sizing: border-box;
    transition: background .2s,border .2s
}

.Input-wrapper.Input-wrapper--grey {
    background: #f6f6f6
}

html[data-theme=dark] .Input-wrapper.Input-wrapper--grey {
    background: #2e2e2e
}

.Input-wrapper.Input-wrapper--spread {
    width: 100%
}

.Input-wrapper.Input-wrapper--multiline {
    height: inherit
}

.Input-wrapper .DraftEditor-root,.Input-wrapper.Input-wrapper--large {
    height: auto;
    padding: 6px 12px
}

.Input-wrapper .Editable-toolbar {
    height: auto;
    padding: 5px 13px
}

.Input-wrapper .Dropzone-overlay {
    margin: 6px 12px
}

.Input-wrapper.Input-wrapper--noPadding {
    padding: 0
}

.Input-wrapper.is-focus {
    background: #fff;
    border: 1px solid #8590a6
}

html[data-theme=dark] .Input-wrapper.is-focus {
    background: #1a1a1a;
    border: 1px solid #606a80
}

html[data-theme=dark] .Input-wrapper {
    background: #1a1a1a;
    border: 1px solid #444
}

.Input {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0;
    overflow: hidden;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    background: transparent;
    border: none;
    outline: none;
    resize: none
}

input.Input {
    color: #1a1a1a;
    height: 24px;
    line-height: 24px
}

html[data-theme=dark] input.Input {
    color: #999
}

textarea.Input {
    color: #1a1a1a
}

html[data-theme=dark] textarea.Input {
    color: #999
}

.Input:not(input) {
    line-height: 24px
}

.Input:-ms-input-placeholder {
    line-height: normal
}

.Input .public-DraftEditorPlaceholder-root,.Input::-webkit-input-placeholder {
    color: #8590a6
}

.Input .public-DraftEditorPlaceholder-root,.Input:-ms-input-placeholder {
    color: #8590a6
}

.Input .public-DraftEditorPlaceholder-root,.Input::placeholder {
    color: #8590a6
}

html[data-theme=dark] .Input .public-DraftEditorPlaceholder-root,html[data-theme=dark] .Input::-webkit-input-placeholder {
    color: #606a80
}

html[data-theme=dark] .Input .public-DraftEditorPlaceholder-root,html[data-theme=dark] .Input:-ms-input-placeholder {
    color: #606a80
}

html[data-theme=dark] .Input .public-DraftEditorPlaceholder-root,html[data-theme=dark] .Input::placeholder {
    color: #606a80
}

.Input--validationError::-webkit-input-placeholder {
    color: #f1403c
}

.Input--validationError:-ms-input-placeholder {
    color: #f1403c
}

.Input--validationError::placeholder {
    color: #f1403c
}

html[data-theme=dark] .Input--validationError::-webkit-input-placeholder {
    color: #b7302d
}

html[data-theme=dark] .Input--validationError:-ms-input-placeholder {
    color: #b7302d
}

html[data-theme=dark] .Input--validationError::placeholder {
    color: #b7302d
}

.Input-wrapper--multiline .Input {
    overflow: auto
}

.Input-after {
    position: absolute;
    top: 50%;
    right: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: auto;
    -webkit-transform: translate3d(0,-50%,0);
    transform: translate3d(0,-50%,0)
}

.SignFlowInput {
    position: relative
}

.SignFlowInput .Input-wrapper {
    width: 100%;
    height: 48px;
    padding: 0;
    color: #8590a6
}

html[data-theme=dark] .SignFlowInput .Input-wrapper {
    color: #606a80
}

.SignFlowInput input.Input {
    height: 48px
}

.SignFlowInput-errorMask {
    position: absolute;
    right: 0;
    height: 90%;
    padding: 12px 0 0 20px;
    margin-top: -47px;
    font-size: 14px;
    color: #f1403c;
    text-align: right;
    cursor: text;
    background: #fff;
    opacity: 1;
    box-sizing: border-box;
    transition: opacity .25s ease
}

.SignFlowInput-errorMask:before {
    position: absolute;
    top: 0;
    left: -16px;
    width: 16px;
    height: 46px;
    background: linear-gradient(90deg,hsla(0,0%,100%,0),#fff);
    content: ""
}

html[data-theme=dark] .SignFlowInput-errorMask:before {
    background: linear-gradient(90deg,rgba(26,26,26,0),#1a1a1a)
}

html[data-theme=dark] .SignFlowInput-errorMask {
    color: #b7302d;
    background: #1a1a1a
}

.SignFlowInput-errorMask--hidden {
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    opacity: 0
}

.SignFlowInput-errorMask--hidden:before {
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0
}

.SignFlowInput-requiredErrorMask {
    right: auto!important;
    width: 100%;
    padding-left: 0;
    text-align: left
}

.SignFlowInput-requiredErrorMask:before {
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0
}

.Icon {
    vertical-align: text-bottom;
    fill: currentColor
}

.Icon--grey {
    color: #8590a6
}

html[data-theme=dark] .Icon--grey {
    color: #606a80
}

.Icon--left {
    margin-right: 6px
}

.Captcha {
    position: relative;
    opacity: 1;
    transition: opacity .3s ease
}

.Captcha-chineseContainer {
    position: relative;
    width: 100%;
    padding: 0 60px;
    margin-top: 12px;
    box-sizing: border-box
}

.Captcha-englishContainer {
    position: absolute;
    top: 24px;
    right: 0;
    display: inline-block;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.Captcha-chineseImg {
    display: block;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.Captcha-englishImg {
    display: block;
    height: 30px;
    cursor: pointer
}

.Captcha-chineseOperator {
    width: 100%;
    padding-top: 4px;
    margin-top: 0
}

.Captcha-info {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .Captcha-info {
    color: #606a80
}

.Captcha-error {
    color: #f1403c
}

html[data-theme=dark] .Captcha-error {
    color: #b7302d
}

.Captcha-chineseRefreshButton {
    float: right;
    width: 20px;
    height: 20px
}

.Captcha-errorMessage {
    right: 76px
}

.Captcha-requiredErrorMessage {
    right: 0
}

.ChineseCaptchaPoint {
    position: absolute
}

.ChineseCaptchaPoint-backIcon {
    fill-opacity: .75
}

.ChineseCaptchaPoint-backIcon--hovered {
    fill-opacity: .8
}

.ChineseCaptchaPoint-frontIcon {
    position: absolute;
    top: 4px;
    left: 4px
}

.ChineseCaptchaPoint-frontIcon--hovered {
    top: 6px;
    left: 6px
}

.Popover {
    position: relative;
    display: inline-block
}

.Popover-arrow {
    position: absolute
}

.Popover-arrow,.Popover-arrow:after {
    border: 8px solid transparent;
    display: block;
    width: 0;
    height: 0
}

.Popover-arrow:after {
    position: absolute;
    left: 0;
    top: 0;
    content: ""
}

.Popover-arrow--top {
    border-top-color: #ebebeb;
    margin-top: 7px
}

.Popover-arrow--top,.Popover-arrow--top:after {
    border-bottom-width: 0;
    -webkit-transform: translate3d(-50%,-100%,0);
    transform: translate3d(-50%,-100%,0)
}

.Popover-arrow--top:after {
    margin-top: -1px;
    border-top-color: #fff
}

html[data-theme=dark] .Popover-arrow--top:after {
    border-top-color: #1a1a1a
}

html[data-theme=dark] .Popover-arrow--top {
    border-top-color: #2e2e2e
}

.Popover-arrow--bottom {
    border-bottom-color: #ebebeb;
    margin-top: -8px
}

.Popover-arrow--bottom,.Popover-arrow--bottom:after {
    border-top-width: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.Popover-arrow--bottom:after {
    margin-top: 1px;
    border-bottom-color: #fff
}

html[data-theme=dark] .Popover-arrow--bottom:after {
    border-bottom-color: #1a1a1a
}

html[data-theme=dark] .Popover-arrow--bottom {
    border-bottom-color: #2e2e2e
}

.Popover-arrow--left {
    border-left-color: #ebebeb;
    margin-left: 7px
}

.Popover-arrow--left,.Popover-arrow--left:after {
    border-right-width: 0;
    -webkit-transform: translate3d(-100%,-50%,0);
    transform: translate3d(-100%,-50%,0)
}

.Popover-arrow--left:after {
    margin-left: -1px;
    border-left-color: #fff
}

html[data-theme=dark] .Popover-arrow--left:after {
    border-left-color: #1a1a1a
}

html[data-theme=dark] .Popover-arrow--left {
    border-left-color: #2e2e2e
}

.Popover-arrow--right {
    border-right-color: #ebebeb;
    margin-left: -8px
}

.Popover-arrow--right,.Popover-arrow--right:after {
    border-left-width: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.Popover-arrow--right:after {
    margin-left: 1px;
    border-right-color: #fff
}

html[data-theme=dark] .Popover-arrow--right:after {
    border-right-color: #1a1a1a
}

html[data-theme=dark] .Popover-arrow--right {
    border-right-color: #2e2e2e
}

.Popover-content {
    position: absolute;
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(26,26,26,.1);
    z-index: 203
}

html[data-theme=dark] .Popover-content {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.Popover-content-enter {
    opacity: .01
}

.Popover-content-enter-active {
    transition: opacity .2s ease-out,-webkit-transform .2s ease-out;
    transition: transform .2s ease-out,opacity .2s ease-out;
    transition: transform .2s ease-out,opacity .2s ease-out,-webkit-transform .2s ease-out
}

.Popover-content-enter-active,.Popover-content-leave {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.Popover-content-leave-active {
    opacity: .01;
    transition: opacity .2s ease-out,-webkit-transform .2s ease-out;
    transition: transform .2s ease-out,opacity .2s ease-out;
    transition: transform .2s ease-out,opacity .2s ease-out,-webkit-transform .2s ease-out
}

.Popover-content--fixed {
    position: fixed
}

html[data-theme=dark] .Popover-content {
    background: #1a1a1a;
    border: 1px solid #2e2e2e
}

.Popover-content--top {
    -webkit-transform-origin: bottom center;
    transform-origin: bottom center;
    margin-top: -8px
}

.Popover-content--top.Popover-content--arrowed {
    margin-top: -16px
}

.Popover-content--top.Popover-content--enter,.Popover-content--top.Popover-content-leave-active {
    -webkit-transform: translateY(8px);
    transform: translateY(8px)
}

.Popover-content--bottom {
    margin-top: 8px
}

.Popover-content--bottom.Popover-content--arrowed {
    margin-top: 16px
}

.Popover-content--bottom.Popover-content--enter,.Popover-content--bottom.Popover-content-leave-active {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px)
}

.Popover-content--left {
    -webkit-transform-origin: right center;
    transform-origin: right center;
    margin-left: -8px
}

.Popover-content--left.Popover-content--arrowed {
    margin-left: -16px
}

.Popover-content--left.Popover-content--enter,.Popover-content--left.Popover-content-leave-active {
    -webkit-transform: translateX(8px);
    transform: translateX(8px)
}

.Popover-content--right {
    margin-left: 8px
}

.Popover-content--right.Popover-content--arrowed {
    margin-left: 16px
}

.Popover-content--right.Popover-content--enter,.Popover-content--right.Popover-content-leave-active {
    -webkit-transform: translateX(-8px);
    transform: translateX(-8px)
}

.AttentionPopover {
    font-size: 15px;
    background-color: #0084ff;
    color: #fff;
    padding: 9px 14px;
    border-radius: 8px;
    border: none
}

.AttentionPopover .Popover-arrow {
    border: none
}

.AttentionPopover .Popover-arrow--top:after {
    border-top-color: #0084ff
}

html[data-theme=dark] .AttentionPopover .Popover-arrow--top:after {
    border-top-color: #3a76d0
}

.AttentionPopover .Popover-arrow--bottom:after {
    border-bottom-color: #0084ff
}

html[data-theme=dark] .AttentionPopover .Popover-arrow--bottom:after {
    border-bottom-color: #3a76d0
}

.AttentionPopover .Popover-arrow--left:after {
    border-left-color: #0084ff
}

html[data-theme=dark] .AttentionPopover .Popover-arrow--left:after {
    border-left-color: #3a76d0
}

.AttentionPopover .Popover-arrow--right:after {
    border-right-color: #0084ff
}

html[data-theme=dark] .AttentionPopover .Popover-arrow--right:after {
    border-right-color: #3a76d0
}

html[data-theme=dark] .AttentionPopover {
    background-color: #3a76d0
}

.Select-button {
    height: 40px;
    padding: 0 20px;
    line-height: 38px;
    text-align: left;
    box-sizing: border-box;
    background: none;
    outline: none
}

.Select-plainButton {
    padding: 0;
    border: 1px solid transparent
}

.Select-arrow {
    margin-left: 8px
}

.Select-list {
    position: relative;
    overflow: auto;
    max-height: 500px;
    padding: 8px 0;
    border-radius: 4px
}

.Select-option {
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    line-height: 40px;
    color: #8590a6;
    text-align: left;
    background: none;
    border: none;
    outline: none
}

html[data-theme=dark] .Select-option {
    color: #606a80
}

.Select-option:focus {
    background: #f6f6f6
}

html[data-theme=dark] .Select-option:focus {
    background: #2e2e2e
}

.Select-popoverTarget {
    margin-top: 0;
    transition: opacity .2s ease-out
}

.MobileContriesSelect {
    height: 40px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.MobileContriesSelect-content {
    width: 50px;
    display: inline-block;
    position: relative
}

.MobileContriesSelect-content div,.MobileContriesSelect-content select {
    position: absolute;
    right: 0;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 100%
}

.MobileContriesSelect-content select {
    opacity: 0
}

.SignFlow-accountInputContainer {
    overflow: hidden
}

.SignFlow-account {
    margin-top: 16px;
    border-bottom: 1px solid #ebebeb;
    border-radius: 0
}

html[data-theme=dark] .SignFlow-account {
    border-bottom: 1px solid #444
}

.SignFlow-supportedCountriesSelectContainer {
    display: inline-block;
    float: left;
    min-width: 72px;
    -webkit-transform: translateY(4px);
    transform: translateY(4px)
}

.SignFlow-supportedCountriesSelectContainer .Select-button {
    color: #8590a6
}

html[data-theme=dark] .SignFlow-supportedCountriesSelectContainer .Select-button {
    color: #606a80
}

.SignFlow-supportedCountriesList .Select-option {
    color: #8590a6
}

html[data-theme=dark] .SignFlow-supportedCountriesList .Select-option {
    color: #606a80
}

.SignFlow-accountSeperator {
    float: left;
    width: 1px;
    height: 22px;
    margin: 24px 12px 0;
    background: #ebebeb;
    -webkit-transform: translateY(-11px);
    transform: translateY(-11px)
}

html[data-theme=dark] .SignFlow-accountSeperator {
    background: #444
}

.CountingDownButton,html[data-theme=dark] .CountingDownButton {
    color: #175199
}

.CountingDownButton.is-counting {
    color: #8590a6;
    cursor: auto
}

html[data-theme=dark] .CountingDownButton.is-counting {
    color: #606a80
}

.SignFlow-smsInputContainer {
    position: relative;
    margin-top: 12px
}

.SignFlow-smsInputButton {
    position: absolute;
    top: 24px;
    right: 0;
    padding: 4px 0;
    color: #175199;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

html[data-theme=dark] .SignFlow-smsInputButton {
    color: #175199
}

.SignFlow-smsInputErrorMessage {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    top: 24px;
    right: 130px;
    width: 40%;
    padding: 0;
    padding-left: 4px;
    margin: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.SignFlow-smsInputRequiredErrorMask {
    right: 0;
    padding-left: 0
}

.SignFlow-passwordErrorMask {
    z-index: 10
}

.SignFlow-passwordInput {
    font-size: 24px
}

.SignFlow-passwordInput input {
    letter-spacing: 1.8px
}

.SignFlow-requiredPasswordErrorMask {
    right: auto;
    width: 80%
}

.SignFlow-password {
    position: relative;
    margin-top: 12px
}

.SignFlow-password input::-webkit-input-safebox-button {
    display: none
}

.SignFlow-switchPassword {
    position: absolute;
    top: 24px;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.SignFlow-switchPasswordIcon:hover {
    fill: #999
}

html[data-theme=dark] .SignFlow-switchPasswordIcon:hover {
    fill: #646464
}

.SignFlow-username {
    position: relative;
    margin-top: 12px
}

.Register-content {
    padding: 0 40px 36px;
    font-size: 14px
}

.Register-content .SignFlow-smsInputErrorMessage {
    width: auto;
    min-width: 40%
}

.Register-getIn,.Register-submitButton {
    width: 100%;
    margin-top: 30px;
    height: 36px
}

.Register-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 16px;
    line-height: 25px
}

.Register-org,html[data-theme=dark] .Register-org {
    color: #175199
}

.Register-declaration,.Register-declaration a {
    color: #8590a6
}

html[data-theme=dark] .Register-declaration a {
    color: #606a80
}

.Register-declaration a:hover,html[data-theme=dark] .Register-declaration a:hover {
    color: gray
}

html[data-theme=dark] .Register-declaration {
    color: #606a80
}

.Register-padName {
    padding: 40px 30px
}

.Register-padNameHeader {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    padding-bottom: 18px;
    font-size: 24px;
    line-height: 32px;
    color: #444;
    font-weight: 500
}

.Register-padNameHeader .Button {
    position: absolute;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Register-padNameHeader .Button:hover {
    background-color: #fff
}

html[data-theme=dark] .Register-padNameHeader .Button:hover {
    background-color: #1a1a1a
}

html[data-theme=dark] .Register-padNameHeader {
    color: gray
}

.Register-padNameTitle {
    margin: 0 auto
}

.Register-smsBackUp {
    padding-top: 12px;
    height: 20px;
    color: #8590a6;
    text-align: right;
    transition: height .5s,padding .5s
}

.Register-smsBackUp span {
    display: inline-block;
    cursor: pointer
}

html[data-theme=dark] .Register-smsBackUp {
    color: #606a80
}

.Register-hiddenSmsBackUp {
    height: 0;
    padding: 0;
    margin: 0;
    overflow: hidden
}

.Register-socialHeader {
    text-align: center;
    padding: 36px 0 8px
}

.Register-socialTitle {
    position: relative;
    font-size: 24px;
    line-height: 32px;
    color: #444;
    margin-bottom: 2px
}

.Register-socialTitle .Button {
    position: absolute;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    left: 0;
    padding: 0
}

.Register-socialTitle .Button:hover {
    background: #fff
}

html[data-theme=dark] .Register-socialTitle .Button:hover {
    background: #1a1a1a
}

html[data-theme=dark] .Register-socialTitle {
    color: gray
}

.Register-socialSubTitle {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .Register-socialSubTitle {
    color: #606a80
}

.Register-socialName {
    overflow: hidden;
    height: 48px;
    transition: height .5s,visibility .5s
}

.Register-hiddenSocialName {
    height: 0;
    visibility: hidden
}

.ZhihuLogo {
    fill: #0084ff
}

.ZhihuLogo--red {
    fill: #f1403c
}

html[data-theme=dark] .ZhihuLogo--red {
    fill: #b7302d
}

.ZhihuLogo--green,html[data-theme=dark] .ZhihuLogo--green {
    fill: #67c23a
}

html[data-theme=dark] .ZhihuLogo {
    fill: #3a76d0
}

.SignFlowHeader {
    padding-top: 30px
}

.SignFlowHeader-slogen {
    margin-top: 15px;
    color: #0084ff;
    font-size: 22px
}

html[data-theme=dark] .SignFlowHeader-slogen {
    color: #3a76d0
}

.SignContainer-content {
    width: 432px;
    margin: 0 auto;
    text-align: center
}

.SignContainer-content .Input-wrapper {
    width: 100%;
    height: 48px;
    padding: 0;
    color: #8590a6;
    border: none;
    border-bottom: 1px solid #ebebeb;
    border-radius: 0
}

html[data-theme=dark] .SignContainer-content .Input-wrapper {
    color: #606a80;
    border-bottom: 1px solid #444
}

.SignContainer-content .Input-wrapper.is-focus {
    border: none;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .SignContainer-content .Input-wrapper.is-focus {
    border-bottom: 1px solid #444
}

.SignContainer-content .SignFlow-accountInput.Input-wrapper,.SignContainer-content .SignFlow-accountInput.Input-wrapper.is-focus {
    border: none
}

.SignContainer-content input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset
}

.SignContainer-content .SignFlow-captchaContainer:not(.Captcha-chinese),.SignContainer-content .SignFlow-password,.SignContainer-content .SignFlow-username {
    border-bottom: 1px solid #ebebeb
}

.SignContainer-content .SignFlow-captchaContainer:not(.Captcha-chinese) .Input-wrapper,.SignContainer-content .SignFlow-password .Input-wrapper,.SignContainer-content .SignFlow-username .Input-wrapper {
    border-bottom: none!important
}

html[data-theme=dark] .SignContainer-content .SignFlow-captchaContainer:not(.Captcha-chinese),html[data-theme=dark] .SignContainer-content .SignFlow-password,html[data-theme=dark] .SignContainer-content .SignFlow-username {
    border-bottom: 1px solid #444
}

.SignContainer-inner {
    position: relative
}

.SignContainer-switch {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    background-color: #f6f6f6;
    height: 58px;
    border-top: 1px solid #ebebeb;
    font-size: 16px
}

.SignContainer-switch span {
    color: #175199;
    cursor: pointer
}

html[data-theme=dark] .SignContainer-switch span {
    color: #175199
}

html[data-theme=dark] .SignContainer-switch {
    background-color: #2e2e2e;
    border-top: 1px solid #444
}

.Captcha-chineseRefreshButton {
    margin-right: 10px
}

.SignFlow-captchaContainer {
    margin-top: 12px;
    height: 48px;
    transition: height .5s
}

.SignFlow-captchaContainer.Captcha-chinese {
    height: 87px;
    background-color: #f9f9f9;
    overflow: hidden
}

.Captcha-chineseOperator {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.Captcha-chineseImg {
    width: 200px;
    height: 44px
}

.signFlowModal {
    width: auto
}

.signFlowModal .Modal-content {
    padding: 0;
    margin: 0
}

.EmailRegister {
    width: 432px;
    padding: 30px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

html[data-theme=dark] .EmailRegister {
    background-color: #1a1a1a
}

.EmailRegister-submitButton {
    width: 100%;
    margin-top: 30px
}

.BounceLoading {
    position: relative
}

.BounceLoading .BounceLoading-child {
    position: absolute;
    background-color: #0084ff;
    border-radius: 50%;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: Bounce;
    animation-name: Bounce;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

html[data-theme=dark] .BounceLoading .BounceLoading-child {
    background-color: #3a76d0
}

@-webkit-keyframes Bounce {
    0%,to {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%)
    }

    50% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%)
    }
}

@keyframes Bounce {
    0%,to {
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%)
    }

    50% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%)
    }
}

.Login-options {
    margin-top: 12px;
    height: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background: #fff
}

html[data-theme=dark] .Login-options {
    background: #1a1a1a
}

.Login-content {
    padding: 0 40px 36px
}

.Login-content .Login-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 25px
}

.Login-switchType,html[data-theme=dark] .Login-switchType {
    color: #175199
}

.Login-cannotLogin {
    float: right
}

.Login-cannotLogin:hover,html[data-theme=dark] .Login-cannotLogin:hover {
    color: gray
}

.Login-footer {
    margin-top: 16px;
    text-align: center
}

.Login-aboardPhone,.Login-qrcode {
    display: inline-block;
    color: #8590a6;
    vertical-align: middle
}

.Login-aboardPhone button:hover,.Login-qrcode button:hover,html[data-theme=dark] .Login-aboardPhone button:hover,html[data-theme=dark] .Login-qrcode button:hover {
    color: gray
}

html[data-theme=dark] .Login-aboardPhone,html[data-theme=dark] .Login-qrcode {
    color: #606a80
}

.Login-footerSeparate {
    display: inline-block;
    width: 6%;
    color: #8590a6;
    text-align: center;
    box-sizing: border-box
}

html[data-theme=dark] .Login-footerSeparate {
    color: #606a80
}

.Login-socialLogin {
    max-width: 106px;
    display: inline-block;
    vertical-align: middle
}

.Login-socialButtonGroup {
    margin-left: 2px;
    transition: opacity .3s ease
}

.Login-socialButtonGroup--hidden {
    display: inline-block;
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0
}

.Login-socialButtonGroup--hidden button {
    width: 0;
    height: 0;
    overflow: hidden
}

.Login-socialButtonEntrance {
    width: 103px;
    text-align: left
}

.Login-socialButtonEntrance--hidden {
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
    display: none
}

.Login-socialButtonEntrance:hover,html[data-theme=dark] .Login-socialButtonEntrance:hover {
    color: gray
}

.Login-socialButton {
    height: 24px
}

.Login-socialButton svg {
    vertical-align: middle
}

.Login-socialButton:not(:first-child) {
    margin-left: 22px
}

.Login-accountBlockEmphasis {
    color: #f1403c
}

html[data-theme=dark] .Login-accountBlockEmphasis {
    color: #b7302d
}

.Login-socialIcon:hover {
    fill: #999
}

html[data-theme=dark] .Login-socialIcon:hover {
    fill: #646464
}

.SignInQrcode {
    margin: 35px 0 -32px
}

.Qrcode-container {
    text-align: center
}

.Qrcode-container p {
    font-size: 14px;
    line-height: 22px
}

.Qrcode-container p a,html[data-theme=dark] .Qrcode-container p a {
    color: #175199
}

.Qrcode-container p.Qrcode-scanResultTips {
    margin: 12px 0;
    font-size: 16px;
    color: #1a1a1a;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Qrcode-container p.Qrcode-scanResultTips {
    font-weight: 500
}

html[data-android] .Qrcode-container p.Qrcode-scanResultTips {
    font-weight: 700
}

html[data-theme=dark] .Qrcode-container p.Qrcode-scanResultTips {
    color: #999
}

.Qrcode-content {
    height: 210px;
    margin-bottom: 30px
}

.Qrcode-failure div {
    padding: 40px 0 8px
}

.Qrcode-failure p {
    width: 270px;
    margin: 0 auto
}

.Qrcode-img {
    margin: 0 auto 15px;
    line-height: 0;
    height: 150px;
    width: 150px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Qrcode-cutButton {
    border-top: 1px solid #ebebeb;
    padding: 14px 0;
    font-size: 14px;
    color: #175199
}

.Qrcode-cutButton span {
    cursor: pointer
}

html[data-theme=dark] .Qrcode-cutButton {
    border-top: 1px solid #444;
    color: #175199
}

.Qrcode-scanResultStaus {
    padding-top: 36px
}

.MobileModal-wrapper {
    position: relative
}

.MobileModal-wrapper--absoluted {
    position: absolute;
    top: 0;
    max-height: 100vh;
    overflow: hidden;
    z-index: -1
}

.MobileModal {
    background: #fff
}

html[data-theme=dark] .MobileModal {
    background: #1a1a1a
}

.MobileModal-content--default {
    padding-top: 50px;
    padding-bottom: 60px;
    min-height: 100vh;
    box-sizing: border-box
}

.MobileModal-closeButton {
    position: fixed;
    top: 0;
    right: 0;
    padding: 12px;
    z-index: 100
}

.MobileModal-closeIcon {
    fill: #1a1a1a;
    display: block
}

html[data-theme=dark] .MobileModal-closeIcon {
    fill: #999
}

.MobileModal-title {
    font-weight: 700
}

.MobileModal-title--default {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 16px;
    border-bottom: 1px solid #ebebeb;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(26,26,26,.05);
    margin: 0;
    font-size: 16px;
    line-height: 49px;
    background: #fff;
    z-index: 99
}

html[data-theme=dark] .MobileModal-title--default {
    border-bottom: 1px solid #444;
    box-shadow: 0 1px 3px hsla(0,0%,60%,.05);
    background: #1a1a1a
}

.MobileModal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(26,26,26,.65)
}

html[data-theme=dark] .MobileModal-backdrop {
    background: hsla(0,0%,60%,.65)
}

.MobileModal--plain {
    position: fixed;
    top: 50%;
    right: 0;
    left: 0;
    z-index: 100;
    margin: auto;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 87.2%;
    box-shadow: 0 5px 20px 0 rgba(23,81,153,.5);
    border-radius: 2px;
    overflow: hidden
}

.MobileModal--plain .MobileModal-closeIcon {
    fill: #8590a6
}

html[data-theme=dark] .MobileModal--plain .MobileModal-closeIcon {
    fill: #606a80
}

html[data-theme=dark] .MobileModal--plain {
    box-shadow: 0 5px 20px 0 rgba(23,81,153,.5)
}

.MobileModal-content--plain {
    padding: 16px 20px
}

.MobileModal-title--plain {
    text-align: center;
    padding: 24px 20px 8px;
    font-size: 18px
}

.MobileModal-subtitle {
    font-size: 14px;
    padding: 0 20px;
    color: #8590a6
}

html[data-theme=dark] .MobileModal-subtitle {
    color: #606a80
}

.AppAuthentication--appView .Modal-title {
    font-size: 18px;
    margin-top: 24px
}

.AppAuthentication--appView .Modal-content {
    padding-bottom: 16px
}

.AppAuthentication {
    max-width: 87.2%
}

.AppAuthentication-buttonContainer {
    padding: 0 16px
}

.AppAuthentication-button {
    width: 100%;
    margin-bottom: 16px;
    padding: 5px 0
}

.AppAuthentication-closeButton {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 0
}

.SignFlowActive-account {
    width: 100%;
    height: 48px;
    line-height: 48px
}

.SignFlowActive-editEmail {
    float: right;
    color: #175199
}

html[data-theme=dark] .SignFlowActive-editEmail {
    color: #175199
}

.SignFlowActive-sendDigits,.SignFlowActive-sendEmail {
    display: block;
    width: 220px;
    margin: 0 auto
}

.SignFlowActive-sendEmail {
    margin-top: 48px
}

.SignFlowActive-sendDigits {
    margin-top: 55px
}

.SignFlowActive-button {
    display: inline-block;
    border: none
}

.SignFlowActive-options {
    text-align: right;
    margin-top: 16px
}

.VerificationDialogModal-cutSmsType:hover,html[data-theme=dark] .VerificationDialogModal-cutSmsType:hover {
    color: gray
}

.VerificationDialogModalHeader {
    text-align: center
}

.VerificationDialogModalHeader-title {
    margin-top: 40px;
    font-size: 24px;
    color: #1a1a1a;
    margin-bottom: 0;
    padding: 0
}

html[data-theme=dark] .VerificationDialogModalHeader-title {
    color: #999
}

.VerificationDialogModalHeader-subTitle {
    margin: 2px auto 24px;
    font-size: 14px;
    color: #8590a6;
    max-width: 240px
}

.VerificationDialogModalHeader-subTitle:first-child:last-child {
    margin-bottom: 16px;
    max-width: none;
    text-align: left
}

html[data-theme=dark] .VerificationDialogModalHeader-subTitle {
    color: #606a80
}

.VerificationDialogModal-select {
    height: 48px;
    background: #fff;
    border: none;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    color: #444
}

.VerificationDialogModal-select .Select-plainButton {
    width: 100%
}

.VerificationDialogModal-select .Select-arrow {
    position: absolute;
    right: 0;
    top: 27%
}

html[data-theme=dark] .VerificationDialogModal-select {
    background: #1a1a1a;
    border-bottom: 1px solid #444;
    color: gray
}

.VerificationDialogModal-code {
    position: relative
}

.VerificationDialogModal-code .CountingDownButton {
    top: 16px!important
}

.VerificationDialogModal-input {
    padding-left: 0;
    margin-top: 16px;
    width: 100%;
    border: none!important;
    border-bottom: 1px solid #ebebeb!important
}

html[data-theme=dark] .VerificationDialogModal-input {
    border-bottom: 1px solid #444!important
}

.VerificationDialogModal-checkout {
    text-align: center
}

.VerificationDialogModal-button {
    color: #fff;
    background: #0084ff;
    width: 220px;
    height: 36px;
    border: 1px solid #0084ff;
    margin-top: 45px;
    font-size: 14px;
    border-radius: 3px
}

html[data-theme=dark] .VerificationDialogModal-button {
    color: #1a1a1a;
    background: #3a76d0;
    border: 1px solid #3a76d0
}

.VerificationDialogModal-button:hover {
    background: #0084ff
}

html[data-theme=dark] .VerificationDialogModal-button:hover {
    background: #3a76d0
}

.VerificationDialogModal-button:hover:disabled {
    background-color: #0084ff
}

html[data-theme=dark] .VerificationDialogModal-button:hover:disabled {
    background-color: #3a76d0
}

.VerificationDialogModal-tips {
    background: #f6f6f6;
    box-shadow: 0 -1px 0 0 #ebebeb;
    margin: 30px -24px -32px;
    padding: 16px;
    font-size: 13px;
    line-height: 21px;
    color: #8590a6
}

html[data-theme=dark] .VerificationDialogModal-tips {
    background: #2e2e2e;
    box-shadow: 0 -1px 0 0 #444;
    color: #606a80
}

.VerificationDialogModal-blue {
    color: #0084ff
}

html[data-theme=dark] .VerificationDialogModal-blue {
    color: #3a76d0
}

.Popover-targetContainer-verification {
    width: 376px
}

.VerificationDialogModal-options {
    margin-top: 16px;
    text-align: right
}

.VerificationDialogModal-cutSmsType:hover,html[data-theme=dark] .VerificationDialogModal-cutSmsType:hover {
    color: gray
}

.VerificationDialogModal-HelpWrapper {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-top: 12px
}

.VerificationDialogModal-HelpText {
    color: #8590a6
}

html[data-theme=dark] .VerificationDialogModal-HelpText {
    color: #606a80
}

.VerificationDialogMobileModal-HelpText {
    font-size: 13px;
    color: #8590a6;
    margin-top: 16px
}

html[data-theme=dark] .VerificationDialogMobileModal-HelpText {
    color: #606a80
}

.VerificationDialogModal-oneSelection {
    font-size: 14px
}

.VerificationDialogModal-smsInputButton {
    position: absolute;
    top: 24px;
    right: 0;
    padding: 4px 0;
    color: #175199;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

html[data-theme=dark] .VerificationDialogModal-smsInputButton {
    color: #175199
}

.SignFlow-smsBindPhoneInputContainer {
    position: relative;
    margin-top: 12px
}

.SignFlow-smsBindPhoneInputErrorMessage {
    top: 24px;
    right: 108px;
    width: 40%;
    height: 47px;
    padding: 0;
    padding-left: 4px;
    margin: 0;
    line-height: 47px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.SignFlow-smsBindPhoneInputErrorMask {
    right: 20px
}

.SignFlow-smsBindPhoneInputButton {
    position: absolute;
    top: 24px;
    right: 0;
    padding: 4px 0;
    color: #175199;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

html[data-theme=dark] .SignFlow-smsBindPhoneInputButton {
    color: #175199
}

.SignFlow-smsBindPhoneInput {
    width: calc(100% - 100px)
}

.BindPhone-buttonSection {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 40px
}

.BindPhone-button {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.BindPhone-button:first-child {
    margin-right: 10px
}

.BindPhone-subtitle {
    color: #8590a6;
    margin-top: 2px;
    margin-bottom: 24px;
    padding: 0 24px;
    text-align: center
}

html[data-theme=dark] .BindPhone-subtitle {
    color: #606a80
}

.BindPhone-helpWrapper {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    margin-top: 12px
}

.BindPhone-helpText {
    color: #8590a6
}

html[data-theme=dark] .BindPhone-helpText {
    color: #606a80
}

.BindPhone-remindLoginWithPhoneButton {
    display: block;
    width: 220px;
    margin: 48px auto 0
}

.MobileModal .SignFlowActive.SignFlow {
    padding: 0 16px;
    margin-top: 16px
}

.MobileModal .MobileBindPhoneTip {
    color: #8590a6;
    font-size: 14px
}

html[data-theme=dark] .MobileModal .MobileBindPhoneTip {
    color: #606a80
}

.MobileModal .BindPhone-buttonSection {
    margin-top: 16px
}

.MobileModal.VerificationModal {
    padding: 0 16px
}

.MobileModal .SignFlow-smsInputButton {
    top: 23px
}

.MobileModal .BindPhone-remindLoginWithPhoneButton {
    margin-top: 16px
}

.MobileModal.BindPhoneMobileModal .MobileModal-content,.MobileModal.ConfirmUnbindMobileModal .MobileModal-content,.MobileModal.LoginWithPhoneMobileModal .MobileModal-content,.MobileModal.NeedUnbindMobileModal .MobileModal-content {
    padding-top: 0
}

.BindPhoneForm .Input-wrapper {
    width: 100%;
    height: 48px;
    padding: 0;
    color: #8590a6;
    border: none;
    border-bottom: 1px solid #ebebeb;
    border-radius: 0
}

html[data-theme=dark] .BindPhoneForm .Input-wrapper {
    color: #606a80;
    border-bottom: 1px solid #444
}

.BindPhoneForm .Input-wrapper.is-focus {
    border: none;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .BindPhoneForm .Input-wrapper.is-focus {
    border-bottom: 1px solid #444
}

.BindPhoneForm .SignFlow-accountInput.Input-wrapper,.BindPhoneForm .SignFlow-accountInput.Input-wrapper.is-focus {
    border: none
}

.BindPhoneForm .SignFlow-smsBindPhoneInput {
    width: 100%;
    border-bottom: 1px solid #ebebeb
}

.BindPhoneForm .SignFlow-smsBindPhoneInput .Input-wrapper,.BindPhoneForm .SignFlow-smsBindPhoneInput .Input-wrapper.is-focus {
    border: none
}

html[data-theme=dark] .BindPhoneForm .SignFlow-smsBindPhoneInput {
    border-bottom: 1px solid #444
}

.SignFlow {
    overflow: hidden
}

.SignFlow input[type=number]::-webkit-inner-spin-button,.SignFlow input[type=number]::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none
}

.SignFlow input {
    height: 48px
}

.SignFlow input::-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fff inset!important
}

.SignFlow input[type=number] {
    -moz-appearance: textfield
}

.SignFlow .SignFlow-accountInput,.SignFlow .SignFlow-smsInput {
    width: auto
}

.SignFlow-submitButton {
    width: 100%;
    margin-top: 30px;
    height: 36px
}

.SignFlow-captchaContainer {
    height: 48px;
    margin-top: 12px;
    transition: height .3s ease
}

.SignFlow-snackBar {
    font-size: 13px;
    color: #8590a6
}

html[data-theme=dark] .SignFlow-snackBar {
    color: #606a80
}

.SignFlow-snackBarLink,html[data-theme=dark] .SignFlow-snackBarLink {
    color: #175199
}

.UnknownError {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 18px;
    padding: 48px
}

.CornerButtons {
    position: fixed;
    bottom: 0;
    right: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    transition: -webkit-transform .2s ease;
    transition: transform .2s ease;
    transition: transform .2s ease,-webkit-transform .2s ease;
    will-change: transfrom
}

.CornerAnimayedFlex {
    width: 40px;
    height: 52px;
    transition: height .2s ease
}

.CornerAnimayedFlex--hidden {
    height: 0
}

.CornerButton {
    background: #fff;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1)
}

html[data-theme=dark] .CornerButton {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.CornerButton:hover {
    background: #d3d3d3
}

html[data-theme=dark] .CornerButton:hover {
    background: #2e2e2e
}

.CornerButton .Zi,.CornerButton .Zi:hover {
    fill: #8590a6
}

html[data-theme=dark] .CornerButton .Zi,html[data-theme=dark] .CornerButton .Zi:hover {
    fill: #606a80
}

html[data-theme=dark] .CornerButton {
    background: #1a1a1a
}

.GlobalError {
    min-height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.GlobalError-main {
    min-width: 540px;
    min-height: 300px;
    color: #999;
    font-size: 18px;
    background: url(https://static.zhihu.com/heifetz/error_kanshan.eb5a42cdcd9d06f4695b.png);
    background-size: 202px 111px;
    background-repeat: no-repeat;
    background-position: 100% 100%
}

html[data-theme=dark] .GlobalError-main {
    color: #646464
}

.GlobalError-detail {
    margin-top: 80px
}

.GlobalError-detailTitle {
    margin-bottom: 30px;
    font-size: 40px
}

.RetryError {
    background: #fff;
    min-height: 160px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.RetryError-title {
    color: #8590a6;
    font-size: 22px;
    margin-bottom: 16px
}

html[data-theme=dark] .RetryError-title {
    color: #606a80
}

html:not([data-focus-method=pointer]) .Button:focus {
    box-shadow: 0 0 0 2px #fff,0 0 0 4px rgba(0,132,255,.3)
}

html[data-theme=dark] html:not([data-focus-method=pointer]) .Button:focus {
    box-shadow: 0 0 0 2px #1a1a1a,0 0 0 4px rgba(58,118,208,.3)
}

.Tooltip {
    position: absolute;
    width: 0;
    height: 0
}

.Tooltip-enter,.Tooltip-leave {
    transition: opacity .3s
}

.Tooltip-enter {
    opacity: 0
}

.Tooltip-enter-active,.Tooltip-leave {
    opacity: 1
}

.Tooltip-leave-active {
    opacity: 0
}

.TooltipContent-wrapper {
    position: relative;
    width: 0;
    height: 0
}

.TooltipContent {
    position: absolute;
    top: 0;
    left: 0;
    padding: 6px 8px;
    color: #fff;
    white-space: nowrap;
    background-color: rgba(26,26,26,.8);
    border-radius: 4px;
    font-size: 13px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

html[data-theme=dark] .TooltipContent {
    color: #1a1a1a;
    background-color: hsla(0,0%,60%,.8)
}

.TooltipContent--top {
    -webkit-transform: translate(-50%,-100%) translateY(-8px);
    transform: translate(-50%,-100%) translateY(-8px)
}

.TooltipContent--bottom {
    -webkit-transform: translate(-50%) translateY(8px);
    transform: translate(-50%) translateY(8px)
}

.TooltipContent--left {
    -webkit-transform: translate(-100%,-50%) translateX(-8px);
    transform: translate(-100%,-50%) translateX(-8px)
}

.TooltipContent--right {
    -webkit-transform: translateY(-50%) translateX(8px);
    transform: translateY(-50%) translateX(8px)
}

.TooltipContent:before {
    position: absolute;
    z-index: -1;
    border-color: rgba(26,26,26,.8) transparent transparent rgba(26,26,26,.8);
    border-style: solid;
    border-width: 4px;
    content: "";
    -webkit-transform: translate(-50%,-50%) rotate(45deg);
    transform: translate(-50%,-50%) rotate(45deg)
}

html[data-theme=dark] .TooltipContent:before {
    border-color: hsla(0,0%,60%,.8) transparent transparent hsla(0,0%,60%,.8)
}

.TooltipContent--top:before {
    top: 100%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%) rotate(-135deg);
    transform: translate(-50%,-50%) rotate(-135deg)
}

.TooltipContent--bottom:before {
    top: 0;
    left: 50%
}

.TooltipContent--left:before {
    top: 50%;
    left: 100%;
    -webkit-transform: translate(-50%,-50%) rotate(135deg);
    transform: translate(-50%,-50%) rotate(135deg)
}

.TooltipContent--right:before {
    top: 50%;
    left: 0;
    -webkit-transform: translate(-50%,-50%) rotate(-45deg);
    transform: translate(-50%,-50%) rotate(-45deg)
}

.TooltipContent a {
    color: inherit;
    text-decoration: underline
}

.GlobalTooltip {
    position: fixed;
    z-index: 9999
}

.StaticCacheBanner {
    position: relative;
    z-index: 100;
    padding: 16px 10px;
    line-height: 28px;
    color: #8590a6;
    text-align: center;
    background-color: #ebebeb
}

.StaticCacheBanner a {
    color: #175199;
    transition: border-bottom .2s ease-in
}

.StaticCacheBanner a:hover,html[data-theme=dark] .StaticCacheBanner a:hover {
    border-bottom: 1px solid rgba(23,81,153,.72)
}

html[data-theme=dark] .StaticCacheBanner a {
    color: #175199
}

html[data-theme=dark] .StaticCacheBanner {
    color: #606a80;
    background-color: #444
}

.LoadingBar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 101;
    display: none;
    height: 2px;
    pointer-events: none;
    background: #0084ff;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%)
}

.LoadingBar.is-active {
    display: block;
    -webkit-animation: LoadingBarForward 1s ease-in-out .8s infinite;
    animation: LoadingBarForward 1s ease-in-out .8s infinite
}

html[data-theme=dark] .LoadingBar {
    background: #3a76d0
}

@-webkit-keyframes LoadingBarForward {
    0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%)
    }

    40% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    to {
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }
}

@keyframes LoadingBarForward {
    0% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%)
    }

    40% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    60% {
        -webkit-transform: translateX(0);
        transform: translateX(0)
    }

    to {
        -webkit-transform: translateX(100%);
        transform: translateX(100%)
    }
}

.Sticky.is-fixed {
    position: fixed;
    z-index: 2;
    box-sizing: border-box;
    -webkit-font-smoothing: subpixel-antialiased
}

.Sticky.is-absolute {
    position: absolute;
    top: auto;
    bottom: 0;
    z-index: 1;
    margin-bottom: 0;
    box-sizing: border-box
}

.Sticky.is-absolute.is-bottom {
    top: 0;
    bottom: auto;
    margin-top: 0
}

.Sticky.Sticky--CSSSticky {
    position: -webkit-sticky;
    position: sticky
}

.Sticky--holder {
    visibility: hidden
}

.Notification {
    position: fixed;
    top: 75px;
    left: 50%;
    z-index: 499;
    padding: 14px 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    font-size: 14px;
    color: #1a1a1a;
    pointer-events: all;
    border-radius: 4px;
    box-shadow: 0 5px 20px rgba(26,26,26,.1);
    box-sizing: border-box
}

html[data-theme=dark] .Notification {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

@media (max-width: 768px) {
    .Notification {
        width:calc(100vw - 2 * 16px)
    }
}

@media (min-width: 769px) {
    .Notification {
        width:-webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        max-width: 600px;
        min-width: 520px
    }
}

html[data-theme=dark] .Notification {
    color: #999
}

.Notification-textSection {
    width: 100%;
    display: inline-block
}

@media (max-width: 768px) {
    .Notification-textSection {
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
}

.Notification-textSection--withButton {
    text-align: left
}

.Notification-textSection--withoutButton {
    text-align: center
}

.Notification-actionsSection {
    white-space: nowrap;
    height: 100%;
    margin: auto 0 auto 32px
}

.Notification-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 503;
    overflow: hidden;
    pointer-events: none
}

.Notification-white {
    color: #1a1a1a;
    background: #fff
}

html[data-theme=dark] .Notification-white {
    color: #999;
    background: #1a1a1a
}

.Notification-red {
    color: #fff;
    background: #f1403c
}

html[data-theme=dark] .Notification-red {
    color: #1a1a1a;
    background: #b7302d
}

.Notification-red-ghost {
    color: #f1403c;
    background: #fff
}

html[data-theme=dark] .Notification-red-ghost {
    color: #b7302d;
    background: #1a1a1a
}

@-webkit-keyframes spring-in {
    0% {
        -webkit-transform: translate(-50%,-20px);
        transform: translate(-50%,-20px);
        opacity: .01
    }

    to {
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        opacity: 1
    }
}

@keyframes spring-in {
    0% {
        -webkit-transform: translate(-50%,-20px);
        transform: translate(-50%,-20px);
        opacity: .01
    }

    to {
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        opacity: 1
    }
}

@-webkit-keyframes spring-out {
    0% {
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        opacity: 1
    }

    to {
        -webkit-transform: translate(-50%,-20px);
        transform: translate(-50%,-20px);
        opacity: 0
    }
}

@keyframes spring-out {
    0% {
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        opacity: 1
    }

    to {
        -webkit-transform: translate(-50%,-20px);
        transform: translate(-50%,-20px);
        opacity: 0
    }
}

.Notification-enter {
    -webkit-animation: spring-in .3s;
    animation: spring-in .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.Notification-leave {
    -webkit-animation: spring-out .3s;
    animation: spring-out .3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.InfiLoader--bounceShown {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 100px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.PlaceHolder-inner {
    position: relative;
    overflow: hidden;
    background: #f6f6f6;
    color: #fff
}

html[data-theme=dark] .PlaceHolder-inner {
    background: #2e2e2e;
    color: #1a1a1a
}

.PlaceHolder-mask {
    position: relative;
    min-width: 100%;
    vertical-align: top;
    box-sizing: border-box
}

.PlaceHolder-bg {
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(90deg,#f6f6f6 0,#ebebeb 20%,#f6f6f6 40%,#f6f6f6);
    -webkit-animation: linear-double 1s linear 1ms infinite forwards;
    animation: linear-double 1s linear 1ms infinite forwards
}

html[data-theme=dark] .PlaceHolder-bg {
    background: linear-gradient(90deg,#2e2e2e 0,#444 20%,#2e2e2e 40%,#2e2e2e)
}

@-webkit-keyframes linear-double {
    0% {
        -webkit-transform: translateX(-56%);
        transform: translateX(-56%)
    }

    to {
        -webkit-transform: translateX(56%);
        transform: translateX(56%)
    }
}

@keyframes linear-double {
    0% {
        -webkit-transform: translateX(-56%);
        transform: translateX(-56%)
    }

    to {
        -webkit-transform: translateX(56%);
        transform: translateX(56%)
    }
}

.Menu {
    padding: 6px 0
}

.Menu-item {
    display: block;
    width: 100%;
    padding: 0 20px;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box
}

.Menu-item.is-active {
    background: #f6f6f6
}

html[data-theme=dark] .Menu-item.is-active {
    background: #2e2e2e
}

.Menu-item--noActive {
    cursor: default
}

.Menu-divider {
    margin: 8px 0;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .Menu-divider {
    border-bottom: 1px solid #444
}

.Pagination {
    padding: 16px 20px;
    text-align: center;
    margin: 0 auto
}

.PaginationButton {
    color: #1a1a1a;
    transition: color .2s;
    padding: 0 15px
}

.PaginationButton:not(:disabled):hover,html[data-theme=dark] .PaginationButton:not(:disabled):hover {
    color: #175199
}

html[data-theme=dark] .PaginationButton {
    color: #999
}

.PaginationButton--current {
    color: #8590a6
}

html[data-theme=dark] .PaginationButton--current {
    color: #606a80
}

.MaxLength {
    font-size: 14px;
    color: #8590a6
}

.MaxLength.is-error {
    color: #f1403c
}

html[data-theme=dark] .MaxLength.is-error {
    color: #b7302d
}

html[data-theme=dark] .MaxLength {
    color: #606a80
}

.Holder {
    height: 14px;
    margin-bottom: 16px;
    background: #f6f6f6;
    border-radius: 2px
}

.Holder:last-child {
    margin-bottom: 0
}

html[data-theme=dark] .Holder {
    background: #2e2e2e
}

.Holder--avatar,.Holder--button,.Holder--icon,.Holder--inline {
    display: inline-block;
    margin-bottom: 0;
    vertical-align: bottom
}

.Holder--title {
    height: 18px
}

.Holder--icon {
    width: 14px;
    margin-right: 8px;
    border-radius: 999px
}

.Holder--button {
    width: 96px;
    height: 34px;
    border-radius: 3px
}

.Holder--button+.Holder--button {
    margin-left: 16px
}

.Holder--avatar {
    width: 24px;
    height: 24px
}

.Favlists-items {
    max-height: 335px;
    min-height: 140px;
    margin-bottom: 40px;
    overflow-x: hidden;
    overflow-y: auto
}

.Favlists-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .Favlists-item {
    border-bottom: 1px solid #444
}

.Favlists-itemInner {
    overflow: hidden;
    margin-right: 20px
}

.Favlists-itemName {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis
}

.Favlists-itemNameText {
    overflow: hidden;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap
}

.Favlists-itemIcon {
    margin-left: 6px
}

.Favlists-itemIcon .Zi {
    fill: #8590a6;
    vertical-align: baseline
}

html[data-theme=dark] .Favlists-itemIcon .Zi {
    fill: #606a80
}

.Favlists-itemContent {
    font-size: 14px;
    color: #8590a6;
    margin-top: 4px
}

html[data-theme=dark] .Favlists-itemContent {
    color: #606a80
}

.Favlists-updateButton {
    padding-left: 0;
    padding-right: 0;
    width: 76px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.Favlists-actions {
    padding: 16px 20px
}

.Favlists-actions,.Favlists-mobileActions {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-sizing: border-box
}

.Favlists-mobileActions {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 12px 20px;
    border-top: 1px solid #ebebeb;
    background: #fff
}

.Favlists-mobileActions .Favlists-addButton:last-child:first-child {
    width: 100%
}

.Favlists-mobileActions .Button {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.Favlists-mobileActions .Button:first-child:not(:last-child) {
    margin-right: 8px
}

html[data-theme=dark] .Favlists-mobileActions {
    border-top: 1px solid #444;
    background: #1a1a1a
}

.Favlist-empty {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0
}

.Favlist-emptyContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%
}

.Favlist-emptyTip {
    margin-top: 30px;
    font-size: 15px;
    color: #8590a6
}

html[data-theme=dark] .Favlist-emptyTip {
    color: #606a80
}

.Favlists-addButton {
    width: 220px
}

.Favlists-addItem {
    margin-bottom: 8px
}

.Favlists-descritionInput,.Favlists-titleInput {
    width: 100%;
    height: auto;
    padding: 8px 12px
}

.Favlists-privacyOption {
    display: block;
    margin-bottom: 6px;
    overflow: auto;
    font-size: 14px
}

.Favlists-privacyOptionTips {
    margin-left: 4px;
    color: #8590a6
}

html[data-theme=dark] .Favlists-privacyOptionTips {
    color: #606a80
}

.Favlists-privacyOptionRadio {
    display: inline-block;
    width: 14px;
    height: 14px;
    padding: 2px;
    margin: 0 4px 0 0;
    vertical-align: middle;
    border: 2px solid #ebebeb;
    border-radius: 50%;
    transition: background-color,border-color .3s;
    background-clip: content-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.Favlists-privacyOptionRadio:checked {
    background-color: #0084ff;
    border-color: #0084ff
}

html[data-theme=dark] .Favlists-privacyOptionRadio:checked {
    background-color: #3a76d0;
    border-color: #3a76d0
}

.Favlists-privacyOptionRadio:focus {
    outline: none
}

html[data-theme=dark] .Favlists-privacyOptionRadio {
    border: 2px solid #444
}

.Favlists-inputTips {
    padding-top: 8px;
    text-align: right
}

.Favlists-favButton {
    width: 72px
}

.FavlistItem-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.FavlistItem-lockIcon {
    margin-left: 8px
}

.FavlistItem-follow {
    width: 90px
}

.EmptyState {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%
}

.EmptyState-inner {
    font-size: 15px;
    color: #8590a6;
    text-align: center
}

html[data-theme=dark] .EmptyState-inner {
    color: #606a80
}

.EmptyState-image {
    display: block;
    margin: 0 auto
}

.EmptyState-action:not(.Button) {
    color: #175199
}

.EmptyState-action:not(.Button):hover,html[data-theme=dark] .EmptyState-action:not(.Button):hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .EmptyState-action:not(.Button) {
    color: #175199
}

.EmptyState-action.Button:hover {
    color: gray
}

.EmptyState-action.Button:hover .Icon {
    fill: #999
}

html[data-theme=dark] .EmptyState-action.Button:hover .Icon {
    fill: #646464
}

html[data-theme=dark] .EmptyState-action.Button:hover {
    color: gray
}

.OpenInAppButton {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 50%;
    z-index: 100;
    width: 105px;
    font-size: 15px;
    font-weight: 500;
    line-height: 36px;
    color: #fff;
    text-align: center;
    background: #0084ff;
    border-radius: 18px;
    -webkit-transform: translate(-50%,200%);
    transform: translate(-50%,200%);
    box-shadow: 0 2px 5px rgba(26,26,26,.25);
    transition: -webkit-transform .3s .3s;
    transition: transform .3s .3s;
    transition: transform .3s .3s,-webkit-transform .3s .3s
}

html[data-theme=dark] .OpenInAppButton {
    color: #1a1a1a;
    background: #3a76d0;
    box-shadow: 0 2px 5px hsla(0,0%,60%,.25)
}

.OpenInAppButton.is-shown {
    -webkit-transform: translate(-50%,-25px);
    transform: translate(-50%,-25px)
}

.Formula {
    display: inline-block;
    vertical-align: middle;
    background: no-repeat 50%;
    background-size: contain;
    font-size: 0
}

.Formula.isEditable {
    cursor: pointer
}

.Formula-image {
    max-width: 100%;
    opacity: 0;
    visibility: hidden
}

.Formula-placeholder {
    opacity: 0
}

.MathToolbar {
    display: block;
    padding: 4px 12px;
    border-radius: inherit inherit 0 0;
    background: #f6f6f6;
    border-bottom: 1px solid #ebebeb;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

html[data-theme=dark] .MathToolbar {
    background: #2e2e2e;
    border-bottom: 1px solid #444
}

.MathToolbar-button {
    height: 28px;
    padding: 2px 4px;
    box-sizing: border-box;
    border: 1px solid transparent;
    vertical-align: middle
}

.MathToolbar-button+.MathToolbar-button {
    margin-left: 16px
}

.MathToolbar-button:hover {
    background: #f6f6f6;
    border-color: #ebebeb
}

html[data-theme=dark] .MathToolbar-button:hover {
    background: #2e2e2e;
    border-color: #444
}

.MathToolbar-palettes {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: -4px;
    padding: 16px;
    max-width: 384px
}

.MathToolbar-palettes,.MathToolbar-palettesButton {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.MathToolbar-palettesButton {
    margin: 4px;
    padding: 0;
    width: 24px;
    height: 24px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 16px;
    color: #8590a6;
    border-radius: 4px
}

.MathToolbar-palettesButton:hover {
    background-color: #f6f6f6
}

html[data-theme=dark] .MathToolbar-palettesButton:hover {
    background-color: #2e2e2e
}

html[data-theme=dark] .MathToolbar-palettesButton {
    color: #606a80
}

.MathToolbar-paletteIcon {
    max-width: calc(100% - 2px)
}

.MathToolbar-palettes--math {
    max-width: 380px
}

.MathToolbar-palettes--math .MathToolbar-palettesButton {
    padding: 0 3px;
    width: 30px;
    height: 60px
}

.MathToolbar-palettes--arrow .MathToolbar-palettesButton {
    height: 35px
}

.FormulaModal {
    width: 550px
}

.FormulaModal-input {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 30px
}

.FormulaModal-input .Input {
    padding: 6px 12px;
    min-height: 100px;
    box-sizing: border-box
}

.FormulaModal-formula {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 3px;
    background: #fff;
    border: 2px dashed #ebebeb;
    border-radius: 3px;
    min-height: 106px;
    overflow-x: auto
}

.FormulaModal-formula img {
    max-width: 100%
}

html[data-theme=dark] .FormulaModal-formula {
    background: #1a1a1a;
    border: 2px dashed #444
}

.FormulaModal-buttonGroup {
    margin-top: 32px
}

.FormulaModal-previewText {
    color: #8590a6;
    font-size: 14px
}

html[data-theme=dark] .FormulaModal-previewText {
    color: #606a80
}

.FocusPlugin--unfocused:hover {
    cursor: default;
    box-shadow: 0 0 0 2px rgba(0,132,255,.3)
}

html[data-theme=dark] .FocusPlugin--unfocused:hover {
    box-shadow: 0 0 0 2px rgba(58,118,208,.3)
}

.FocusPlugin--focused {
    cursor: default;
    box-shadow: 0 0 0 2px #0084ff
}

html[data-theme=dark] .FocusPlugin--focused {
    box-shadow: 0 0 0 2px #3a76d0
}

.Image {
    max-width: 100%;
    margin: 0 auto
}

.Image[data-size=small] {
    max-width: 40%
}

.Image--isBlock {
    display: block
}

.Editable-imageUploader {
    text-align: center
}

.Editable-imageUploader-layout {
    position: relative;
    display: inline-block;
    max-width: 100%;
    vertical-align: top
}

.Editable-imageUploader-layout.is-fullWidth {
    width: 100%
}

.Editable-imageUploader-image {
    display: block;
    max-width: 100%;
    opacity: .3
}

.Editable-imageUploader-placeholder {
    height: 192px;
    background-color: #ebebeb
}

html[data-theme=dark] .Editable-imageUploader-placeholder {
    background-color: #444
}

.Editable-imageUploader-status {
    position: absolute;
    left: 0;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 100%
}

.Editable-imageUploader-statusText {
    font-size: 28px;
    line-height: 40px;
    color: #8590a6
}

html[data-theme=dark] .Editable-imageUploader-statusText {
    color: #606a80
}

.Editable-imageUploader-status.is-error .Editable-imageUploader-statusText {
    color: #f36
}

html[data-theme=dark] .Editable-imageUploader-status.is-error .Editable-imageUploader-statusText {
    color: #d92155
}

.Editable-imageUploader-retry {
    margin-top: 4px;
    font-size: 16px;
    line-height: 32px
}

.Editable-imageUploader-retry .Button {
    font-size: inherit
}

.Editable-imageUploader-progress {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background-color: #0084ff
}

.Editable-imageUploader-progress.is-error {
    background-color: #f36
}

html[data-theme=dark] .Editable-imageUploader-progress.is-error {
    background-color: #d92155
}

.Editable-imageUploader-progress .LoadingBar {
    position: relative;
    height: 100%;
    background-color: hsla(0,0%,100%,.3)
}

html[data-theme=dark] .Editable-imageUploader-progress .LoadingBar {
    background-color: rgba(26,26,26,.3)
}

html[data-theme=dark] .Editable-imageUploader-progress {
    background-color: #3a76d0
}

.Image-caption.is-placeholder {
    color: #bfbfbf
}

html[data-theme=dark] .Image-caption.is-placeholder {
    color: gray
}

.Image-caption.is-editing {
    opacity: 0
}

.Image-captionInput {
    position: absolute;
    z-index: 203
}

.Image-captionInput textarea {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0;
    border: none;
    font: inherit;
    font-size: .9em;
    line-height: 1.5;
    text-align: center;
    color: #8590a6;
    background: none;
    resize: none
}

.Image-captionInput textarea::-webkit-input-placeholder {
    color: #bfbfbf
}

.Image-captionInput textarea:-ms-input-placeholder {
    color: #bfbfbf
}

.Image-captionInput textarea::placeholder {
    color: #bfbfbf
}

html[data-theme=dark] .Image-captionInput textarea::-webkit-input-placeholder {
    color: gray
}

html[data-theme=dark] .Image-captionInput textarea:-ms-input-placeholder {
    color: gray
}

html[data-theme=dark] .Image-captionInput textarea::placeholder {
    color: gray
}

.Image-captionInput textarea:focus {
    outline: none
}

html[data-theme=dark] .Image-captionInput textarea {
    color: #606a80
}

.Image-resizer {
    padding: 8px
}

.Image-resizerButton {
    padding: 0 8px;
    vertical-align: middle
}

.Image-resizerButton .Zi {
    display: block
}

.Image-resizerButton.is-active {
    color: #0084ff
}

html[data-theme=dark] .Image-resizerButton.is-active {
    color: #3a76d0
}

.Editable-VideoTitleInput-container {
    -ms-flex-item-align: stretch;
    align-self: stretch;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%
}

html[data-theme=dark] .Editable-VideoTitleInput-container {
    background: #1a1a1a
}

.Editable-VideoTitleInput-innerContainer {
    cursor: text;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 16px
}

.Editable-VideoTitleInput-innerContainer--isBeforeIconShown {
    padding: 0 10px
}

.Editable-VideoTitleInput-beforeIcon,html[data-theme=dark] .Editable-VideoTitleInput-beforeIcon {
    color: gray
}

.Editable-VideoTitleInput-value {
    font-size: 15px;
    line-height: 48px
}

.Editable-VideoTitleInput-value--noContent,html[data-theme=dark] .Editable-VideoTitleInput-value--noContent {
    color: gray
}

.Editable-VideoTitleInput {
    border: none;
    box-sizing: border-box;
    font-size: 15px;
    height: 48px;
    outline: none;
    padding: 0;
    width: 100%
}

.Editable-VideoTitleInput::-webkit-input-placeholder {
    color: gray
}

.Editable-VideoTitleInput:-ms-input-placeholder {
    color: gray
}

.Editable-VideoTitleInput::placeholder {
    color: gray
}

html[data-theme=dark] .Editable-VideoTitleInput::-webkit-input-placeholder {
    color: gray
}

html[data-theme=dark] .Editable-VideoTitleInput:-ms-input-placeholder {
    color: gray
}

html[data-theme=dark] .Editable-VideoTitleInput::placeholder {
    color: gray
}

.VideoCard {
    position: relative;
    overflow: hidden;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1)
}

html[data-theme=dark] .VideoCard {
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    border: 1px solid #444
}

.VideoCard-link {
    display: block
}

.VideoCard-layout {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.VideoCard-poster {
    width: 120px;
    height: 90px;
    background-color: #ebebeb
}

.VideoCard-poster img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

html[data-theme=dark] .VideoCard-poster {
    background-color: #444
}

.VideoCard-video {
    position: relative;
    width: 100%
}

.VideoCard-video:before {
    display: block;
    padding-top: 56.25%;
    content: ""
}

.VideoCard-video-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.VideoCard-thumbnail {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #ebebeb
}

.VideoCard-thumbnail img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

html[data-theme=dark] .VideoCard-thumbnail {
    background-color: #444
}

.VideoCard-play-button {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 64px;
    height: 64px;
    margin: auto;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.VideoCard-playIcon {
    display: block
}

html[data-theme=dark] .VideoCard-playIcon {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.7" /><feFuncG type="linear" slope="0.7" /><feFuncB type="linear" slope="0.7" /></feComponentTransfer></filter></svg>#filter');
    -webkit-filter: brightness(.7);
    filter: brightness(.7)
}

.VideoCard--interactive .VideoCard-video:hover .VideoCard-play-button {
    -webkit-transform: scale(1.1);
    transform: scale(1.1)
}

.VideoCard-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 10px 16px;
    overflow: hidden;
    box-sizing: border-box
}

.VideoCard-VideoTitleInputHolder {
    height: 48px;
    width: 100%
}

.VideoCard-title {
    overflow: hidden;
    height: 28px;
    font-size: 16px;
    line-height: 28px;
    text-overflow: ellipsis;
    white-space: nowrap
}

.VideoCard--interactive .VideoCard-link .VideoCard-content:hover .VideoCard-title,html[data-theme=dark] .VideoCard--interactive .VideoCard-link .VideoCard-content:hover .VideoCard-title {
    color: #175199
}

.VideoCard-description {
    height: 25px;
    margin-top: 5px;
    line-height: 25px
}

.VideoCard-source {
    display: inline-block;
    margin-right: 10px;
    color: #8590a6
}

html[data-theme=dark] .VideoCard-source {
    color: #606a80
}

.VideoCard-badge {
    display: inline-block;
    padding: 0 8px;
    color: #8590a6;
    background-color: #f6f6f6;
    border-radius: 3px
}

html[data-theme=dark] .VideoCard-badge {
    color: #606a80;
    background-color: #2e2e2e
}

.VideoCard-player {
    width: 100%;
    height: 100%;
    background-color: #1a1a1a
}

.VideoCard-player .Embed,.VideoCard-player iframe {
    display: block;
    width: 100%;
    height: 100%
}

html[data-theme=dark] .VideoCard-player {
    background-color: #999
}

.VideoCard-overlay {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: #fff
}

.VideoCard-overlay.is-loading {
    opacity: 0
}

.VideoCard-mask,html[data-theme=dark] .VideoCard-overlay {
    background-color: #1a1a1a
}

.VideoCard-mask {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    transition: opacity .3s,visibility .3s
}

.VideoCard-mask:not(.is-shown) {
    opacity: 0;
    visibility: hidden
}

html[data-theme=dark] .VideoCard-mask {
    background-color: #999
}

.VideoCard--mobile .VideoCard-poster {
    width: 100px;
    height: 75px
}

.VideoCard--mobile .VideoCard-video:hover .VideoCard-play-button {
    -webkit-transform: scale(1);
    transform: scale(1)
}

.VideoCard--mobile .VideoCard-content {
    padding: 10px 12px
}

.VideoCard--mobile .VideoCard-title {
    font-size: 16px
}

.VideoCard--mobile .VideoCard-description {
    margin-top: 0;
    font-size: 12px
}

.Editable-videoCensorList {
    background: rgba(241,64,60,.1);
    border-radius: 4px;
    color: #f1403c;
    font-size: 15px;
    margin-top: 10px;
    padding: 10px 18px 10px 13px
}

html[data-theme=dark] .Editable-videoCensorList {
    background: rgba(183,48,45,.1);
    color: #b7302d
}

.Editable-videoCensorItem {
    line-height: 19px;
    margin-bottom: 5px
}

.Editable-videoCensorItem:last-child {
    margin-bottom: 0
}

.Editable-videoCensorItem:before {
    content: "\\2022"
}

.Editable-videoCensorItem span {
    font-weight: 700
}

.Editable-video {
    margin: 16px 0;
    border-radius: 4px
}

.Video-uploadPosterButton {
    background: rgba(26,26,26,.5);
    border: 1px solid hsla(0,0%,100%,.3);
    border-radius: 3px;
    height: 32px;
    width: 109px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    text-align: center;
    line-height: 32px;
    cursor: pointer
}

.Video-uploadPosterButton p {
    color: #fff;
    font-size: 14px;
    margin: 0!important
}

html[data-theme=dark] .Video-uploadPosterButton p {
    color: #1a1a1a
}

html[data-theme=dark] .Video-uploadPosterButton {
    background: hsla(0,0%,60%,.5);
    border: 1px solid rgba(26,26,26,.3)
}

.Editable-video--titleError .Editable-VideoTitleInput-afterIcon {
    color: #f1403c
}

html[data-theme=dark] .Editable-video--titleError .Editable-VideoTitleInput-afterIcon {
    color: #b7302d
}

.Editable-video--posterError .Video-uploadPosterButton {
    background: #f1403c;
    border: none
}

html[data-theme=dark] .Editable-video--posterError .Video-uploadPosterButton {
    background: #b7302d
}

.Editable-videoUploader {
    margin: 16px 0;
    border-radius: 4px
}

.Editable-videoUploader-thumbnail {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%
}

.Editable-videoUploader-text {
    text-align: center;
    position: relative;
    color: #8590a6
}

html[data-theme=dark] .Editable-videoUploader-text {
    color: #606a80
}

.Editable-videoUploader-status {
    font-size: 28px;
    line-height: 40px
}

.Editable-videoUploader-size {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px
}

.Editable-videoUploader-retry {
    margin-top: 4px;
    font-size: 16px;
    line-height: 32px
}

.Editable-videoUploader-retry .Button {
    font-size: inherit
}

.Editable-videoUploader-retry .Button:hover {
    background-color: transparent!important;
    background-color: initial!important
}

.Editable-videoUploader-progress {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    height: 4px;
    background-color: rgba(26,26,26,.05)
}

html[data-theme=dark] .Editable-videoUploader-progress {
    background-color: hsla(0,0%,60%,.05)
}

.Editable-videoUploader-progress-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #0084ff
}

.Editable-videoUploader-progress-bar.is-error {
    background-color: #f36
}

html[data-theme=dark] .Editable-videoUploader-progress-bar.is-error {
    background-color: #d92155
}

html[data-theme=dark] .Editable-videoUploader-progress-bar {
    background-color: #3a76d0
}

.Editable-videoUploader-progress .LoadingBar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: hsla(0,0%,100%,.3)
}

html[data-theme=dark] .Editable-videoUploader-progress .LoadingBar {
    background-color: rgba(26,26,26,.3)
}

.Editable-videoUploader-image {
    position: absolute
}

.Editable-videoUploader-uploadPosterButton {
    background: rgba(26,26,26,.5);
    border: 1px solid hsla(0,0%,100%,.3);
    border-radius: 3px;
    height: 32px;
    width: 109px;
    position: absolute;
    bottom: 16px;
    right: 16px;
    text-align: center;
    line-height: 32px;
    cursor: pointer
}

.Editable-videoUploader-uploadPosterButton p {
    color: #fff;
    font-size: 14px;
    margin: 0!important
}

html[data-theme=dark] .Editable-videoUploader-uploadPosterButton p {
    color: #1a1a1a
}

html[data-theme=dark] .Editable-videoUploader-uploadPosterButton {
    background: hsla(0,0%,60%,.5);
    border: 1px solid rgba(26,26,26,.3)
}

.Editable-videoUploader-imageMask {
    width: 100%;
    height: 100%;
    position: absolute;
    background: hsla(0,0%,92%,.9)
}

html[data-theme=dark] .Editable-videoUploader-imageMask {
    background: rgba(68,68,68,.9)
}

.VideoErrorCard-thumbnail {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 100%
}

.VideoErrorCard-error {
    font-size: 28px;
    line-height: 40px;
    text-align: center;
    color: #8590a6
}

html[data-theme=dark] .VideoErrorCard-error {
    color: #606a80
}

.Editable-videoError {
    margin: 16px 0;
    border-radius: 4px
}

.Editable-videoError--titleError .Editable-VideoTitleInput-afterIcon {
    color: #f1403c
}

html[data-theme=dark] .Editable-videoError--titleError .Editable-VideoTitleInput-afterIcon {
    color: #b7302d
}

.Editable-divider {
    overflow: hidden
}

.Link+.Link {
    margin-left: 2px
}

.Link[data-editable] {
    cursor: text!important
}

.LinkCard {
    position: relative;
    display: block;
    margin: 1em auto;
    width: 390px;
    box-sizing: border-box;
    border-radius: 12px;
    max-width: 100%;
    overflow: hidden
}

.LinkCard,.LinkCard:hover {
    text-decoration: none;
    border: none!important;
    color: inherit!important
}

.LinkCard-content {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 12px;
    border-radius: inherit;
    background-color: hsla(0,0%,96%,.88)
}

.LinkCard--noImage .LinkCard-content {
    background-color: #f6f6f6
}

html[data-theme=dark] .LinkCard--noImage .LinkCard-content {
    background-color: #2e2e2e
}

@supports ((-webkit-backdrop-filter:blur(20px)) or (backdrop-filter:blur(20px))) {
    .LinkCard-content {
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px)
    }
}

html[data-theme=dark] .LinkCard-content {
    background-color: rgba(46,46,46,.88)
}

.LinkCard-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    color: #1a1a1a
}

html[data-theme=dark] .LinkCard-title {
    color: #999
}

.LinkCard-meta {
    display: block;
    margin-top: 4px;
    font-size: 14px;
    line-height: 1.25;
    color: #999
}

html[data-theme=dark] .LinkCard-meta {
    color: #646464
}

.LinkCard-image {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: inherit
}

.LinkCard-image.LinkCard-image--horizontal {
    width: 90px
}

.LinkCard-image.LinkCard-image--vertical {
    height: 80px
}

.LinkCard-imageCell {
    margin-left: 8px;
    border-radius: 6px
}

html[data-theme=dark] .LinkCard--hasImage .LinkCard-imageCell {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.7" /><feFuncG type="linear" slope="0.7" /><feFuncB type="linear" slope="0.7" /></feComponentTransfer></filter></svg>#filter');
    -webkit-filter: brightness(.7);
    filter: brightness(.7)
}

.LinkCard-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="20" /></filter></svg>#filter');
    -webkit-filter: blur(20px);
    filter: blur(20px);
    background-size: cover;
    background-position: 50%
}

@supports ((-webkit-backdrop-filter:blur(20px)) or (backdrop-filter:blur(20px))) {
    .LinkCard-backdrop {
        -webkit-filter: none;
        filter: none
    }
}

.LinkCard-image--default {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background-color: #ebebeb;
    color: #d3d3d3
}

html[data-theme=dark] .LinkCard-image--default {
    background-color: #444;
    color: #2e2e2e
}

.LinkModal-input {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.LinkModal-input+.LinkModal-input {
    margin-top: 10px
}

.LinkModal-input .Input {
    margin-left: 8px
}

.LinkBubble.Popover-content--top.Popover-content--arrowed {
    margin-top: -10px
}

.LinkBubble.Popover-content--bottom.Popover-content--arrowed {
    margin-top: 10px
}

.LinkBubble-content {
    display: block;
    padding: 7px 10px 7px 16px
}

.LinkBubble-button,.LinkBubble-previewLink {
    vertical-align: middle
}

.LinkBubble-previewLink {
    display: inline-block;
    margin-right: 8px;
    max-width: 233px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: none;
    font-size: 14px;
    line-height: 1.3;
    border-bottom: 1px solid transparent
}

.LinkBubble-previewLink:hover {
    color: #175199;
    border-bottom-color: rgba(0,132,255,.72)
}

html[data-theme=dark] .LinkBubble-previewLink:hover {
    color: #175199;
    border-bottom-color: rgba(58,118,208,.72)
}

.LinkBubble-button {
    padding: 0 6px
}

.Avatar {
    background: #fff;
    border-radius: 2px
}

html[data-theme=dark] .Avatar {
    background: #1a1a1a
}

.Avatar--medium {
    border-radius: 3px
}

.Avatar--large {
    border-radius: 4px
}

.Avatar--round {
    border-radius: 50%
}

.VagueImage {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f6f6f6
}

html[data-theme=dark] .VagueImage {
    background-color: #2e2e2e
}

.VagueImage-mask {
    z-index: 1;
    opacity: 0;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    transition: opacity .3s ease-in
}

.VagueImage-mask.is-active {
    opacity: 1
}

.VagueImage-mask,.VagueImage-mask:after,.VagueImage-mask:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0
}

.VagueImage-mask:after,.VagueImage-mask:before {
    display: block;
    content: ""
}

.VagueImage-mask:before {
    background-color: #fff;
    opacity: .32
}

html[data-theme=dark] .VagueImage-mask:before {
    background-color: #1a1a1a
}

.VagueImage-mask:after {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="16" /></filter></svg>#filter');
    -webkit-filter: blur(16px);
    filter: blur(16px);
    background-image: inherit;
    background-size: cover;
    background-position: 50%
}

.VagueImage-innerLarge {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.RichText a.UserLink-link {
    color: #175199
}

.RichText a.UserLink-link:hover,html[data-theme=dark] .RichText a.UserLink-link:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .RichText a.UserLink-link {
    color: #175199
}

.ztext {
    word-break: break-word;
    line-height: 1.6
}

.ztext>:first-child {
    margin-top: 0
}

.ztext>:last-child {
    margin-bottom: 0
}

.ztext h1,.ztext h2,.ztext h3,.ztext h4,.ztext h5,.ztext h6 {
    margin-top: 1.66667em;
    margin-bottom: .83333em;
    font-size: 1.2em;
    line-height: 1.5;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ztext h1,html[data-ios] .ztext h2,html[data-ios] .ztext h3,html[data-ios] .ztext h4,html[data-ios] .ztext h5,html[data-ios] .ztext h6 {
    font-weight: 500
}

html[data-android] .ztext h1,html[data-android] .ztext h2,html[data-android] .ztext h3,html[data-android] .ztext h4,html[data-android] .ztext h5,html[data-android] .ztext h6 {
    font-weight: 700
}

.ztext u {
    text-decoration: none
}

.ztext u,html[data-theme=dark] .ztext u {
    border-bottom: 1px dashed gray
}

.ztext b {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ztext b {
    font-weight: 500
}

html[data-android] .ztext b {
    font-weight: 700
}

.ztext a.external,.ztext a.internal,.ztext a.ztext-link {
    text-decoration: none;
    cursor: pointer;
    border-bottom: 1px solid gray
}

.ztext a.external:hover,.ztext a.internal:hover,.ztext a.ztext-link:hover {
    color: #175199;
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .ztext a.external:hover,html[data-theme=dark] .ztext a.internal:hover,html[data-theme=dark] .ztext a.ztext-link:hover {
    color: #175199;
    border-bottom: 1px solid #175199
}

.ztext a.external>.ellipsis:after,.ztext a.internal>.ellipsis:after,.ztext a.ztext-link>.ellipsis:after {
    content: "..."
}

.ztext a.external>.invisible,.ztext a.internal>.invisible,.ztext a.ztext-link>.invisible {
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent
}

.ztext a.external u,.ztext a.internal u,.ztext a.ztext-link u {
    border: none
}

html[data-theme=dark] .ztext a.external,html[data-theme=dark] .ztext a.internal,html[data-theme=dark] .ztext a.ztext-link {
    border-bottom: 1px solid gray
}

.ztext a.member_mention {
    color: #175199
}

.ztext a.member_mention:hover,html[data-theme=dark] .ztext a.member_mention:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .ztext a.member_mention {
    color: #175199
}

.ztext p {
    margin: 1em 0
}

.ztext hr {
    margin: 4em auto;
    width: 240px;
    max-width: 100%;
    border: none;
    border-top: 1px solid #d3d3d3
}

html[data-theme=dark] .ztext hr {
    border-top: 1px solid #2e2e2e
}

.ztext img[eeimg] {
    max-width: 100%;
    vertical-align: middle
}

html[data-theme=dark] .ztext img[eeimg] {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="table" tableValues="0.6 0.4" /><feFuncG type="table" tableValues="0.6 0.4" /><feFuncB type="table" tableValues="0.6 0.4" /></feComponentTransfer><feColorMatrix type="hueRotate" color-interpolation-filters="sRGB" values="180" /></filter></svg>#filter');
    -webkit-filter: invert(.6) hue-rotate(180deg);
    filter: invert(.6) hue-rotate(180deg)
}

.ztext img[eeimg="1"] {
    margin: 0 3px;
    display: inline-block
}

.ztext img[eeimg="2"] {
    margin: 1em auto;
    display: block
}

.ztext blockquote {
    margin: 1em 0;
    padding-left: 1em;
    color: #646464;
    border-left: 3px solid #d3d3d3
}

html[data-theme=dark] .ztext blockquote {
    color: #999;
    border-left: 3px solid #2e2e2e
}

.ztext ol,.ztext ul {
    margin: 1em 0;
    padding: 0
}

.ztext ol ol,.ztext ol ul,.ztext ul ol,.ztext ul ul {
    margin: 0
}

.ztext ol>ol,.ztext ol>ul,.ztext ul>ol,.ztext ul>ul {
    display: table-row
}

.ztext ol>ol:before,.ztext ol>ul:before,.ztext ul>ol:before,.ztext ul>ul:before {
    display: table-cell;
    content: ""
}

.ztext ul {
    display: table
}

.ztext ul>li {
    display: table-row;
    list-style: none
}

.ztext ul>li:before {
    display: table-cell;
    content: "\\2022   ";
    white-space: pre
}

.ztext ol {
    display: table;
    counter-reset: ol
}

.ztext ol>li {
    display: table-row;
    list-style: none
}

.ztext ol>li:before {
    display: table-cell;
    text-align: right;
    counter-increment: ol;
    content: counter(ol) ". ";
    white-space: pre
}

.ztext ol ol {
    counter-reset: ol2
}

.ztext ol ol li:before {
    counter-increment: ol2;
    content: counter(ol2) ". "
}

.ztext ol ol ol {
    counter-reset: ol3
}

.ztext ol ol ol li:before {
    counter-increment: ol3;
    content: counter(ol3) ". "
}

.ztext ol ol ol ol {
    counter-reset: ol4
}

.ztext ol ol ol ol li:before {
    counter-increment: ol4;
    content: counter(ol4) ". "
}

.ztext figure {
    margin: 1em 0
}

.ztext figure .content_image,.ztext figure .origin_image {
    margin: 0 auto
}

.ztext figure figcaption {
    margin-top: .66667em;
    padding: 0 1em;
    font-size: .9em;
    line-height: 1.5;
    text-align: center;
    color: #999
}

html[data-theme=dark] .ztext figure figcaption {
    color: #646464
}

.ztext figure+figure {
    margin-top: 1.6em
}

.ztext .content_image,.ztext .origin_image {
    display: block;
    max-width: 100%;
    margin: 1em auto
}

html[data-theme=dark] .ztext .content_image,html[data-theme=dark] .ztext .origin_image {
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.7" /><feFuncG type="linear" slope="0.7" /><feFuncB type="linear" slope="0.7" /></feComponentTransfer></filter></svg>#filter');
    -webkit-filter: brightness(.7);
    filter: brightness(.7)
}

html[data-ios] .ztext .content_image,html[data-ios] .ztext .origin_image {
    -webkit-filter: none;
    filter: none
}

.ztext .content_image[data-size=small],.ztext .origin_image[data-size=small] {
    max-width: 40%
}

.ztext .content_image.zh-lightbox-thumb,.ztext .origin_image.zh-lightbox-thumb {
    cursor: zoom-in
}

.ztext code {
    margin: 0 2px;
    padding: 3px 4px;
    border-radius: 3px;
    font-family: Menlo,Monaco,Consolas,Andale Mono,lucida console,Courier New,monospace;
    font-size: .9em;
    background-color: #f6f6f6
}

html[data-theme=dark] .ztext code {
    background-color: #2e2e2e
}

.ztext pre {
    margin: 1em 0;
    padding: .88889em;
    font-size: .9em;
    word-wrap: normal;
    white-space: pre;
    overflow: auto;
    background: #f6f6f6;
    border-radius: 4px
}

.ztext pre code {
    margin: 0;
    padding: 0;
    font-size: inherit;
    border-radius: 0;
    background-color: inherit
}

html[data-theme=dark] .ztext pre {
    background: #2e2e2e
}

.ztext li pre {
    white-space: pre-wrap
}

.ztext .link-box,.ztext .video-box {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 1em 0;
    overflow: auto;
    white-space: normal;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1)
}

html[data-theme=dark] .ztext .link-box,html[data-theme=dark] .ztext .video-box {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.ztext .link-box .thumbnail,.ztext .video-box .thumbnail {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 90px;
    height: 90px;
    -o-object-fit: cover;
    object-fit: cover
}

.ztext .link-box .content,.ztext .video-box .content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 10px 1em;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around
}

.ztext .link-box .title,.ztext .video-box .title {
    font-size: 1.2em;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ztext .link-box .title,html[data-ios] .ztext .video-box .title {
    font-weight: 500
}

html[data-android] .ztext .link-box .title,html[data-android] .ztext .video-box .title {
    font-weight: 700
}

.ztext .link-box .url,.ztext .video-box .url {
    overflow: hidden;
    color: gray;
    text-overflow: ellipsis;
    word-wrap: normal;
    white-space: nowrap
}

html[data-theme=dark] .ztext .link-box .url,html[data-theme=dark] .ztext .video-box .url {
    color: gray
}

.ztext .link-box .label,.ztext .video-box .label {
    display: none
}

html[data-theme=dark] .ztext .link-box,html[data-theme=dark] .ztext .video-box {
    border: 1px solid #444
}

.highlight {
    margin: 1em 0
}

.highlight pre {
    margin: 0
}

.highlight .hll {
    background-color: #fdfdfd
}

html[data-theme=dark] .highlight .hll {
    background-color: #2e2e2e
}

.highlight .c {
    font-style: italic;
    color: #999
}

html[data-theme=dark] .highlight .c {
    color: #646464
}

.highlight .err {
    color: #f1403c
}

html[data-theme=dark] .highlight .err {
    color: #b7302d
}

.highlight .k {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .highlight .k {
    font-weight: 500
}

html[data-android] .highlight .k {
    font-weight: 700
}

.highlight .o {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .highlight .o {
    font-weight: 500
}

html[data-android] .highlight .o {
    font-weight: 700
}

.highlight .cm {
    font-style: italic;
    color: #999
}

html[data-theme=dark] .highlight .cm {
    color: #646464
}

.highlight .cp {
    font-weight: 600;
    font-synthesis: style;
    color: #999
}

html[data-ios] .highlight .cp {
    font-weight: 500
}

html[data-android] .highlight .cp {
    font-weight: 700
}

html[data-theme=dark] .highlight .cp {
    color: #646464
}

.highlight .c1 {
    font-style: italic;
    color: #999
}

html[data-theme=dark] .highlight .c1 {
    color: #646464
}

.highlight .cs {
    font-style: italic;
    font-weight: 600;
    font-synthesis: style;
    color: #999
}

html[data-ios] .highlight .cs {
    font-weight: 500
}

html[data-android] .highlight .cs {
    font-weight: 700
}

html[data-theme=dark] .highlight .cs {
    color: #646464
}

.highlight .gd {
    color: #1a1a1a;
    background-color: #ebebeb
}

html[data-theme=dark] .highlight .gd {
    color: #999;
    background-color: #444
}

.highlight .ge {
    font-style: italic
}

.highlight .gr {
    color: #f1403c
}

html[data-theme=dark] .highlight .gr {
    color: #b7302d
}

.highlight .gh {
    color: #999
}

html[data-theme=dark] .highlight .gh {
    color: #646464
}

.highlight .gi {
    color: #1a1a1a;
    background-color: #f6f6f6
}

html[data-theme=dark] .highlight .gi {
    color: #999;
    background-color: #2e2e2e
}

.highlight .go,html[data-theme=dark] .highlight .go {
    color: gray
}

.highlight .gp {
    color: #646464
}

html[data-theme=dark] .highlight .gp {
    color: #999
}

.highlight .gs {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .highlight .gs {
    font-weight: 500
}

html[data-android] .highlight .gs {
    font-weight: 700
}

.highlight .gu {
    color: #999
}

html[data-theme=dark] .highlight .gu {
    color: #646464
}

.highlight .gt {
    color: #f1403c
}

html[data-theme=dark] .highlight .gt {
    color: #b7302d
}

.highlight .kc {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .highlight .kc {
    font-weight: 500
}

html[data-android] .highlight .kc {
    font-weight: 700
}

.highlight .kd {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .highlight .kd {
    font-weight: 500
}

html[data-android] .highlight .kd {
    font-weight: 700
}

.highlight .kn {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .highlight .kn {
    font-weight: 500
}

html[data-android] .highlight .kn {
    font-weight: 700
}

.highlight .kp {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .highlight .kp {
    font-weight: 500
}

html[data-android] .highlight .kp {
    font-weight: 700
}

.highlight .kr {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .highlight .kr {
    font-weight: 500
}

html[data-android] .highlight .kr {
    font-weight: 700
}

.highlight .kt {
    font-weight: 600;
    font-synthesis: style;
    color: #175199
}

html[data-ios] .highlight .kt {
    font-weight: 500
}

html[data-android] .highlight .kt {
    font-weight: 700
}

html[data-theme=dark] .highlight .kt {
    color: #175199
}

.highlight .m {
    color: #0084ff
}

html[data-theme=dark] .highlight .m {
    color: #3a76d0
}

.highlight .s {
    color: #f1403c
}

html[data-theme=dark] .highlight .s {
    color: #b7302d
}

.highlight .na {
    color: #0084ff
}

html[data-theme=dark] .highlight .na {
    color: #3a76d0
}

.highlight .nb {
    color: #0084ff
}

html[data-theme=dark] .highlight .nb {
    color: #3a76d0
}

.highlight .nc {
    font-weight: 600;
    font-synthesis: style;
    color: #175199
}

html[data-ios] .highlight .nc {
    font-weight: 500
}

html[data-android] .highlight .nc {
    font-weight: 700
}

html[data-theme=dark] .highlight .nc {
    color: #175199
}

.highlight .no {
    color: #0084ff
}

html[data-theme=dark] .highlight .no {
    color: #3a76d0
}

.highlight .ni,html[data-theme=dark] .highlight .ni {
    color: #5868d1
}

.highlight .ne {
    font-weight: 600;
    font-synthesis: style;
    color: #f1403c
}

html[data-ios] .highlight .ne {
    font-weight: 500
}

html[data-android] .highlight .ne {
    font-weight: 700
}

html[data-theme=dark] .highlight .ne {
    color: #b7302d
}

.highlight .nf {
    font-weight: 600;
    font-synthesis: style;
    color: #f1403c
}

html[data-ios] .highlight .nf {
    font-weight: 500
}

html[data-android] .highlight .nf {
    font-weight: 700
}

html[data-theme=dark] .highlight .nf {
    color: #b7302d
}

.highlight .nn {
    color: #646464
}

html[data-theme=dark] .highlight .nn {
    color: #999
}

.highlight .nt,html[data-theme=dark] .highlight .nt {
    color: #175199
}

.highlight .nv {
    color: #0084ff
}

html[data-theme=dark] .highlight .nv {
    color: #3a76d0
}

.highlight .ow {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .highlight .ow {
    font-weight: 500
}

html[data-android] .highlight .ow {
    font-weight: 700
}

.highlight .w {
    color: #bfbfbf
}

html[data-theme=dark] .highlight .w {
    color: #444
}

.highlight .mf {
    color: #0084ff
}

html[data-theme=dark] .highlight .mf {
    color: #3a76d0
}

.highlight .mh {
    color: #0084ff
}

html[data-theme=dark] .highlight .mh {
    color: #3a76d0
}

.highlight .mi {
    color: #0084ff
}

html[data-theme=dark] .highlight .mi {
    color: #3a76d0
}

.highlight .mo {
    color: #0084ff
}

html[data-theme=dark] .highlight .mo {
    color: #3a76d0
}

.highlight .sb {
    color: #f1403c
}

html[data-theme=dark] .highlight .sb {
    color: #b7302d
}

.highlight .sc {
    color: #f1403c
}

html[data-theme=dark] .highlight .sc {
    color: #b7302d
}

.highlight .sd {
    color: #f1403c
}

html[data-theme=dark] .highlight .sd {
    color: #b7302d
}

.highlight .s2 {
    color: #f1403c
}

html[data-theme=dark] .highlight .s2 {
    color: #b7302d
}

.highlight .se {
    color: #f1403c
}

html[data-theme=dark] .highlight .se {
    color: #b7302d
}

.highlight .sh {
    color: #f1403c
}

html[data-theme=dark] .highlight .sh {
    color: #b7302d
}

.highlight .si {
    color: #f1403c
}

html[data-theme=dark] .highlight .si {
    color: #b7302d
}

.highlight .sx {
    color: #f1403c
}

html[data-theme=dark] .highlight .sx {
    color: #b7302d
}

.highlight .sr {
    color: #c2a469
}

html[data-theme=dark] .highlight .sr {
    color: #806e46
}

.highlight .s1 {
    color: #f1403c
}

html[data-theme=dark] .highlight .s1 {
    color: #b7302d
}

.highlight .ss {
    color: #f1403c
}

html[data-theme=dark] .highlight .ss {
    color: #b7302d
}

.highlight .bp {
    color: #999
}

html[data-theme=dark] .highlight .bp {
    color: #646464
}

.highlight .vc {
    color: #0084ff
}

html[data-theme=dark] .highlight .vc {
    color: #3a76d0
}

.highlight .vg {
    color: #0084ff
}

html[data-theme=dark] .highlight .vg {
    color: #3a76d0
}

.highlight .vi {
    color: #0084ff
}

html[data-theme=dark] .highlight .vi {
    color: #3a76d0
}

.highlight .il {
    color: #0084ff
}

html[data-theme=dark] .highlight .il {
    color: #3a76d0
}

.highlight::-webkit-scrollbar {
    width: 6px;
    height: 6px
}

.highlight::-webkit-scrollbar-thumb:horizontal {
    background-color: rgba(26,26,26,.5);
    border-radius: 6px
}

.highlight::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: rgba(26,26,26,.6)
}

html[data-theme=dark] .highlight::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: hsla(0,0%,60%,.6)
}

html[data-theme=dark] .highlight::-webkit-scrollbar-thumb:horizontal {
    background-color: hsla(0,0%,60%,.5)
}

.AutoComplete-UserItem {
    width: 188px;
    height: 50px;
    padding: 9px 0;
    line-height: normal;
    box-sizing: border-box
}

.AutoComplete-UserDetail {
    display: inline-block;
    margin-left: 8px;
    vertical-align: middle
}

.AutoComplete-UserHeadline,.AutoComplete-UserName {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.AutoComplete-UserName {
    font-size: 14px;
    color: #1a1a1a
}

html[data-theme=dark] .AutoComplete-UserName {
    color: #999
}

.AutoComplete-UserHeadline {
    font-size: 12px;
    color: #8590a6
}

html[data-theme=dark] .AutoComplete-UserHeadline {
    color: #606a80
}

.AutoComplete-UserAvatar {
    vertical-align: middle
}

.AutoComplete-DefaultItem {
    line-height: 40px
}

.AutoComplete-menu--hidden {
    visibility: hidden
}

.MentionSuggestions {
    position: absolute;
    z-index: 203;
    line-height: 1
}

.MentionSuggestions-input {
    width: 200px;
    padding: 4px 6px;
    font-size: inherit
}

.MentionSuggestions-input .Input {
    height: auto;
    background: transparent
}

.MentionSuggestions-menu {
    width: 200px
}

.MentionSuggestions-menu .Menu-item {
    padding: 0 10px
}

.Dropzone {
    position: relative
}

.Dropzone-cursor {
    position: absolute;
    left: 0;
    right: 0;
    margin: -1px 0;
    border-bottom: 2px solid #0084ff;
    pointer-events: none
}

html[data-theme=dark] .Dropzone-cursor {
    border-bottom: 2px solid #3a76d0
}

.Editable-toolbar {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.isToolbarSticky .Editable-toolbar,.Sticky.is-fixed .Editable-toolbar {
    border-top: none!important;
    border-bottom: none!important
}

.isToolbarSticky .Editable-toolbar:after,.Sticky.is-fixed .Editable-toolbar:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    pointer-events: none;
    height: 3px;
    background: radial-gradient(ellipse at 50% 1%,rgba(26,26,26,.1),hsla(0,0%,100%,0) 80%)
}

html[data-theme=dark] .isToolbarSticky .Editable-toolbar:after,html[data-theme=dark] .Sticky.is-fixed .Editable-toolbar:after {
    background: radial-gradient(ellipse at 50% 1%,hsla(0,0%,60%,.1),rgba(26,26,26,0) 80%)
}

html[data-theme=dark] .Editable-toolbar {
    background: #1a1a1a;
    border-bottom: 1px solid #444
}

.Editable-toolbar-separator {
    background-color: #ebebeb;
    display: inline-block;
    height: 20px;
    margin: 0 3px;
    vertical-align: middle;
    width: 1px
}

html[data-theme=dark] .Editable-toolbar-separator {
    background-color: #444
}

.Editable-control {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    height: 26px;
    margin: 0 2px;
    white-space: nowrap
}

.Editable-control .Zi {
    fill: #8590a6
}

html[data-theme=dark] .Editable-control .Zi {
    fill: #606a80
}

.Editable-control:not(:disabled):hover {
    background: #f6f6f6;
    border-color: #ebebeb
}

html[data-theme=dark] .Editable-control:not(:disabled):hover {
    background: #2e2e2e;
    border-color: #444
}

.Editable-control.is-active .Zi {
    fill: #0084ff
}

html[data-theme=dark] .Editable-control.is-active .Zi {
    fill: #3a76d0
}

.Editable-control .Zi,.Editable-control span {
    vertical-align: middle
}

.Editable-control .Zi+span {
    margin-left: 6px
}

.Editable-toolbarMenu {
    height: 26px;
    margin-left: auto
}

.Editable-toolbarMenuItem {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 36px
}

.Editable-toolbarMenuItem .Zi {
    margin-right: 4px
}

.Editable-videoModal .Modal-footer {
    padding: 12px 24px
}

.Editable-videoModal-title {
    font-size: 20px;
    font-weight: 500;
    color: #1a1a1a
}

html[data-theme=dark] .Editable-videoModal-title {
    color: #999
}

.Editable-videoModal-uploader {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-sizing: border-box;
    height: 220px;
    border: 2px dashed #ebebeb;
    border-radius: 10px;
    cursor: pointer
}

.Editable-videoModal-uploader:hover {
    border-color: #8590a6
}

.Editable-videoModal-uploader:hover .Zi {
    fill: #8590a6
}

html[data-theme=dark] .Editable-videoModal-uploader:hover .Zi {
    fill: #606a80
}

html[data-theme=dark] .Editable-videoModal-uploader:hover {
    border-color: #606a80
}

.Editable-videoModal-uploader input {
    display: none
}

html[data-theme=dark] .Editable-videoModal-uploader {
    border: 2px dashed #444
}

.Editable-videoModal-uploader-icon {
    text-align: center;
    display: block
}

.Editable-videoModal-uploader-icon .Zi {
    vertical-align: middle;
    fill: #ebebeb
}

html[data-theme=dark] .Editable-videoModal-uploader-icon .Zi {
    fill: #444
}

.Editable-videoModal-uploader-text {
    margin-top: 10px;
    font-size: 18px;
    line-height: 30px;
    text-align: center
}

.Editable-videoModal-uploader-tip {
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #8590a6
}

html[data-theme=dark] .Editable-videoModal-uploader-tip {
    color: #606a80
}

.Editable-docModal .Modal-footer {
    padding: 12px 24px
}

.Editable-docModal input[type=file] {
    display: none
}

.Editable-docModal-title {
    font-size: 20px;
    font-weight: 500;
    color: #1a1a1a
}

html[data-theme=dark] .Editable-docModal-title {
    color: #999
}

.Editable-docModal-uploader {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-sizing: border-box;
    height: 220px;
    border: 2px dashed #ebebeb;
    border-radius: 10px;
    cursor: pointer
}

.Editable-docModal-uploader:hover {
    border-color: #8590a6
}

.Editable-docModal-uploader:hover .Zi {
    fill: #8590a6
}

html[data-theme=dark] .Editable-docModal-uploader:hover .Zi {
    fill: #606a80
}

html[data-theme=dark] .Editable-docModal-uploader:hover {
    border-color: #606a80
}

html[data-theme=dark] .Editable-docModal-uploader {
    border: 2px dashed #444
}

.Editable-docModal-uploader-icon {
    text-align: center;
    display: block
}

.Editable-docModal-uploader-icon .Zi {
    vertical-align: middle;
    fill: #ebebeb
}

html[data-theme=dark] .Editable-docModal-uploader-icon .Zi {
    fill: #444
}

.Editable-docModal-uploader-text {
    font-size: 18px;
    line-height: 30px;
    margin-top: 20px;
    text-align: center
}

.Editable-docModal-uploader-tip {
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #8590a6
}

html[data-theme=dark] .Editable-docModal-uploader-tip {
    color: #606a80
}

.Editable-docModal-fileName {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.Editable-docModal-fileName .Zi {
    fill: #0084ff;
    margin-right: 4px
}

html[data-theme=dark] .Editable-docModal-fileName .Zi {
    fill: #3a76d0
}

.Editable-docModal-loading {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 36px 0 12px
}

.Editable-docModal-fail,.Editable-docModal-loading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Editable-docModal-fail {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: center
}

.Editable-docModal-failHint {
    color: #f1403c;
    font-size: 16px;
    margin-top: 36px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Editable-docModal-failHint {
    font-weight: 500
}

html[data-android] .Editable-docModal-failHint {
    font-weight: 700
}

html[data-theme=dark] .Editable-docModal-failHint {
    color: #b7302d
}

.Editable-docModal-retryButton {
    margin: 32px 0 10px;
    width: 220px
}

.WatermarkHint-modalBody {
    font-size: 14px;
    text-align: center
}

.WatermarkHint-modalContent {
    padding-top: 16px
}

.WatermarkHint-modalContent .ModalButtonGroup {
    margin-top: 32px;
    margin-bottom: 0
}

.WatermarkHint-modalTitle {
    font-size: 24px;
    margin: 32px 0 16px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .WatermarkHint-modalTitle {
    font-weight: 500
}

html[data-android] .WatermarkHint-modalTitle {
    font-weight: 700
}

.Editable-languageSuggestions {
    position: fixed;
    z-index: 203
}

.Editable-languageSuggestionsInput {
    cursor: pointer
}

.Editable-languageSuggestionsInput input {
    cursor: inherit
}

.Editable-languageSuggestionsInput input:focus {
    cursor: text
}

.Editable-languageSuggestionsMenu {
    max-height: 300px;
    margin-top: -8px;
    margin-bottom: -8px;
    overflow-y: auto
}

.Editable-languageSuggestionsMenuContainer {
    overflow-y: hidden
}

.Editable-notification-layout {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.Editable-notification-actions,.Editable-notification-layout {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.Editable-notification-actions {
    margin: 0 -12px
}

.Editable-notification-action {
    margin: 0 12px
}

.Editable .RichText {
    cursor: text
}

.public-DraftEditorPlaceholder-root {
    position: absolute;
    pointer-events: none
}

.Editable--hidePlaceholder .public-DraftEditorPlaceholder-root {
    display: none
}

.Editable-styled,.Editable-unstyled {
    margin: 0 0 .72em
}

.Editable-styled:first-child,.Editable-unstyled:first-child {
    margin-top: 0
}

.Editable-styled:last-child,.Editable-unstyled:last-child {
    margin-bottom: 0
}

.DraftEditor-root blockquote+blockquote {
    margin-top: -1em
}

.DraftEditor-root pre.public-DraftStyleDefault-pre {
    border-radius: 4px
}

.DraftEditor-root pre.public-DraftStyleDefault-pre pre {
    padding: 0;
    margin: 0;
    border-radius: 0;
    overflow: visible;
    overflow: initial
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem,.DraftEditor-root .public-DraftStyleDefault-unorderedListItem {
    margin: 0
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1,.DraftEditor-root .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {
    margin-left: 1.15em
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2,.DraftEditor-root .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth2 {
    margin-left: 2.3em
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3,.DraftEditor-root .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth3 {
    margin-left: 3.45em
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4,.DraftEditor-root .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth4 {
    margin-left: 4.6em
}

.DraftEditor-root .public-DraftStyleDefault-ol,.DraftEditor-root .public-DraftStyleDefault-ul {
    display: block
}

.DraftEditor-root .public-DraftStyleDefault-ol>li,.DraftEditor-root .public-DraftStyleDefault-ul>li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.DraftEditor-root .public-DraftStyleDefault-ol>li:before,.DraftEditor-root .public-DraftStyleDefault-ul>li:before {
    display: inline;
    display: initial
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem {
    list-style-type: none
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {
    counter-reset: ol0
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth0:before {
    content: counter(ol0) ". ";
    counter-increment: ol0
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {
    counter-reset: ol1
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {
    content: counter(ol1) ". ";
    counter-increment: ol1
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {
    counter-reset: ol2
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {
    content: counter(ol2) ". ";
    counter-increment: ol2
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {
    counter-reset: ol3
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {
    content: counter(ol3) ". ";
    counter-increment: ol3
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {
    counter-reset: ol4
}

.DraftEditor-root .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {
    content: counter(ol4) ". ";
    counter-increment: ol4
}

_:-ms-lang(x),pre.public-DraftStyleDefault-pre,pre.public-DraftStyleDefault-pre pre {
    overflow: visible;
    overflow: initial;
    word-wrap: break-word
}

.DraftEditor-root code[class*=language-],.DraftEditor-root pre[class*=language-] {
    color: #000;
    background: none;
    text-shadow: 0 1px #fff;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none
}

.DraftEditor-root code[class*=language-]::-moz-selection,.DraftEditor-root code[class*=language-] ::-moz-selection,.DraftEditor-root pre[class*=language-]::-moz-selection,.DraftEditor-root pre[class*=language-] ::-moz-selection {
    text-shadow: none;
    background: #bfbfbf
}

.DraftEditor-root code[class*=language-]::selection,.DraftEditor-root code[class*=language-] ::selection,.DraftEditor-root pre[class*=language-]::selection,.DraftEditor-root pre[class*=language-] ::selection {
    text-shadow: none;
    background: #bfbfbf
}

html[data-theme=dark] .DraftEditor-root code[class*=language-]::-moz-selection,html[data-theme=dark] .DraftEditor-root code[class*=language-] ::-moz-selection,html[data-theme=dark] .DraftEditor-root pre[class*=language-]::-moz-selection,html[data-theme=dark] .DraftEditor-root pre[class*=language-] ::-moz-selection {
    background: gray
}

html[data-theme=dark] .DraftEditor-root code[class*=language-]::selection,html[data-theme=dark] .DraftEditor-root code[class*=language-] ::selection,html[data-theme=dark] .DraftEditor-root pre[class*=language-]::selection,html[data-theme=dark] .DraftEditor-root pre[class*=language-] ::selection {
    background: gray
}

@media print {
    .DraftEditor-root code[class*=language-],.DraftEditor-root pre[class*=language-] {
        text-shadow: none
    }
}

.DraftEditor-root pre[class*=language-] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto
}

.DraftEditor-root :not(pre)>code[class*=language-],.DraftEditor-root pre[class*=language-] {
    background: #f6f6f6
}

html[data-theme=dark] .DraftEditor-root :not(pre)>code[class*=language-],html[data-theme=dark] .DraftEditor-root pre[class*=language-] {
    background: #2e2e2e
}

.DraftEditor-root :not(pre)>code[class*=language-] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal
}

.DraftEditor-root .token.cdata,.DraftEditor-root .token.comment,.DraftEditor-root .token.doctype,.DraftEditor-root .token.prolog {
    color: #708090
}

.DraftEditor-root .token.punctuation {
    color: #999
}

html[data-theme=dark] .DraftEditor-root .token.punctuation {
    color: #646464
}

.DraftEditor-root .namespace {
    opacity: .7
}

.DraftEditor-root .token.boolean,.DraftEditor-root .token.constant,.DraftEditor-root .token.deleted,.DraftEditor-root .token.number,.DraftEditor-root .token.property,.DraftEditor-root .token.symbol,.DraftEditor-root .token.tag {
    color: #f36
}

html[data-theme=dark] .DraftEditor-root .token.boolean,html[data-theme=dark] .DraftEditor-root .token.constant,html[data-theme=dark] .DraftEditor-root .token.deleted,html[data-theme=dark] .DraftEditor-root .token.number,html[data-theme=dark] .DraftEditor-root .token.property,html[data-theme=dark] .DraftEditor-root .token.symbol,html[data-theme=dark] .DraftEditor-root .token.tag {
    color: #d92155
}

.DraftEditor-root .token.attr-name,.DraftEditor-root .token.builtin,.DraftEditor-root .token.char,.DraftEditor-root .token.inserted,.DraftEditor-root .token.selector,.DraftEditor-root .token.string,html[data-theme=dark] .DraftEditor-root .token.attr-name,html[data-theme=dark] .DraftEditor-root .token.builtin,html[data-theme=dark] .DraftEditor-root .token.char,html[data-theme=dark] .DraftEditor-root .token.inserted,html[data-theme=dark] .DraftEditor-root .token.selector,html[data-theme=dark] .DraftEditor-root .token.string {
    color: gray
}

.DraftEditor-root .language-css .token.string,.DraftEditor-root .style .token.string,.DraftEditor-root .token.entity,.DraftEditor-root .token.operator,.DraftEditor-root .token.url {
    color: #c2a469;
    background: hsla(0,0%,100%,.5)
}

html[data-theme=dark] .DraftEditor-root .language-css .token.string,html[data-theme=dark] .DraftEditor-root .style .token.string,html[data-theme=dark] .DraftEditor-root .token.entity,html[data-theme=dark] .DraftEditor-root .token.operator,html[data-theme=dark] .DraftEditor-root .token.url {
    color: #806e46;
    background: rgba(26,26,26,.5)
}

.DraftEditor-root .token.atrule,.DraftEditor-root .token.attr-value,.DraftEditor-root .token.keyword {
    color: #0084ff
}

html[data-theme=dark] .DraftEditor-root .token.atrule,html[data-theme=dark] .DraftEditor-root .token.attr-value,html[data-theme=dark] .DraftEditor-root .token.keyword {
    color: #3a76d0
}

.DraftEditor-root .token.function {
    color: #f36
}

html[data-theme=dark] .DraftEditor-root .token.function {
    color: #d92155
}

.DraftEditor-root .token.important,.DraftEditor-root .token.regex,.DraftEditor-root .token.variable,html[data-theme=dark] .DraftEditor-root .token.important,html[data-theme=dark] .DraftEditor-root .token.regex,html[data-theme=dark] .DraftEditor-root .token.variable {
    color: #ff9607
}

.DraftEditor-root .token.bold,.DraftEditor-root .token.important {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .DraftEditor-root .token.bold,html[data-ios] .DraftEditor-root .token.important {
    font-weight: 500
}

html[data-android] .DraftEditor-root .token.bold,html[data-android] .DraftEditor-root .token.important {
    font-weight: 700
}

.DraftEditor-root .token.italic {
    font-style: italic
}

.DraftEditor-root .token.entity {
    cursor: help
}

.CommentEditor .RichText {
    min-height: auto!important
}

.CommentEditor--normal {
    position: relative;
    transition: padding-right .3s ease
}

.CommentEditor--normal .CommentEditor-input {
    overflow: hidden;
    width: 100%
}

.CommentEditor--normal .Editable-unstyled {
    margin: 0!important
}

.CommentEditor--normal.CommentEditor--active {
    padding-right: 94px
}

.CommentEditor--normal.CommentEditor--active .CommentEditor-singleButton {
    -webkit-transform: scale(1);
    transform: scale(1)
}

.CommentEditor--inCommentItem .CommentEditor-actions {
    margin-top: 16px;
    text-align: right
}

.CommentEditor--inCommentItem .CommentEditor-actions .Button {
    line-height: 34px
}

.CommentEditor--inCommentItem .CommentEditor-actions .Button+.Button {
    margin-left: 20px
}

.CommentEditor-singleButton {
    position: absolute;
    right: 16px;
    bottom: 12px;
    line-height: 34px!important;
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,transform .3s ease;
    transition: opacity .3s ease,transform .3s ease,-webkit-transform .3s ease
}

.CommentEditor-singleButton:disabled {
    cursor: not-allowed
}

.CommentEditor-input {
    font-size: 15px
}

.CommentEditor-input .Editable {
    background: #f6f6f6
}

.CommentEditor-input .Editable--focus {
    background: #fff
}

html[data-theme=dark] .CommentEditor-input .Editable--focus {
    background: #1a1a1a
}

html[data-theme=dark] .CommentEditor-input .Editable {
    background: #2e2e2e
}

.CommentEditor-input .Dropzone {
    min-height: auto!important
}

.CommentEditor-input .DraftEditor-root {
    padding: 5px 12px!important
}

.CommentEditor-startCommentButton {
    width: 100%
}

.CommentEditor-hiddenInput {
    position: absolute;
    z-index: -1;
    top: -9999px
}

.CommentEditor-input--mobile {
    min-height: 208px
}

.CommentEditor-input--mobile,.CommentEditor-input--mobile.is-focus {
    border: none
}

.CommentEditor-input--mobile .Editable {
    background: #fff
}

html[data-theme=dark] .CommentEditor-input--mobile .Editable {
    background: #1a1a1a
}

.CommentEditor-modalButtons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 8px 20px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb
}

.CommentEditor-modalButtons .Button {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.CommentEditor-modalButtons .Button+.Button {
    margin-left: 16px
}

html[data-theme=dark] .CommentEditor-modalButtons {
    border-top: 1px solid #444;
    border-bottom: 1px solid #444
}

.SignInModal .MobileModal-title {
    padding-bottom: 0
}

.SignInModal-openInAppButton {
    margin-bottom: 16px;
    width: 100%;
    line-height: 44px;
    color: #fff;
    background-color: #0084ff
}

html[data-theme=dark] .SignInModal-openInAppButton {
    color: #1a1a1a;
    background-color: #3a76d0
}

.SignInModal-content {
    padding: 0 16px
}

.SignInModal-content button {
    height: 44px;
    width: 100%;
    font-size: 16px;
    border: 1px solid;
    border-radius: 3px
}

.SignInModal-content button:not(:last-child) {
    margin-bottom: 16px
}

.SignInModal-button-zhihu {
    background-color: #fff;
    border-color: #0084ff;
    color: #0084ff
}

html[data-theme=dark] .SignInModal-button-zhihu {
    background-color: #1a1a1a;
    border-color: #3a76d0;
    color: #3a76d0
}

.SignInModal-button-weibo {
    background-color: #f1403c;
    border-color: ##F1403C;
    color: #fff
}

html[data-theme=dark] .SignInModal-button-weibo {
    background-color: #b7302d;
    border-color: ##B7302D;
    color: #1a1a1a
}

.SignInModal-button-wechat {
    background-color: #bfbfbf;
    border-color: #bfbfbf;
    color: #fff
}

html[data-theme=dark] .SignInModal-button-wechat {
    background-color: #444;
    border-color: #444;
    color: #1a1a1a
}

.SignInModal-button-qq {
    background-color: #0084ff;
    border-color: #0084ff;
    color: #fff
}

html[data-theme=dark] .SignInModal-button-qq {
    background-color: #3a76d0;
    border-color: #3a76d0;
    color: #1a1a1a
}

.ReportMenu-inner {
    min-height: 192px;
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 1.75
}

.ReportMenu-mobile .ReportMenu-inner:not(.ReportMenu-options) {
    padding-top: 18px
}

.ReportMenu-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 12px 0;
    text-align: left;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;
    outline: none
}

html[data-theme=dark] .ReportMenu-item {
    border-bottom: 1px solid #2e2e2e
}

.ReportMenu-itemValue {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.ReportMenu-itemCheck {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0
}

.ReportMenu-itemCheck:checked+.ReportMenu-itemCheckIcon {
    opacity: 1
}

.ReportMenu-itemCheckIcon {
    fill: #0084ff;
    opacity: 0;
    transition: opacity .2s
}

html[data-theme=dark] .ReportMenu-itemCheckIcon {
    fill: #3a76d0
}

.ReportMenu-paragraph {
    white-space: pre-wrap;
    list-style: none
}

.ReportMenu-paragraph--light {
    margin-top: 1em;
    color: #8590a6
}

html[data-theme=dark] .ReportMenu-paragraph--light {
    color: #606a80
}

.ReportMenu-check {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.ReportMenu-textarea {
    width: 100%
}

.ReportMenu-link {
    color: #175199
}

.ReportMenu-link:hover {
    text-decoration: underline
}

html[data-theme=dark] .ReportMenu-link {
    color: #175199
}

.ReportMenu-link--light {
    text-decoration: underline
}

.ReportMenu-errorText {
    width: 100%;
    margin-top: 16px;
    color: #f1403c;
    font-size: 15px;
    text-align: right
}

html[data-theme=dark] .ReportMenu-errorText {
    color: #b7302d
}

.WalleModal-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 15px
}

.WalleModal-des {
    font-size: 15px;
    line-height: 1.4;
    color: #444
}

html[data-theme=dark] .WalleModal-des {
    color: gray
}

.WalleModal-img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 40px;
    margin-bottom: 15px
}

.WalleModal-open {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.WalleModal-content {
    width: 60%
}

.WalleModal-title {
    font-size: 16px;
    line-height: 1.2;
    color: #444
}

@media only screen and (min-device-width: 320px) {
    .WalleModal-title {
        font-size:15px
    }
}

html[data-theme=dark] .WalleModal-title {
    color: gray
}

.WalleModal-intro {
    font-size: 13px;
    line-height: 1.38;
    color: #646464;
    margin-top: 3px
}

html[data-theme=dark] .WalleModal-intro {
    color: #999
}

.WalleModal-btn {
    width: 92px;
    height: 32px
}

.NumberBoard {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.NumberBoard--divider .NumberBoard-item+.NumberBoard-item .NumberBoard-itemInner {
    border-left: 1px solid #ebebeb
}

html[data-theme=dark] .NumberBoard--divider .NumberBoard-item+.NumberBoard-item .NumberBoard-itemInner {
    border-left: 1px solid #444
}

.NumberBoard-item {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.NumberBoard-item.Button {
    border: 0;
    line-height: unset;
    font-size: unset
}

.NumberBoard-item.Button:hover {
    background: none
}

.NumberBoard-item.Button:hover .NumberBoard-itemName,.NumberBoard-item.Button:hover .NumberBoard-itemValue,.NumberBoard-itema:hover .NumberBoard-itemName,.NumberBoard-itema:hover .NumberBoard-itemValue,html[data-theme=dark] .NumberBoard-item.Button:hover .NumberBoard-itemName,html[data-theme=dark] .NumberBoard-item.Button:hover .NumberBoard-itemValue,html[data-theme=dark] .NumberBoard-itema:hover .NumberBoard-itemName,html[data-theme=dark] .NumberBoard-itema:hover .NumberBoard-itemValue {
    color: #175199
}

.NumberBoard-itemInner {
    text-align: center;
    line-height: 1.6
}

.NumberBoard-itemName {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .NumberBoard-itemName {
    color: #606a80
}

.NumberBoard-itemValue {
    display: inline-block;
    font-size: 18px;
    color: #1a1a1a;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .NumberBoard-itemValue {
    font-weight: 500
}

html[data-android] .NumberBoard-itemValue {
    font-weight: 700
}

html[data-theme=dark] .NumberBoard-itemValue {
    color: #999
}

.HoverCard-coverContainer {
    height: 100px;
    margin: 0 -12px;
    overflow: hidden;
    border-radius: 2px 2px 0 0
}

.HoverCard-cover {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

.HoverCard-subtitle,.HoverCard-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.HoverCard-title {
    font-size: 16px;
    font-weight: 500
}

.HoverCard-subtitle {
    margin-top: 4px;
    font-weight: 400
}

.HoverCard-titleContainer {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 8px 0;
    border-bottom: 1px solid #f6f6f6;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

html[data-theme=dark] .HoverCard-titleContainer {
    border-bottom: 1px solid #2e2e2e
}

.HoverCard-titleContainer--noAvatar {
    margin-top: 20px
}

.HoverCard-avatar {
    position: absolute;
    top: -20px;
    border: 2px solid #fff
}

html[data-theme=dark] .HoverCard-avatar {
    border: 2px solid #1a1a1a
}

.HoverCard-titleText {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 42px;
    padding-bottom: 2px;
    margin-left: 84px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.HoverCard-attrInfo {
    margin-left: 10px;
    color: #8590a6;
    white-space: nowrap
}

.HoverCard-attrInfo .Icon {
    margin-right: 8px
}

html[data-theme=dark] .HoverCard-attrInfo {
    color: #606a80
}

.HoverCard {
    padding: 0 12px 16px;
    font-size: 14px;
    opacity: 1;
    transition: opacity .3s ease
}

.HoverCard--isLoading {
    opacity: 0
}

.HoverCard,.HoverCard-loading {
    box-shadow: 0 5px 20px rgba(26,26,26,.1);
    background: #fff;
    border-radius: 2px
}

html[data-theme=dark] .HoverCard,html[data-theme=dark] .HoverCard-loading {
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    background: #1a1a1a
}

.HoverCard-container {
    width: 360px;
    max-height: 600px
}

.HoverCard-loading {
    position: absolute;
    width: 120px;
    height: 80px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: auto
}

.HoverCard-loading--reversed {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%)
}

.HoverCard-container--large {
    width: 400px
}

.HoverCard-numberBoard {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.HoverCard-buttons {
    margin-top: 16px
}

.HoverCard-buttons .Button {
    width: 144px
}

.HoverCard-numberGroup {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.HoverCard-boardKey {
    line-height: 1.7;
    color: #8590a6
}

html[data-theme=dark] .HoverCard-boardKey {
    color: #606a80
}

.HoverCard-boardNumber {
    margin-top: 4px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    color: #1a1a1a
}

html[data-theme=dark] .HoverCard-boardNumber {
    color: #999
}

.HoverCard-item {
    padding: 8px 0;
    line-height: 1.75;
    border-bottom: 1px solid #f6f6f6
}

.HoverCard-item:last-child {
    padding: 8px 16px;
    text-align: center;
    border: 0
}

.HoverCard-item .Icon {
    margin-right: 8px
}

html[data-theme=dark] .HoverCard-item {
    border-bottom: 1px solid #2e2e2e
}

.HoverCard-description {
    display: block;
    display: -webkit-box;
    max-height: 73.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical
}

.HoverCard-separate {
    color: #ebebeb
}

html[data-theme=dark] .HoverCard-separate {
    color: #444
}

.HoverCard-popoverTarget {
    border-width: 0;
    background: transparent;
    box-shadow: none
}

.FollowButton {
    min-width: 96px
}

.FollowButton-icon {
    margin-right: 8px;
    fill: currentColor
}

.ModifyButton {
    font-size: 15px
}

.ModifyButton-icon {
    margin-right: 4px;
    fill: currentColor
}

.Messages-menu {
    width: 360px;
    padding: 0;
    overflow: hidden
}

.Messages-newItem {
    background: #f6f6f6
}

html[data-theme=dark] .Messages-newItem {
    background: #2e2e2e
}

.Messages-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .Messages-header {
    border-bottom: 1px solid #444
}

.Messages-tab {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 48px;
    font-size: 14px;
    color: #8590a6;
    cursor: pointer
}

html[data-theme=dark] .Messages-tab {
    color: #606a80
}

.Messages-currentTab {
    color: #1a1a1a
}

.Messages-currentTab:hover {
    color: currentColor
}

html[data-theme=dark] .Messages-currentTab {
    color: #999
}

.Messages-myMessageTab {
    width: 360px;
    color: #1a1a1a
}

html[data-theme=dark] .Messages-myMessageTab {
    color: #999
}

.Messages-tab:not(:last-child):after {
    position: absolute;
    left: 180px;
    width: 1px;
    height: 20px;
    margin: auto;
    background: #ebebeb;
    content: ""
}

html[data-theme=dark] .Messages-tab:not(:last-child):after {
    background: #444
}

.Messages-list {
    height: 350px;
    overflow-x: hidden;
    overflow-y: auto
}

.Messages-withNoTabList {
    height: 408px
}

.Messages-item {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 15px;
    font-size: 14px;
    line-height: 24px;
    color: #1a1a1a
}

.Messages-item:hover {
    background-color: #f6f6f6
}

html[data-theme=dark] .Messages-item:hover {
    background-color: #2e2e2e
}

.Messages-item .Avatar {
    display: block
}

html[data-theme=dark] .Messages-item {
    color: #999
}

.Messages-user {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 16px;
    overflow: hidden
}

.Messages-userName {
    font-size: 15px
}

.Messages-itemContent {
    height: 20px;
    overflow: hidden;
    line-height: 20px;
    color: #8590a6;
    text-overflow: ellipsis;
    white-space: nowrap
}

html[data-theme=dark] .Messages-itemContent {
    color: #606a80
}

.Messages-newDialog {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 274px
}

.Messages-footer,.Messages-newDialog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Messages-footer {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 40px;
    padding: 0 16px;
    line-height: 40px;
    background: #fff;
    border-top: 1px solid #ebebeb;
    box-sizing: border-box
}

html[data-theme=dark] .Messages-footer {
    background: #1a1a1a;
    border-top: 1px solid #444
}

.Messages-receiver {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 8px
}

.Messages-receiver,.Messages-receiverInfo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 36px;
    line-height: 36px
}

.Messages-receiverInfo {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Messages-receiverInfo {
    font-weight: 500
}

html[data-android] .Messages-receiverInfo {
    font-weight: 700
}

.Messages-receiverAutoComplete {
    position: relative;
    margin-top: 8px
}

.Messages-records,html[data-theme=dark] .Messages-records {
    color: #175199
}

.Messages-sendContent {
    width: 352px;
    margin: 12px auto 0
}

.Messages-sendContent textarea {
    overflow-y: auto
}

.Messages-modifyButton {
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    fill: #8590a6
}

html[data-theme=dark] .Messages-modifyButton {
    fill: #606a80
}

.Messages-warning {
    height: 23px;
    margin: 4px auto 0;
    font-size: 14px;
    color: #f1403c;
    opacity: 0;
    transition: opacity .2s
}

.Messages-warning.is-shown {
    opacity: 1
}

html[data-theme=dark] .Messages-warning {
    color: #b7302d
}

.Messages-input {
    width: 352px
}

.Messages-icon {
    cursor: pointer
}

.Messages-count {
    position: absolute;
    bottom: 50%;
    left: 50%;
    padding: 0 4px;
    font-size: 11px;
    color: #fff;
    background-color: #f1403c;
    border: 2px solid #fff;
    border-radius: 20px
}

html[data-theme=dark] .Messages-count {
    color: #1a1a1a;
    background-color: #b7302d;
    border: 2px solid #1a1a1a
}

.Messages-menu {
    z-index: 205
}

.Messages-searchIcon {
    position: absolute;
    top: 50%;
    right: 10px;
    width: 16px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.MemberButtonGroup .Button+.Button {
    margin-left: 16px
}

.MemberButtonGroup-prohibitIcon {
    fill: currentColor;
    margin-right: 4px
}

.FollowStatus {
    display: inline-block;
    padding: 1px 6px;
    margin-left: 8px;
    font-size: 12px;
    color: #8590a6;
    vertical-align: 1px;
    background-color: #f6f6f6;
    border-radius: 3px
}

html[data-theme=dark] .FollowStatus {
    color: #606a80;
    background-color: #2e2e2e
}

.UserHoverCard-infoItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.UserHoverCard-infoItem:not(:last-child) {
    margin-bottom: 8px
}

.UserHoverCard-infoDivider {
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 8px;
    background: #ebebeb
}

html[data-theme=dark] .UserHoverCard-infoDivider {
    background: #444
}

.UserHoverCard-mutuals {
    color: #8590a6
}

html[data-theme=dark] .UserHoverCard-mutuals {
    color: #606a80
}

.UserHoverCard-orgBadge {
    margin-left: 6px;
    vertical-align: 2px
}

.UserLink-badge {
    margin-left: .3em
}

.GifPlayer {
    display: block;
    margin: 0 auto;
    overflow: hidden;
    max-width: 100%;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    cursor: pointer;
    text-align: center
}

.GifPlayer,html[data-theme=dark] .GifPlayer {
    position: relative
}

html[data-theme=dark] .GifPlayer:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    border-radius: inherit;
    pointer-events: none
}

.GifPlayer[data-size=small] {
    max-width: 40%
}

.GifPlayer img {
    max-width: 100%;
    vertical-align: top
}

.GifPlayer-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -30px;
    margin-top: -30px;
    pointer-events: none;
    transition: .3s ease-out;
    transition-property: opacity,-webkit-transform;
    transition-property: transform,opacity;
    transition-property: transform,opacity,-webkit-transform;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1
}

.GifPlayer.isPlaying .GifPlayer-icon {
    -webkit-transform: scale(.3);
    transform: scale(.3);
    opacity: 0
}

.RichText-video {
    margin: 16px 0
}

.CommentItem {
    position: relative;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 12px 20px 10px;
    font-size: 15px
}

.CommentItem:not(:first-child):after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    margin: 0 20px;
    border-bottom-style: solid;
    border-bottom-color: #f6f6f6;
    border-bottom-width: 1px;
    content: ""
}

@media (-webkit-min-device-pixel-ratio: 2),(min-resolution:192dpi) {
    .CommentItem:not(:first-child):after {
        border-bottom-width:.5px
    }
}

@media (-webkit-min-device-pixel-ratio: 3),(min-resolution:288dpi) {
    .CommentItem:not(:first-child):after {
        border-bottom-width:.33333px
    }
}

@media (-webkit-min-device-pixel-ratio: 4),(min-resolution:384dpi) {
    .CommentItem:not(:first-child):after {
        border-bottom-width:.25px
    }
}

html[data-theme=dark] .CommentItem:not(:first-child):after {
    border-bottom-color: #2e2e2e
}

.CommentItem-deletedContent {
    padding: 16px 0;
    font-size: 14px;
    color: #8590a6;
    text-align: center
}

html[data-theme=dark] .CommentItem-deletedContent {
    color: #606a80
}

.CommentItem-meta {
    position: relative;
    height: 27px;
    padding-right: 3px;
    padding-left: 1px;
    margin-bottom: 5px;
    line-height: 24px
}

.CommentItem-avatar {
    margin-right: 8px
}

.CommentItem-avatar .UserLink-avatar {
    vertical-align: top
}

.CommentItem-reply,.CommentItem-roleInfo {
    color: #8590a6
}

html[data-theme=dark] .CommentItem-reply,html[data-theme=dark] .CommentItem-roleInfo {
    color: #606a80
}

.CommentItem-reviewing {
    margin-left: 8px
}

.CommentItem-reply {
    margin-right: 8px;
    margin-left: 8px
}

.CommentItem-roleInfo {
    margin-right: -8px
}

.CommentItem-time {
    float: right;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .CommentItem-time {
    color: #606a80
}

.CommentItem-content {
    margin-bottom: 6px;
    line-height: 25px
}

.CommentItem-content p {
    margin: 0
}

.CommentItem-editor {
    margin-bottom: 8px
}

.CommentItem-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 24px;
    font-size: 14px;
    line-height: 24px
}

.CommentItem-footer .Button+.Button {
    margin-left: 20px
}

.CommentItem-mobileFooter .Button+.Button {
    margin-left: 0
}

.CommentItem-hoverBtn {
    opacity: 0;
    transition: opacity .2s
}

.CommentItem:hover .CommentItem-hoverBtn {
    opacity: 1
}

.CommentItem-walleTag {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-size: 14px;
    color: #8590a6;
    margin-left: 16px;
    margin-right: 16px
}

html[data-theme=dark] .CommentItem-walleTag {
    color: #606a80
}

.CommentItem-walleIcon {
    margin-right: 4px
}

.CommentItem-likeBtn:disabled {
    opacity: 1
}

.CommentItem-likeBtn.is-liked {
    color: #0084ff
}

.CommentItem-likeBtn.is-liked:hover {
    color: #175199
}

.CommentItem-likeBtn.is-liked:hover .Icon {
    fill: currentColor
}

html[data-theme=dark] .CommentItem-likeBtn.is-liked:hover {
    color: #175199
}

.CommentItem-likeBtn.is-liked .Icon {
    fill: currentColor
}

html[data-theme=dark] .CommentItem-likeBtn.is-liked {
    color: #3a76d0
}

.CommentItem--highlighted {
    -webkit-animation: highlight 1.6s ease-out;
    animation: highlight 1.6s ease-out
}

@-webkit-keyframes highlight {
    0% {
        background: #ebebeb
    }

    html[data-theme=dark] 0% {
        background: #444
    }

    to {
        background: transparent none repeat 0 0/auto auto padding-box border-box scroll;
        background: initial
    }
}

@keyframes highlight {
    0% {
        background: #ebebeb
    }

    html[data-theme=dark] 0% {
        background: #444
    }

    to {
        background: transparent none repeat 0 0/auto auto padding-box border-box scroll;
        background: initial
    }
}

.IsolationDot {
    margin: 0 6px
}

.CommentItem-replyArrow {
    color: #8590a6;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    margin: 0 8px
}

html[data-theme=dark] .CommentItem-replyArrow {
    color: #606a80
}

.CommentItem-userLink {
    max-width: 80px;
    font-weight: 600;
    font-synthesis: style;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: top
}

@media (min-width: 360px) {
    .CommentItem-userLink {
        max-width:100px
    }
}

html[data-ios] .CommentItem-userLink {
    font-weight: 500
}

html[data-android] .CommentItem-userLink {
    font-weight: 700
}

.CommentItem-menu-item {
    padding-top: 13px;
    padding-bottom: 13px
}

.Comments-pattern-loading {
    height: 96px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.Tabs {
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .Tabs {
    border-bottom: 1px solid #2e2e2e
}

.Tabs-item {
    display: inline-block;
    padding: 0 20px
}

.Tabs-link {
    position: relative;
    display: inline-block;
    padding: 14px 0;
    font-size: 16px;
    line-height: 22px;
    color: #1a1a1a;
    text-align: center
}

.Tabs-link.is-active {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Tabs-link.is-active {
    font-weight: 500
}

html[data-android] .Tabs-link.is-active {
    font-weight: 700
}

.Tabs-link.is-active:after {
    position: absolute;
    right: 0;
    bottom: -1px;
    left: 0;
    height: 3px;
    background: #0084ff;
    content: ""
}

html[data-theme=dark] .Tabs-link.is-active:after {
    background: #3a76d0
}

html[data-theme=dark] .Tabs-link {
    color: #999
}

.Tabs-meta {
    margin-left: 6px;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #999
}

html[data-theme=dark] .Tabs-meta {
    color: #646464
}

.Topbar {
    background: #fff;
    border-bottom: 1px solid #f6f6f6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px;
    padding: 0 20px
}

html[data-theme=dark] .Topbar {
    background: #1a1a1a;
    border-bottom: 1px solid #2e2e2e
}

.Topbar-title {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.Topbar--mobile .Topbar-title {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Topbar--mobile .Topbar-title {
    font-weight: 500
}

html[data-android] .Topbar--mobile .Topbar-title {
    font-weight: 700
}

.CommentTopbar-title {
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    font-synthesis: style;
    color: #1a1a1a
}

html[data-ios] .CommentTopbar-title {
    font-weight: 500
}

html[data-android] .CommentTopbar-title {
    font-weight: 700
}

html[data-theme=dark] .CommentTopbar-title {
    color: #999
}

.CommentTopbar-back {
    font-size: 16px;
    font-weight: inherit;
    color: #1a1a1a
}

.CommentTopbar-back:hover {
    color: #0084ff
}

html[data-theme=dark] .CommentTopbar-back:hover {
    color: #3a76d0
}

html[data-theme=dark] .CommentTopbar-back {
    color: #999
}

.CommentTopbar-backIcon {
    vertical-align: -2px;
    fill: currentColor
}

.CommentTopbar {
    border-radius: 2px
}

.CommentTopbar-meta {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 50px;
    padding: 0 16px
}

.CommentTopbar-meta,.CommentTopbar-tabsWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.CommentTopbar-tabsWrapper {
    font-size: 15px
}

.CommentTopbar-tabs {
    padding: 0;
    border-bottom: none
}

.CommentTopbar-tab {
    display: inline-block;
    padding: 0 20px
}

.CommentTopbar-tab:first-child {
    padding-left: 0
}

.CommentTopbar-tabButton {
    position: relative;
    height: 56px;
    border: none
}

.CommentTopbar-tabButton:hover {
    background: none
}

.Comments,.Comments-container {
    height: 100%
}

.Comments {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box
}

.Comments--hidden {
    display: none
}

.Comments-titleLink a {
    color: #175199
}

.Comments-titleLink a:hover,html[data-theme=dark] .Comments-titleLink a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .Comments-titleLink a {
    color: #175199
}

.CommentList {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto
}

.CommentList-divider {
    position: relative;
    margin: 0 24px;
    font-size: 14px;
    color: #8590a6;
    text-align: center
}

.CommentList-divider:first-child {
    margin-top: 16px
}

.CommentList-divider:last-child {
    margin-bottom: 16px
}

.CommentList-divider+.CommentItem:after {
    content: none
}

.CommentList-divider a {
    color: #175199
}

.CommentList-divider a:hover,html[data-theme=dark] .CommentList-divider a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .CommentList-divider a {
    color: #175199
}

html[data-theme=dark] .CommentList-divider {
    color: #606a80
}

.CommentList-dividerLine {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 0;
    margin: auto;
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .CommentList-dividerLine {
    border-top: 1px solid #444
}

.CommentList-dividerText {
    position: relative;
    z-index: 2;
    display: inline-block;
    padding: 0 1em;
    background-color: #fff
}

.CommentList-dividerText .CommentList-questionMark {
    margin-left: 8px
}

html[data-theme=dark] .CommentList-dividerText {
    background-color: #1a1a1a
}

.Comments-footer {
    padding: 12px 20px;
    background: #fff;
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .Comments-footer {
    background: #1a1a1a;
    border-top: 1px solid #444
}

.Comments-disabledText {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 14px 12px;
    color: #8590a6;
    background-color: #f6f6f6;
    border-top: 1px solid #f6f6f6;
    box-sizing: border-box;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

html[data-theme=dark] .Comments-disabledText {
    color: #606a80;
    background-color: #2e2e2e;
    border-top: 1px solid #2e2e2e
}

.Comments-disabledText--fixed {
    position: fixed;
    width: 100%;
    bottom: 0;
    background: #fff
}

.Comments-disabledText--fixed .Comments-disabledReason {
    padding-top: 8px;
    padding-bottom: 8px;
    background: #f6f6f6;
    width: 100%;
    text-align: center;
    border-radius: 3px
}

html[data-theme=dark] .Comments-disabledText--fixed .Comments-disabledReason {
    background: #2e2e2e
}

html[data-theme=dark] .Comments-disabledText--fixed {
    background: #1a1a1a
}

.CommentList-action {
    position: relative;
    padding: 16px 0;
    text-align: center
}

.CommentList-action:after {
    position: absolute;
    top: 0;
    display: block;
    width: calc(100% - 48px);
    border-bottom: 1px solid #f6f6f6;
    content: ""
}

html[data-theme=dark] .CommentList-action:after {
    border-bottom: 1px solid #2e2e2e
}

.CommentList-action a {
    color: #175199
}

.CommentList-action a:hover,html[data-theme=dark] .CommentList-action a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .CommentList-action a {
    color: #175199
}

.Comments-withPagination {
    border: 1px solid #ebebeb;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background: #fff;
    margin-top: 12px;
    overflow: visible;
    border-radius: 4px
}

html[data-theme=dark] .Comments-withPagination {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.Comments-withPagination .CommentList {
    overflow-y: visible
}

html[data-theme=dark] .Comments-withPagination {
    border: 1px solid #444;
    background: #1a1a1a
}

.comments-pagination {
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .comments-pagination {
    border-top: 1px solid #444
}

.Comments-Packup-Button {
    background: hsla(0,0%,92%,.95);
    border-radius: 3px;
    position: fixed;
    height: 30px;
    width: 93px;
    bottom: 30px;
    left: 570px;
    font-size: 13px;
    color: #8590a6;
    letter-spacing: 0;
    margin-left: -93px
}

.Comments-Packup-Button:hover,html[data-theme=dark] .Comments-Packup-Button:hover {
    color: gray
}

.Comments-Packup-Button .Icon {
    margin-left: 6px;
    -webkit-transform: rotateX(180deg);
    transform: rotateX(180deg)
}

.Comments-Packup-Button-enter,.Comments-Packup-Button-leave {
    transition: opacity .3s
}

.Comments-Packup-Button-enter {
    opacity: 0
}

.Comments-Packup-Button-enter-active,.Comments-Packup-Button-leave {
    opacity: 1
}

.Comments-Packup-Button-leave-active {
    opacity: 0
}

html[data-theme=dark] .Comments-Packup-Button {
    background: rgba(68,68,68,.95);
    color: #606a80
}

.Comments-empty {
    padding: 60px 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    box-sizing: border-box;
    overflow: auto
}

.CommentList-expendCollapseButton {
    color: #8590a6;
    cursor: pointer
}

.CommentList-expendCollapseButton:hover,html[data-theme=dark] .CommentList-expendCollapseButton:hover {
    color: gray
}

html[data-theme=dark] .CommentList-expendCollapseButton {
    color: #606a80
}

.CommentItem {
    outline: none
}

.AuthorInfo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.AuthorInfo-avatar {
    vertical-align: top
}

.AuthorInfo-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 14px;
    overflow: hidden
}

.AuthorInfo-head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 15px;
    line-height: 1.1;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.AuthorInfo-name {
    font-weight: 600;
    font-synthesis: style;
    color: #444
}

html[data-ios] .AuthorInfo-name {
    font-weight: 500
}

html[data-android] .AuthorInfo-name {
    font-weight: 700
}

html[data-theme=dark] .AuthorInfo-name {
    color: gray
}

.AuthorInfo-badge {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 2px;
    font-size: 14px
}

.AuthorInfo-badgeText {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #646464
}

html[data-theme=dark] .AuthorInfo-badgeText {
    color: #999
}

.AuthorInfo--plain .AuthorInfo-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 10px
}

.AuthorInfo--plain .AuthorInfo-badge>:first-child {
    margin-top: 0
}

.AuthorInfo--plain .AuthorInfo-badge>:first-child:before {
    content: "\FF0C"
}

.AuthorInfo-detail {
    overflow: hidden
}

.PushNotifications-menu {
    width: 360px;
    padding: 0;
    overflow: hidden
}

.PushNotifications-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .PushNotifications-header {
    border-bottom: 1px solid #444
}

.PushNotifications-tab {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 48px;
    cursor: pointer;
    box-shadow: none!important
}

.PushNotifications-selectedTabIcon {
    fill: #0084ff
}

html[data-theme=dark] .PushNotifications-selectedTabIcon {
    fill: #3a76d0
}

.PushNotifications-tab:not(:last-child):after {
    position: absolute;
    left: 120px;
    width: 1px;
    height: 20px;
    margin: auto;
    background: #ebebeb;
    content: ""
}

html[data-theme=dark] .PushNotifications-tab:not(:last-child):after {
    background: #444
}

.PushNotifications-list {
    height: 350px;
    overflow-x: hidden;
    overflow-y: auto
}

.PushNotifications-item {
    position: relative;
    padding: 15px;
    font-size: 14px;
    line-height: 24px;
    color: #1a1a1a
}

html[data-theme=dark] .PushNotifications-item {
    color: #999
}

.PushNotifications-item a {
    color: #175199
}

.PushNotifications-item a:hover,html[data-theme=dark] .PushNotifications-item a:hover {
    color: #144785
}

html[data-theme=dark] .PushNotifications-item a {
    color: #175199
}

.PushNotifications-item:after {
    position: absolute;
    right: 0;
    bottom: 100%;
    left: 0;
    height: 1px;
    padding: 0 16px;
    background-color: #ebebeb;
    content: "";
    background-clip: content-box
}

html[data-theme=dark] .PushNotifications-item:after {
    background-color: #444
}

.PushNotifications-newItem {
    background: #f6f6f6
}

html[data-theme=dark] .PushNotifications-newItem {
    background: #2e2e2e
}

.PushNotifications-followTitle {
    position: relative;
    height: 54px;
    font-size: 14px;
    line-height: 54px;
    color: #8590a6;
    text-align: center
}

html[data-theme=dark] .PushNotifications-followTitle {
    color: #606a80
}

.PushNotifications-followTitle:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 16px;
    border-bottom: 1px solid #ebebeb;
    content: ""
}

html[data-theme=dark] .PushNotifications-followTitle:after {
    border-bottom: 1px solid #444
}

.PushNotifications-followItem {
    display: block
}

.PushNotifications-followItem:hover {
    background-color: #f6f6f6
}

html[data-theme=dark] .PushNotifications-followItem:hover {
    background-color: #2e2e2e
}

.PushNotifications-followItem .AuthorInfo-name {
    font-family: inherit
}

.PushNotifications-followItem .AuthorInfo-badge {
    color: #8590a6
}

html[data-theme=dark] .PushNotifications-followItem .AuthorInfo-badge {
    color: #606a80
}

.PushNotifications-followItem:after {
    content: none
}

.PushNotifications-followItem a {
    color: #1a1a1a
}

html[data-theme=dark] .PushNotifications-followItem a {
    color: #999
}

.Notifications-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    padding: 0 16px;
    line-height: 40px;
    background: #fff;
    border-top: 1px solid #ebebeb;
    box-sizing: border-box
}

html[data-theme=dark] .Notifications-footer {
    background: #1a1a1a;
    border-top: 1px solid #444
}

.PushNotifications-redbot {
    position: absolute;
    top: 50%;
    width: 4px;
    height: 4px;
    margin-left: 8px;
    background-color: #f1403c;
    border-radius: 50%;
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px)
}

html[data-theme=dark] .PushNotifications-redbot {
    background-color: #b7302d
}

.PushNotifications-count {
    position: absolute;
    bottom: 50%;
    left: 50%;
    padding: 0 4px;
    font-size: 11px;
    color: #fff;
    background-color: #f1403c;
    border: 2px solid #fff;
    border-radius: 20px
}

html[data-theme=dark] .PushNotifications-count {
    color: #ebebeb;
    background-color: #b7302d;
    border: 2px solid #1a1a1a
}

.PushNotifications-actor:not(:last-child):after {
    content: "\\3001";
    color: #0084ff
}

html[data-theme=dark] .PushNotifications-actor:not(:last-child):after {
    color: #3a76d0
}

.Tag {
    position: relative;
    display: inline-block;
    height: 30px;
    padding: 0 12px;
    font-size: 14px;
    line-height: 30px;
    color: #0084ff;
    vertical-align: top;
    border-radius: 100px;
    background: rgba(0,132,255,.1)
}

.Tag:hover {
    background-color: rgba(0,132,255,.15)
}

html[data-theme=dark] .Tag:hover {
    background-color: rgba(58,118,208,.15)
}

.Tag--removable {
    padding-right: 28px
}

html[data-theme=dark] .Tag {
    color: #3a76d0;
    background: rgba(58,118,208,.1)
}

.Tag-remove {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    padding: 0;
    background: none;
    border: none;
    outline: none;
    color: inherit
}

.Tag-remove .Zi {
    display: block
}

.TagInput .Input-wrapper {
    display: block
}

.TagInput .Input {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    height: 30px;
    margin-top: 2px;
    margin-bottom: 2px;
    margin-left: 8px
}

.TagInput.TagInput--empty .Input {
    width: 100%;
    margin-left: 0
}

.TagInput .Tag {
    margin-top: 2px;
    margin-right: 4px;
    margin-bottom: 2px
}

.TagInput .Popover {
    display: block
}

input[type=range].RangeInput {
    width: 220px;
    height: 12px;
    padding: 0;
    margin: 0 10px;
    vertical-align: middle;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

input[type=range].RangeInput:focus {
    outline: none
}

input[type=range].RangeInput::-webkit-slider-runnable-track {
    height: 5px;
    cursor: pointer;
    background: #f6f6f6;
    border-radius: 2px
}

html[data-theme=dark] input[type=range].RangeInput::-webkit-slider-runnable-track {
    background: #2e2e2e
}

input[type=range].RangeInput::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    margin-top: -4px;
    cursor: pointer;
    background: #d3d3d3;
    border-radius: 50%;
    -webkit-appearance: none;
    appearance: none
}

html[data-theme=dark] input[type=range].RangeInput::-webkit-slider-thumb {
    background: #2e2e2e
}

input[type=range].RangeInput::-moz-range-track {
    height: 5px;
    cursor: pointer;
    background: #f6f6f6;
    border-radius: 2px
}

html[data-theme=dark] input[type=range].RangeInput::-moz-range-track {
    background: #2e2e2e
}

input[type=range].RangeInput::-moz-range-thumb {
    width: 12px;
    height: 12px;
    cursor: pointer;
    background: #d3d3d3;
    border: none;
    border-radius: 50%
}

html[data-theme=dark] input[type=range].RangeInput::-moz-range-thumb {
    background: #2e2e2e
}

input[type=range].RangeInput::-ms-track {
    width: 100%;
    height: 5px;
    color: transparent;
    cursor: pointer;
    background: transparent;
    border-color: transparent
}

input[type=range].RangeInput::-ms-fill-lower,input[type=range].RangeInput::-ms-fill-upper {
    background: #f6f6f6;
    border-radius: 2px
}

html[data-theme=dark] input[type=range].RangeInput::-ms-fill-lower,html[data-theme=dark] input[type=range].RangeInput::-ms-fill-upper {
    background: #2e2e2e
}

input[type=range].RangeInput::-ms-thumb {
    width: 12px;
    height: 12px;
    cursor: pointer;
    background: #d3d3d3;
    border: none;
    border-radius: 50%
}

html[data-theme=dark] input[type=range].RangeInput::-ms-thumb {
    background: #2e2e2e
}

input[type=range].RangeInput::-ms-tooltip {
    display: none
}

input[type=range].RangeInput .Zi {
    vertical-align: middle;
    display: inline-block;
    fill: #8590a6
}

html[data-theme=dark] input[type=range].RangeInput .Zi {
    fill: #606a80
}

.Mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    transition: opacity .2s ease-in
}

.Mask-hidden {
    pointer-events: none;
    opacity: 0
}

.Mask-mask {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: .4;
    box-sizing: border-box
}

.Mask-mask--black {
    background: #1a1a1a
}

html[data-theme=dark] .Mask-mask--black {
    background: #999
}

.Mask-mask--white {
    background: hsla(0,0%,100%,.95)
}

html[data-theme=dark] .Mask-mask--white {
    background: rgba(26,26,26,.95)
}

.Mask-content {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    color: #fff;
    text-align: center;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

html[data-theme=dark] .Mask-content {
    color: #1a1a1a
}

.Mask-content--full {
    width: 100%;
    height: 100%
}

.VideoCoverEditor-Modal .Modal-inner {
    width: 400px;
    height: 480px;
    overflow: hidden
}

.VideoCoverEditor-title {
    font-size: 20px;
    font-weight: 500;
    color: #1a1a1a
}

html[data-theme=dark] .VideoCoverEditor-title {
    color: #999
}

.VideoCoverEditor-tabs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: calc(100% - 80px);
    margin: 0 auto
}

.VideoCoverEditor-tabItem {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-weight: 500;
    font-size: 20px;
    color: #444;
    cursor: pointer
}

.VideoCoverEditor-tabItem:not(:last-child):after {
    content: " |";
    float: right;
    font-weight: 100;
    color: #ebebeb
}

html[data-theme=dark] .VideoCoverEditor-tabItem:not(:last-child):after {
    color: #444
}

html[data-theme=dark] .VideoCoverEditor-tabItem {
    color: gray
}

.VideoCoverEditor-tabItem.active {
    color: #0084ff
}

html[data-theme=dark] .VideoCoverEditor-tabItem.active {
    color: #3a76d0
}

.VideoCoverPicker-coverSelect {
    text-align: center
}

.VideoCoverPicker-coverList {
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-top: 36px
}

.VideoCoverPicker-coverItem {
    position: relative;
    width: 112px;
    height: 63.5px;
    margin: 0 8px 8px 0;
    box-sizing: border-box;
    background: rgba(26,26,26,.03);
    cursor: pointer;
    border: 3px solid #fff
}

.VideoCoverPicker-coverItem.actived {
    border-color: #0084ff
}

html[data-theme=dark] .VideoCoverPicker-coverItem.actived {
    border-color: #3a76d0
}

html[data-theme=dark] .VideoCoverPicker-coverItem {
    background: hsla(0,0%,60%,.03);
    border: 3px solid #1a1a1a
}

.VideoCoverPicker-coverItem img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

.VideoCoverPicker-coverItem:nth-child(3n+0) {
    margin-right: 0
}

.VideoCoverPicker-coverSelect .BounceLoading {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-120%);
    transform: translate(-50%,-120%)
}

.VideoCoverPicker-coverSelectBtn {
    width: 220px;
    height: 34px;
    margin: 62px auto 0
}

.VideoCoverPicker-coverSelectBtn.disabled {
    opacity: .5
}

.VideoCoverFileInput {
    margin-top: 40px
}

.VideoCoverFileInput-uploader {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-sizing: border-box;
    height: 220px;
    border: 2px dashed #ebebeb;
    border-radius: 10px;
    cursor: pointer
}

.VideoCoverFileInput-uploader:hover {
    border-color: #8590a6
}

.VideoCoverFileInput-uploader:hover .Zi {
    fill: #999
}

html[data-theme=dark] .VideoCoverFileInput-uploader:hover .Zi {
    fill: #646464
}

html[data-theme=dark] .VideoCoverFileInput-uploader:hover {
    border-color: #606a80
}

.VideoCoverFileInput-uploader input {
    display: none
}

html[data-theme=dark] .VideoCoverFileInput-uploader {
    border: 2px dashed #444
}

.VideoCoverFileInput-uploader-icon {
    text-align: center;
    display: block
}

.VideoCoverFileInput-uploader-icon .Zi {
    vertical-align: middle;
    fill: #ebebeb
}

html[data-theme=dark] .VideoCoverFileInput-uploader-icon .Zi {
    fill: #444
}

.VideoCoverFileInput-uplaodImg .Zi {
    fill: #999
}

html[data-theme=dark] .VideoCoverFileInput-uplaodImg .Zi {
    fill: #646464
}

.VideoCoverFileInput-uploader-text {
    margin-top: 10px;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #444
}

html[data-theme=dark] .VideoCoverFileInput-uploader-text {
    color: gray
}

.VideoCoverFileInput-uploader-tip {
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #999
}

html[data-theme=dark] .VideoCoverFileInput-uploader-tip {
    color: #646464
}

.VideoCoverCrop-range {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin: 22px auto 30px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.VideoCoverCrop .RangeInput {
    margin-top: 4px
}

.VideoCoverCrop-uplaodImgFooter {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.VideoCoverCrop-uplaodImgFooter button {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.VideoCoverCrop-uplaodImgFooter button:not(:last-child) {
    margin-right: 20px
}

.VideoCoverPickerPending {
    margin-top: 100px;
    text-align: center
}

.VideoCoverPickerPending p {
    line-height: 1.78;
    font-size: 18px;
    color: #999
}

html[data-theme=dark] .VideoCoverPickerPending p {
    color: #646464
}

.VideoCoverPickerPending-nowUpdate {
    margin-top: 135px
}

.VideoCoverPicker-coverItem .Mask-mask {
    opacity: .03
}

.QuestionAsk-title {
    font-size: 15px
}

.QuestionAsk-section {
    margin-bottom: 12px
}

.QuestionAsk-section.QuestionAsk-DetailSection {
    margin-top: 24px
}

.QuestionAsk-section .Popover {
    display: block
}

.QuestionAsk-section .TagInput {
    line-height: 0
}

.QuestionAsk-sectionHeader {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 13px;
    margin-bottom: 8px;
    color: #8590a6
}

html[data-theme=dark] .QuestionAsk-sectionHeader {
    color: #606a80
}

.QuestionAsk-label {
    color: #444
}

html[data-theme=dark] .QuestionAsk-label {
    color: gray
}

.QuestionAsk-sectionHeaderRight {
    margin-left: auto
}

.QuestionAsk-sectionHeaderRight .Editable-control:last-child {
    margin-right: 13px
}

.QuestionAsk-warning,html[data-theme=dark] .QuestionAsk-warning {
    color: #ff9607
}

.QuestionAsk-Modal {
    width: 595px
}

.QuestionAsk-error,.QuestionAsk-Modal .Modal-footer {
    color: #f1403c
}

html[data-theme=dark] .QuestionAsk-error,html[data-theme=dark] .QuestionAsk-Modal .Modal-footer {
    color: #b7302d
}

.QuestionAsk-questionItems {
    line-height: 26px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-sizing: border-box
}

html[data-theme=dark] .QuestionAsk-questionItems {
    border: 1px solid #444
}

.QuestionAsk-questionItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 8px 0;
    margin-left: -8px;
    margin-right: -8px
}

.QuestionAsk-questionItem.QuestionAsk-questionItemClose {
    color: #8590a6;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .QuestionAsk-questionItem.QuestionAsk-questionItemClose {
    color: #606a80;
    border-bottom: 1px solid #444
}

.QuestionAsk-questionTitle {
    margin-right: 14px
}

.QuestionAsk-questionAnswerCount {
    margin-left: auto;
    color: #8590a6;
    white-space: nowrap
}

html[data-theme=dark] .QuestionAsk-questionAnswerCount {
    color: #606a80
}

.QuestionAsk-anonymous {
    color: #8590a6;
    cursor: pointer
}

html[data-theme=dark] .QuestionAsk-anonymous {
    color: #606a80
}

.QuestionAsk-anonymousCheckbox {
    margin-right: 8px;
    vertical-align: text-top
}

.QuestionEdit-reasonSelect {
    margin-right: 8px
}

.QuestionEdit-why {
    color: #175199
}

.QuestionEdit-why:hover,html[data-theme=dark] .QuestionEdit-why:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .QuestionEdit-why {
    color: #175199
}

.QuestionAsk-orgQuestionIcon {
    margin-left: 8px
}

.QuestionAsk-brandSelector {
    width: 100%
}

.QuestionAsk-brandSelector .Select-button {
    position: relative;
    padding: 0 12px;
    width: 100%
}

.QuestionAsk-brandSelector .Select-arrow {
    position: absolute;
    top: 12px;
    right: 12px
}

.QuestionAsk-brandSelector .Icon {
    margin-left: 5px
}

.QuestionAsk-brandSelector--no-arrow .Select-arrow {
    display: none
}

.QuestionAsk-brandOption {
    padding: 0 12px;
    width: 488px
}

.QuestionAsk-brandOption .Icon {
    margin-left: 5px
}

.QuestionAsk-buttonGroup {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 28px
}

.QuestionAsk-buttonGroup .Button {
    width: 232px;
    margin-top: 28px
}

.QuestionAsk-buttonGroup .Button+.Button {
    margin-left: 24px
}

.QuestionAsk-noBrandModal {
    text-align: center
}

.QuestionAsk-link {
    color: #0084ff
}

html[data-theme=dark] .QuestionAsk-link {
    color: #3a76d0
}

.QuestionAsk-onUploadModal,.QuestionAsk-videoAlert,.QuestionEdit-onUploadModal,.QuestionEdit-videoAlert {
    margin: 50px 16px 0;
    font-size: 20px;
    text-align: center;
    color: #444
}

html[data-theme=dark] .QuestionAsk-onUploadModal,html[data-theme=dark] .QuestionAsk-videoAlert,html[data-theme=dark] .QuestionEdit-onUploadModal,html[data-theme=dark] .QuestionEdit-videoAlert {
    color: gray
}

.QuestionEdit-reason {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    line-height: 48px;
    box-shadow: inset 0 -1px 0 0 #f6f6f6
}

.QuestionEdit-reason:last-child {
    margin-bottom: 16px
}

.QuestionEdit-reason svg {
    fill: #8590a6
}

html[data-theme=dark] .QuestionEdit-reason svg {
    fill: #606a80
}

html[data-theme=dark] .QuestionEdit-reason {
    box-shadow: inset 0 -1px 0 0 #2e2e2e
}

.QuestionAsk-Modal .Editable-videoUploader-uploadPosterButton {
    bottom: -90px
}

.QuestionCategorySelect {
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column
}

.QuestionCategory,.QuestionCategorySelect {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal
}

.QuestionCategory {
    -webkit-box-orient: horizontal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 15px;
    padding-top: 26px
}

.QuestionCategory:hover {
    cursor: pointer
}

.QuestionCategory+.QuestionCategory {
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .QuestionCategory+.QuestionCategory {
    border-top: 1px solid #444
}

.QuestionCategory-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 320px
}

.QuestionCategory-title {
    font-size: 17px;
    color: #1a1a1a
}

html[data-theme=dark] .QuestionCategory-title {
    color: #999
}

.QuestionCategory-desc {
    margin-top: 10px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .QuestionCategory-desc {
    color: #606a80
}

.QuestionCategory-link,html[data-theme=dark] .QuestionCategory-link {
    color: #175199
}

.QuestionCategory-arrow {
    margin-left: 22px;
    color: #bfbfbf;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

html[data-theme=dark] .QuestionCategory-arrow {
    color: gray
}

.QuestionCategory-buttonGroup {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 48px
}

.QuestionCategory-buttonGroup .Button {
    width: 168px
}

.QuestionAsk-error {
    color: #f1403c
}

html[data-theme=dark] .QuestionAsk-error {
    color: #b7302d
}

.SearchBar-topSearchItem {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 14px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 4px 0;
    height: 32px;
    box-sizing: border-box;
    margin: 2px 0
}

.SearchBar-hotIcon {
    margin-left: 5px
}

.SearchBar-historyItem {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: 14px;
    padding: 6px 0;
    line-height: 24px
}

.SearchBar-historyItem,.SearchBar-historyItemContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.SearchBar-historyItemContent.blueFont,html[data-theme=dark] .SearchBar-historyItemContent.blueFont {
    color: #175199
}

.SearchBar-historyLabel {
    padding: 7px 0;
    margin-right: 16px;
    margin-left: 16px;
    font-size: 14px;
    color: #8590a6;
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

html[data-theme=dark] .SearchBar-historyLabel {
    color: #606a80;
    border-bottom: 1px solid #444
}

.SearchBar-historyIconWrapper {
    position: relative
}

.SearchBar-historyIconWrapper svg {
    fill: #8590a6
}

html[data-theme=dark] .SearchBar-historyIconWrapper svg {
    fill: #606a80
}

.SearchBar-historyIconWrapper:hover,html[data-theme=dark] .SearchBar-historyIconWrapper:hover {
    color: #175199
}

.SearchBar-historyIconWrapper:hover svg,html[data-theme=dark] .SearchBar-historyIconWrapper:hover svg {
    fill: #175199
}

.SearchBar-historyIconShade {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer
}

.SearchBar-historyLabelDeleteAll {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.SearchBar-historyDelete {
    display: none
}

.SearchBar-historyItem:hover .SearchBar-historyDelete {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.SearchBar-historyDeleteAll {
    cursor: pointer
}

.TagInputAlias .Tag {
    margin: 0 8px 8px 0
}

.TopicInputAlias-autocomplete {
    display: inline-block
}

.TopicInputAlias-autocomplete .Popover {
    vertical-align: top
}

.TopicInputAlias-input {
    border-radius: 20px;
    padding: 4px 18px
}

.TopicInputAlias-input.is-focus {
    border-color: #0084ff
}

html[data-theme=dark] .TopicInputAlias-input.is-focus {
    border-color: #3a76d0
}

.TopicInputAlias-placeholderButton {
    background: none!important;
    color: #0084ff!important;
    line-height: 30px
}

html[data-theme=dark] .TopicInputAlias-placeholderButton {
    color: #3a76d0!important
}

.TopicInputAlias-suggestionContainer {
    max-height: 214px;
    overflow: scroll
}

.AskTopics-input {
    border-radius: 20px;
    border-color: #0084ff;
    color: #0084ff;
    height: 30px;
    padding: 2px 18px
}

html[data-theme=dark] .AskTopics-input {
    border-color: #3a76d0;
    color: #3a76d0
}

.AskTitle {
    position: relative;
    font-size: 18px
}

.AskTitle .Popover {
    display: block
}

.AskTitle-text {
    position: absolute;
    z-index: -100;
    opacity: 0;
    width: 100%;
    line-height: 1.34;
    white-space: pre-wrap;
    word-wrap: break-word
}

.AskTitle-input {
    max-height: 48px;
    overflow: scroll;
    font-size: 18px;
    padding: 0!important;
    border: none
}

.AskTitle-input.is-focus {
    border: none;
    line-height: 1.34
}

.AskTitle-input .Input:not(input) {
    line-height: 1.34
}

.AskTitle-suggestionClose {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 8px 12px;
    color: #8590a6
}

html[data-theme=dark] .AskTitle-suggestionClose {
    color: #606a80
}

.AskTitle-suggestionPopover {
    margin-top: 25px
}

.AskTitle-suggestionContainer {
    width: 432px;
    max-height: 164px;
    overflow: auto
}

.AskTitle-suggestionItem .Menu-item {
    padding: 8px 12px
}

.AskTitle-suggestionItemLink {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.AskTitle-suggestionItemDesc {
    padding-left: 14px;
    color: #8590a6;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

html[data-theme=dark] .AskTitle-suggestionItemDesc {
    color: #606a80
}

.AskDetail {
    min-height: 112px;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.AskDetail-input {
    font-size: 15px
}

.AskDetail-input .Input {
    overflow: scroll
}

.AskDetail-inputWrapper {
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.AskDetail-actionsWrapper {
    overflow: hidden;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.AskDetail-actions {
    float: right
}

.AskDetail-placeholder {
    display: inline-block;
    color: #8590a6
}

html[data-theme=dark] .AskDetail-placeholder {
    color: #606a80
}

.AskOptions-label {
    color: #8590a6;
    cursor: pointer
}

html[data-theme=dark] .AskOptions-label {
    color: #606a80
}

.AskOptions-checkbox {
    margin-right: 8px;
    vertical-align: text-top
}

.Ask {
    min-height: 180px;
    padding-top: 8px
}

.Ask-form {
    min-height: 180px;
    max-height: calc(100vh - 24px * 3 - 32px);
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.Ask-form,.Ask-item,.Ask-items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.Ask-item {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-bottom: 16px;
    overflow: hidden
}

.Ask-item:nth-child(2) {
    -ms-flex-negative: 1;
    flex-shrink: 1
}

.Ask-titleWrapper {
    display: block
}

.Ask-avatar {
    float: left;
    margin-right: 16px;
    margin-top: 3px
}

.Ask-title {
    overflow: hidden
}

.Ask-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.AskFieldTip {
    font-size: 15px
}

.AskFieldTip--warning,html[data-theme=dark] .AskFieldTip--warning {
    color: #ff9607
}

.AskFieldTip--error {
    color: #f1403c
}

html[data-theme=dark] .AskFieldTip--error {
    color: #b7302d
}

.AskFieldTip .MaxLength {
    font-size: 15px
}

.AskOrgSelect-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #bfbfbf;
    padding-bottom: 15px;
    padding-top: 26px
}

.AskOrgSelect-item+.AskOrgSelect-item {
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .AskOrgSelect-item+.AskOrgSelect-item {
    border-top: 1px solid #444
}

html[data-theme=dark] .AskOrgSelect-item {
    color: gray
}

.AskOrgSelect-itemTitle {
    font-size: 17px;
    color: #1a1a1a
}

html[data-theme=dark] .AskOrgSelect-itemTitle {
    color: #999
}

.AskOrgSelect-itemDesc {
    margin-top: 10px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .AskOrgSelect-itemDesc {
    color: #606a80
}

.SearchBar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.SearchBar-toolWrapper {
    position: relative;
    z-index: 104;
    width: 326px
}

.SearchBar-tool {
    position: relative;
    float: left;
    overflow: hidden
}

.SearchBar-tool .Popover {
    display: block
}

.SearchBar-groupItem--topSearch {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 10px
}

.SearchBar-groupItem--hisotry {
    display: block
}

.SearchBar-menu {
    width: 400px;
    padding-bottom: 0;
    overflow-x: hidden
}

.SearchBar-menu.SearchBar-hasValueMenu .AutoComplete-group:last-child .Menu-item {
    height: 40px;
    padding: 0;
    margin-top: 8px;
    line-height: 40px;
    color: #8590a6
}

.SearchBar-menu.SearchBar-hasValueMenu .AutoComplete-group:last-child .Menu-item:not(.is-active) {
    background: #f6f6f6
}

html[data-theme=dark] .SearchBar-menu.SearchBar-hasValueMenu .AutoComplete-group:last-child .Menu-item:not(.is-active) {
    background: #2e2e2e
}

html[data-theme=dark] .SearchBar-menu.SearchBar-hasValueMenu .AutoComplete-group:last-child .Menu-item {
    color: #606a80
}

.SearchBar-menu.SearchBar-noValueMenu {
    padding-bottom: 8px
}

.SearchBar-menu em {
    color: #8590a6;
    font-style: normal
}

html[data-theme=dark] .SearchBar-menu em {
    color: #606a80
}

.SearchBar-menu .blueFont em,html[data-theme=dark] .SearchBar-menu .blueFont em {
    color: #175199
}

.SearchBar-contentResult,.SearchBar-defaultResult,.SearchBar-peopleResult,.SearchBar-topicResult {
    display: block;
    padding: 10px 0;
    font-size: 14px;
    box-sizing: border-box
}

.SearchBar-label {
    padding: 7px 0;
    margin-right: 16px;
    margin-left: 16px;
    font-size: 14px;
    color: #8590a6;
    border-bottom: 1px solid #ebebeb
}

.SearchBar-label--history {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

html[data-theme=dark] .SearchBar-label {
    color: #606a80;
    border-bottom: 1px solid #444
}

.SearchBar-peopleResult {
    padding: 13px 0
}

.SearchBar-peopleResult .AuthorInfo {
    padding-top: 0
}

.SearchBar-peopleResult .AuthorInfo-name {
    font-weight: 400
}

.SearchBar-peopleResult .AuthorInfo-badge {
    font-size: 13px;
    color: #8590a6
}

html[data-theme=dark] .SearchBar-peopleResult .AuthorInfo-badge {
    color: #606a80
}

.SearchBar-userAvatar {
    border-radius: 3px
}

.SearchBar-user {
    display: inline-block;
    margin-left: 16px
}

.SearchBar-userHeadline {
    margin-top: 2px;
    font-size: 13px;
    color: #8590a6
}

html[data-theme=dark] .SearchBar-userHeadline {
    color: #606a80
}

.SearchBar-contentSuffix,.SearchBar-topicSuffix {
    margin-left: 8px;
    font-size: 13px;
    color: #8590a6;
    white-space: nowrap
}

html[data-theme=dark] .SearchBar-contentSuffix,html[data-theme=dark] .SearchBar-topicSuffix {
    color: #606a80
}

.SearchBar-searchLink {
    display: block;
    font-size: 14px;
    color: #8590a6;
    text-align: center;
    cursor: pointer
}

html[data-theme=dark] .SearchBar-searchLink {
    color: #606a80
}

.SearchBar-askButton {
    z-index: 103;
    padding: 0 14px;
    margin-left: 16px;
    transition: opacity .3s ease,-webkit-transform .3s ease;
    transition: opacity .3s ease,transform .3s ease;
    transition: opacity .3s ease,transform .3s ease,-webkit-transform .3s ease;
    line-height: 30px
}

.SearchBar-hiddenAskButton {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0)
}

.SearchBar-input {
    width: 326px;
    padding-left: 16px;
    transition: width .2s ease,background .3s ease
}

.SearchBar-focusedInput {
    width: 400px
}

.SearchBar-searchIcon {
    position: absolute;
    right: -11px;
    top: -17px;
    bottom: -17px;
    background: transparent;
    border: transparent;
    padding: 0 12px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    transition: fill .3s ease
}

.SearchBar-focusedSearchIcon .Icon {
    fill: #0084ff
}

html[data-theme=dark] .SearchBar-focusedSearchIcon .Icon {
    fill: #3a76d0
}

.SearchBar-hasValueSearchIcon .Icon {
    fill: #fff
}

html[data-theme=dark] .SearchBar-hasValueSearchIcon .Icon {
    fill: #1a1a1a
}

.SearchBar-iconDecorator {
    position: absolute;
    top: 0;
    right: -40px;
    width: 40px;
    height: 36px;
    border-radius: 0 3px 3px 0;
    transition: all .3s ease;
    transition-delay: .1s;
    z-index: 101;
    background: #0084ff;
    opacity: 0
}

html[data-theme=dark] .SearchBar-iconDecorator {
    background: #3a76d0
}

.SearchBar-shownIconDecorator {
    opacity: 1;
    -webkit-transform: translateX(-40px);
    transform: translateX(-40px);
    transition-delay: 0
}

.SearchBar-menu .Menu-item {
    padding: 0 16px
}

.SimpleSearchBar-wrapper {
    margin: auto 0
}

.SimpleSearchBar-wrapper .Input-after {
    right: -1px
}

.SimpleSearchBar-searchButton {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 34px;
    padding: 3px 16px;
    border-radius: 0 3px 3px 0
}

.SimpleSearchBar-input {
    width: 296px;
    background-color: #f6f6f6
}

html[data-theme=dark] .SimpleSearchBar-input {
    background-color: #2e2e2e
}

.AppHeaderProfileMenu-item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 36px
}

.AppHeaderProfileMenu-item .Zi {
    margin-right: 6px
}

.AppHeader-profileEntry {
    display: relative
}

.AppHeader-profileAvatar {
    vertical-align: top
}

.AppHeader-profileAvatarRedDot {
    position: absolute;
    background: #f1403c;
    border: 2px solid #fff;
    border-radius: 50%;
    height: 8px;
    right: -4px;
    top: -4px;
    width: 8px
}

html[data-theme=dark] .AppHeader-profileAvatarRedDot {
    background: #b7302d;
    border: 2px solid #1a1a1a
}

.AppHeaderProfileMenu-redDot {
    background: #f1403c;
    border-radius: 50%;
    margin-left: 6px;
    margin-right: -4px;
    height: 6px;
    width: 6px
}

html[data-theme=dark] .AppHeaderProfileMenu-redDot {
    background: #b7302d
}

.OrgZhihuLogo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 18px
}

.OrgZhihuLogo-appName {
    margin-left: 15px;
    border-left: 1px solid #cfdae6;
    padding-left: 10px;
    line-height: 28px
}

.OrgAppHeader {
    position: relative;
    z-index: 100;
    min-width: 1032px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box
}

html[data-theme=dark] .OrgAppHeader {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.OrgAppHeader.is-fixed {
    z-index: 100
}

.OrgAppHeader-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
    padding: 0 16px;
    width: 1000px;
    height: 52px;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.OrgAppHeader.is-hidden .OrgAppHeader-inner {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%)
}

.OrgAppHeader-userInfo {
    color: #444
}

.OrgAppHeader-userInfo .Button {
    margin-left: 16px
}

html[data-theme=dark] .OrgAppHeader {
    background: #1a1a1a
}

.PrivacyConfirm-modal {
    width: 640px;
    height: 532px
}

.PrivacyConfirm-modal .Modal-inner {
    border-radius: 8px;
    overflow: hidden
}

.PrivacyConfirm-modal .Modal-content {
    padding: 0
}

.PrivacyConfirm {
    position: relative;
    font-size: 13px;
    line-height: 1.54;
    color: #444;
    padding-bottom: 80px
}

.PrivacyConfirm a {
    color: #0084ff
}

html[data-theme=dark] .PrivacyConfirm a {
    color: #3a76d0
}

.PrivacyConfirm p {
    margin: 10px 0
}

html[data-theme=dark] .PrivacyConfirm {
    color: gray
}

.PrivacyConfirm-inner {
    height: 340px;
    overflow: auto;
    padding: 0 30px
}

.PrivacyConfirm-title {
    color: #1a1a1a;
    font-size: 21px;
    font-weight: 600;
    font-synthesis: style;
    text-align: center;
    margin-bottom: 24px
}

html[data-ios] .PrivacyConfirm-title {
    font-weight: 500
}

html[data-android] .PrivacyConfirm-title {
    font-weight: 700
}

html[data-theme=dark] .PrivacyConfirm-title {
    color: #999
}

.PrivacyConfirm-section {
    color: #1a1a1a;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
    font-synthesis: style;
    border-left: 3px solid #0084ff;
    padding-left: 8px;
    margin: 20px 0 10px
}

html[data-ios] .PrivacyConfirm-section {
    font-weight: 500
}

html[data-android] .PrivacyConfirm-section {
    font-weight: 700
}

html[data-theme=dark] .PrivacyConfirm-section {
    color: #999;
    border-left: 3px solid #3a76d0
}

.PrivacyConfirm-buttons {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding: 20px 0;
    border-top: solid #d3d3d3;
    border-top: .5px solid #d3d3d3
}

html[data-hairline] .PrivacyConfirm-buttons {
    border-top: 1px solid #d3d3d3;
    -o-border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='0' width='1' height='.5' fill='#d3d3d3'/> </svg>") 1 0 0 0;
    border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='0' width='1' height='.5' fill='#d3d3d3'/> </svg>") 1 0 0 0
}

html[data-theme=dark] html[data-hairline] .PrivacyConfirm-buttons {
    border-top: 1px solid #2e2e2e
}

.PrivacyConfirm-buttons button {
    width: 180px;
    height: 40px
}

.PrivacyConfirm-buttons button:first-child:not(:last-child) {
    margin-right: 60px;
    background-color: #ebebeb;
    border-color: #ebebeb;
    color: gray
}

html[data-theme=dark] .PrivacyConfirm-buttons button:first-child:not(:last-child) {
    background-color: #444;
    border-color: #444;
    color: gray
}

html[data-theme=dark] .PrivacyConfirm-buttons {
    background-color: #1a1a1a;
    border-top: solid #2e2e2e;
    border-top: .5px solid #2e2e2e
}

.PrivacyConfirm-refuseModal {
    width: 390px
}

.PrivacyConfirm-refuseModal .Modal-inner {
    border-radius: 8px
}

.PrivacyConfirm-refuseModal .PrivacyConfirm-buttons {
    position: relative;
    margin-top: 20px
}

.PrivacyConfirm-refuseModal .Modal-content {
    padding: 0
}

.PrivacyConfirm-refuseModal .Modal-content div:first-child {
    padding: 0 7.4%
}

.PrivacyConfirm-privacyAnchor {
    outline: none!important
}

.PrivacyConfirm-center {
    text-align: center
}

.AppHeader {
    position: relative;
    z-index: 100;
    min-width: 1032px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box
}

html[data-theme=dark] .AppHeader {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.AppHeader.is-fixed {
    z-index: 100
}

html[data-theme=dark] .AppHeader {
    background: #1a1a1a
}

.AppHeader-inner {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1000px;
    height: 52px;
    padding: 0 16px;
    margin: 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.AppHeader.is-hidden .AppHeader-inner {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%)
}

.AppHeader-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 30px;
    margin-right: 18px;
    margin-left: 27px;
    color: #999
}

html[data-theme=dark] .AppHeader-nav {
    color: #646464
}

.AppHeader-navItem {
    padding: 0 15px;
    font-size: 15px;
    line-height: 30px;
    color: #8590a6
}

.AppHeader-navItem:hover,html[data-theme=dark] .AppHeader-navItem:hover {
    color: #175199
}

.AppHeader-navItem.is-active {
    color: #444
}

html[data-theme=dark] .AppHeader-navItem.is-active {
    color: gray
}

.AppHeader-navItem:first-child {
    padding-left: 0
}

html[data-theme=dark] .AppHeader-navItem {
    color: #606a80
}

.AppHeader-input {
    width: 345px
}

.AppHeader-userInfo {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.AppHeader-messages,.AppHeader-notifications {
    margin-right: 40px
}

.AppHeader-login {
    margin-right: 16px
}

.AppHeader-downloadPopover {
    padding: 16px
}

.AppHeader-downloadPopoverImage {
    width: 120px
}

.AdblockBanner {
    position: relative;
    z-index: 100;
    min-width: 1000px;
    padding: 16px;
    line-height: 28px;
    color: #8590a6;
    text-align: center;
    background-color: #ebebeb
}

html[data-theme=dark] .AdblockBanner {
    color: #606a80;
    background-color: #444
}

.AdblockBanner-inner {
    width: 1000px;
    padding: 0 24px;
    margin: 0 auto;
    box-sizing: border-box
}

.AdblockBanner-inner a:hover {
    border-bottom: 1px solid #8590a6
}

html[data-theme=dark] .AdblockBanner-inner a:hover {
    border-bottom: 1px solid #606a80
}

.AdblockBanner-close {
    position: absolute;
    top: 16px;
    right: 16px
}

.AdblockBanner-close .Icon {
    display: block
}

body {
    font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
    font-size: 15px;
    color: #1a1a1a;
    background: #f6f6f6;
    -webkit-tap-highlight-color: rgba(26,26,26,0)
}

html[data-theme=dark] body {
    color: #999;
    background: #000;
    -webkit-tap-highlight-color: rgba(153,153,153,0)
}

.App-main {
    display: block
}

.u-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    white-space: nowrap
}

.App-loginGuideModal {
    width: 400px
}

.App-loginButton,.App-registerButton {
    display: block;
    width: 220px;
    height: 36px;
    margin: 0 auto;
    font-size: 14px;
    text-align: center
}

.App-loginButton {
    margin-top: 28px;
    color: #fff
}

html[data-theme=dark] .App-loginButton {
    color: #1a1a1a
}

.App-registerButton {
    margin-top: 52px;
    margin-bottom: 12px;
    color: #8590a6
}

html[data-theme=dark] .App-registerButton {
    color: #606a80
}

.EntrySign-body {
    overflow: hidden
}

.EntrySign-body .AppHeader {
    display: none
}

.SignFlowHomepage {
    background-image: url(https://static.zhihu.com/heifetz/sign_bg.db29b0fbd2f78dd8c1b7.png);
    background-repeat: no-repeat;
    background-color: #b8e5f8;
    background-size: cover;
    width: 100%;
    height: 100vh;
    overflow: auto;
    padding-right: 15px
}

.SignFlowHomepage .Card {
    overflow: visible
}

.SignFlowHomepage-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 2px;
    min-height: 688px;
    height: calc(100% - 42px);
    box-sizing: border-box
}

.SignFlowHomepage-downloadBtn {
    margin-top: 30px;
    background: #8590a6;
    border: none;
    color: #fff;
    width: 432px;
    height: 42px
}

.SignFlowHomepage-downloadBtn:hover {
    background: #8590a6
}

html[data-theme=dark] .SignFlowHomepage-downloadBtn,html[data-theme=dark] .SignFlowHomepage-downloadBtn:hover {
    background: #606a80
}

html[data-theme=dark] .SignFlowHomepage-downloadBtn {
    color: #1a1a1a
}

.SignFlowHomepage-qrImage {
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    height: 100%;
    bottom: 0;
    transition: opacity .3s,height .3s
}

.SignFlowHomepage-qrImage div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #fff;
    background-size: 250px 250px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-image: url(https://www.zhihu.com/static/revved/img/index/qr-code@2x.2607d448.png);
    box-shadow: 0 0 8px 0 rgba(26,26,26,.15);
    border-radius: 2px
}

html[data-theme=dark] .SignFlowHomepage-qrImage div {
    background-color: #1a1a1a;
    box-shadow: 0 0 8px 0 hsla(0,0%,60%,.15)
}

.SignFlowHomepage-qrImage:after,.SignFlowHomepage-qrImage:before {
    content: "";
    position: absolute;
    bottom: -7px;
    -webkit-transform: translate(-50%) rotate(45deg);
    transform: translate(-50%) rotate(45deg);
    left: 50%;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 4px
}

html[data-theme=dark] .SignFlowHomepage-qrImage:after,html[data-theme=dark] .SignFlowHomepage-qrImage:before {
    background: #1a1a1a
}

.SignFlowHomepage-qrImage:after {
    box-shadow: 0 0 8px 0 rgba(26,26,26,.15);
    z-index: -1
}

html[data-theme=dark] .SignFlowHomepage-qrImage:after {
    box-shadow: 0 0 8px 0 hsla(0,0%,60%,.15)
}

.SignFlowHomepage-qrImageHidden {
    opacity: 0;
    height: 0;
    bottom: 0
}

.SignFlowHomepage-qrImageHidden:after,.SignFlowHomepage-qrImageHidden:before {
    display: none
}

.SignFlowHomepage-footer {
    font-size: 12px;
    line-height: 21px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 2px #999
}

html[data-theme=dark] .SignFlowHomepage-footer {
    color: #1a1a1a;
    text-shadow: 0 1px 2px #646464
}

.ZhihuIntegrity {
    border-top: 1px solid #ebebeb;
    width: 420px;
    margin: 10px auto;
    padding-top: 10px
}

.ZhihuIntegrity>div {
    cursor: pointer;
    display: inline-block;
    position: relative;
    line-height: 26px;
    z-index: 0
}

.ZhihuIntegrity img {
    position: absolute;
    left: -34px;
    z-index: -1;
    width: 138px;
    height: 26px
}

html[data-theme=dark] .ZhihuIntegrity {
    border-top: 1px solid #444
}

.SignFlowHomepage-footer a:not(:last-child):after,.SignFlowHomepage-footer span:not(:last-child):after {
    content: " \B7   ";
    white-space: pre;
    display: inline-block
}

.SignFlowHomepage-footer a:hover {
    text-decoration: underline
}

.UserStatus {
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: #1a1a1a;
    text-align: center;
    background-color: rgba(133,144,166,.08)
}

.UserStatus,.UserStatus .Button {
    font-size: 15px
}

html[data-theme=dark] .UserStatus {
    color: #999;
    background-color: rgba(96,106,128,.08)
}

.UserStatus-warnText {
    margin-left: 8px
}

.UserAvatar {
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    background-color: #fff;
    border: 4px solid #fff;
    border-radius: 8px
}

html[data-theme=dark] .UserAvatar {
    background-color: #1a1a1a;
    border: 4px solid #1a1a1a
}

.UserAvatar-inner {
    vertical-align: top
}

.UserAvatar-holder,.UserAvatar-round {
    width: 160px;
    height: 160px
}

.UserAvatar-round {
    border-radius: 50%
}

.UploadImageModal-modal {
    text-align: center
}

.UploadImageModal-modal div {
    display: block
}

.UploadImageModal-container {
    width: 100%;
    height: 100%;
    margin: 0 auto 30px;
    cursor: move
}

.UploadImageModal-container canvas {
    vertical-align: top
}

.UserAvatarEditor {
    cursor: pointer;
    position: relative
}

.UserAvatarEditor-avatar {
    background: #f6f6f6;
    border: 4px solid #fff;
    border-radius: 8px
}

html[data-theme=dark] .UserAvatarEditor-avatar {
    background: #2e2e2e;
    border: 4px solid #1a1a1a
}

.UserAvatarEditor-title {
    font-size: 24px;
    color: #1a1a1a
}

html[data-theme=dark] .UserAvatarEditor-title {
    color: #999
}

.UserAvatarEditor-subTitle {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .UserAvatarEditor-subTitle {
    color: #606a80
}

.UserAvatarEditor-range {
    width: 200px;
    margin: 20px 10px
}

.UserAvatarEditor-maskInner {
    z-index: 4;
    border: 4px solid #fff;
    border-radius: 8px
}

html[data-theme=dark] .UserAvatarEditor-maskInner {
    border: 4px solid #1a1a1a
}

.UserAvatarEditor-maskInnerText {
    white-space: nowrap
}

.UserAvatarEditor-cameraIcon {
    margin-bottom: 14px;
    fill: #fff
}

html[data-theme=dark] .UserAvatarEditor-cameraIcon {
    fill: #1a1a1a
}

.UserAvatarEditor-maskRoundInner {
    border-radius: 50%
}

.UserCover {
    position: relative;
    height: 240px;
    overflow: hidden;
    background: #f6f6f6;
    border-top-right-radius: 1px;
    border-top-left-radius: 1px;
    transition: height .3s
}

html[data-theme=dark] .UserCover {
    background: #2e2e2e
}

.UserCover--colorBlock {
    height: 132px;
    background: #999
}

html[data-theme=dark] .UserCover--colorBlock {
    background: #646464
}

.UserCover-image {
    transition: -webkit-transform 6s ease-out;
    transition: transform 6s ease-out;
    transition: transform 6s ease-out,-webkit-transform 6s ease-out
}

.UserCover-image,.UserCover-image img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

.DynamicColorButton {
    color: #d3d3d3;
    transition: color,border-color .3s
}

.DynamicColorButton svg {
    fill: currentColor
}

html[data-theme=dark] .DynamicColorButton {
    color: #2e2e2e
}

.DynamicColorButton--dark {
    color: rgba(26,26,26,.6);
    border-color: rgba(26,26,26,.12)
}

.DynamicColorButton--dark:hover {
    background: rgba(26,26,26,.03)
}

html[data-theme=dark] .DynamicColorButton--dark:hover {
    background: hsla(0,0%,60%,.03)
}

html[data-theme=dark] .DynamicColorButton--dark {
    color: hsla(0,0%,60%,.6);
    border-color: hsla(0,0%,60%,.12)
}

.DynamicColorButton--white {
    color: hsla(0,0%,100%,.7);
    border-color: hsla(0,0%,100%,.24)
}

.DynamicColorButton--white:hover {
    background: hsla(0,0%,100%,.04)
}

html[data-theme=dark] .DynamicColorButton--white:hover {
    background: rgba(26,26,26,.04)
}

html[data-theme=dark] .DynamicColorButton--white {
    color: rgba(26,26,26,.7);
    border-color: rgba(26,26,26,.24)
}

.UserCoverGuide {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-top-right-radius: 1px;
    border-top-left-radius: 1px
}

.UserCoverGuide.is-active .is-playing {
    opacity: 1
}

.UserCoverGuide.is-active .UserCoverGuide-dialog {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.UserCoverGuide-inner {
    position: relative;
    z-index: 2;
    float: right;
    padding: 24px
}

.UserCoverGuide-buttonContainer {
    margin-bottom: 14px;
    text-align: right
}

.UserCoverGuide-dialog {
    position: relative;
    width: 286px;
    padding: 22px 16px;
    background-color: #fff;
    border-radius: 4px;
    opacity: 0;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
    transition: opacity .3s,-webkit-transform .3s;
    transition: opacity .3s,transform .3s;
    transition: opacity .3s,transform .3s,-webkit-transform .3s
}

.UserCoverGuide-dialog:after {
    position: absolute;
    right: 60px;
    bottom: 100%;
    border-color: transparent transparent #fff;
    border-style: solid;
    border-width: 7px;
    content: ""
}

html[data-theme=dark] .UserCoverGuide-dialog:after {
    border-color: transparent transparent #1a1a1a
}

html[data-theme=dark] .UserCoverGuide-dialog {
    background-color: #1a1a1a
}

.UserCoverGuide-dialogContent {
    font-size: 14px;
    line-height: 1.7
}

.UserCoverGuide-dialogContent a {
    color: #175199;
    cursor: pointer
}

.UserCoverGuide-dialogContent a:hover {
    text-decoration: underline
}

html[data-theme=dark] .UserCoverGuide-dialogContent a {
    color: #175199
}

.UserCoverGuide-dialogDescription,.UserCoverGuide-dialogHead {
    margin: 0 0 6px
}

.UserCoverGuide-item,.UserCoverGuide-items {
    width: 100%;
    height: 100%
}

.UserCoverGuide-item {
    position: absolute;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
    transition: opacity .5s
}

.UserCoverEditor {
    position: relative
}

.UserCoverEditor-simpleEditButton {
    position: absolute;
    top: 24px;
    right: 24px;
    z-index: 2
}

.UserCoverEditor-editor {
    position: relative;
    z-index: 2
}

.UserCoverEditor-editor canvas {
    vertical-align: top
}

.UserCoverEditor-action {
    position: absolute;
    width: 100%;
    height: 80px;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
    box-shadow: 0 1px 3px rgba(26,26,26,.1)
}

html[data-theme=dark] .UserCoverEditor-action {
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    background: #1a1a1a;
    border-bottom: 1px solid #444
}

.UserCoverEditor-actionContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    margin: 0 24px
}

.UserCoverEditor-actionContent .Button+.Button {
    margin-left: 16px
}

.UserCoverEditor-actionTitle {
    font-size: 20px;
    color: #1a1a1a
}

html[data-theme=dark] .UserCoverEditor-actionTitle {
    color: #999
}

.UserCoverEditor-actionDescription {
    font-size: 13px;
    color: #8590a6
}

html[data-theme=dark] .UserCoverEditor-actionDescription {
    color: #606a80
}

.UserCoverEditor-rangeInput {
    display: inline-block
}

.UserCoverEditor-cameraIcon {
    margin-bottom: 14px;
    fill: #fff
}

html[data-theme=dark] .UserCoverEditor-cameraIcon {
    fill: #1a1a1a
}

.UserCoverEditor-loadingCanvas {
    width: 100%;
    height: 100%
}

.UserCoverEditor-leftMasker {
    left: 0;
    position: absolute;
    z-index: 20;
    height: 100%;
    width: calc(50% - 240px);
    background-color: hsla(0,0%,100%,.5);
    display: inline-block
}

html[data-theme=dark] .UserCoverEditor-leftMasker {
    background-color: rgba(26,26,26,.5)
}

.UserCoverEditor-rightMasker {
    right: 0;
    position: absolute;
    z-index: 20;
    height: 100%;
    width: calc(50% - 240px);
    background-color: hsla(0,0%,100%,.5);
    display: inline-block
}

html[data-theme=dark] .UserCoverEditor-rightMasker {
    background-color: rgba(26,26,26,.5)
}

.ProfileHeader {
    position: relative;
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto
}

.ProfileHeader-wrapper {
    position: relative;
    width: 100%;
    background: #fff;
    box-sizing: border-box
}

html[data-theme=dark] .ProfileHeader-wrapper {
    background: #1a1a1a
}

.ProfileHeader-main {
    position: relative;
    margin: 0 20px 24px
}

.ProfileHeader-avatar {
    position: absolute;
    top: -25px;
    left: 0;
    z-index: 1
}

.ProfileEdit--org .ProfileHeader-avatar,.ProfileHeader--org .ProfileHeader-avatar {
    top: -60px
}

.ProfileHeader-content {
    padding-top: 16px;
    padding-left: 32px;
    border-left: 164px solid transparent
}

.ProfileHeader-contentHead {
    position: relative;
    padding-right: 106px;
    margin-bottom: 16px
}

.ProfileHeader-contentHead .Button--plain {
    position: absolute;
    top: 8px;
    right: 0
}

.ProfileHeader-contentHead .Button--plain:hover {
    color: gray
}

.ProfileHeader-contentHead .Button--plain:hover .Icon {
    fill: #999
}

html[data-theme=dark] .ProfileHeader-contentHead .Button--plain:hover .Icon {
    fill: #646464
}

html[data-theme=dark] .ProfileHeader-contentHead .Button--plain:hover {
    color: gray
}

.ProfileHeader-contentHead .FollowStatus {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 3px 6px
}

.ProfileHeader-contentBody {
    position: relative;
    width: 524px;
    overflow: hidden
}

.content-enter {
    top: 0;
    opacity: 0
}

.content-enter-active {
    opacity: 1;
    transition: opacity .3s ease-out
}

.content-leave {
    position: absolute;
    opacity: 1
}

.content-leave-active {
    opacity: 0;
    transition: opacity .3s ease-out
}

.ProfileHeader-title {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.ProfileHeader-name {
    font-size: 26px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 30px
}

html[data-ios] .ProfileHeader-name {
    font-weight: 500
}

html[data-android] .ProfileHeader-name {
    font-weight: 700
}

.ProfileHeader-badge {
    margin-left: 12px;
    vertical-align: 2px
}

.ProfileHeader-badge.is-unverified {
    color: #8590a6
}

.ProfileHeader-badge.is-unverified .Icon {
    margin-right: 4px
}

html[data-theme=dark] .ProfileHeader-badge.is-unverified {
    color: #606a80
}

.ProfileHeader-detailValue a,.ProfileHeader-headline a {
    border: none!important
}

.ProfileHeader-detailValue a:hover,.ProfileHeader-headline a:hover,html[data-theme=dark] .ProfileHeader-detailValue a:hover,html[data-theme=dark] .ProfileHeader-headline a:hover {
    color: #175199
}

.ProfileHeader-headline {
    margin-left: 12px;
    font-size: 18px;
    white-space: nowrap
}

.ProfileHeader-info {
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box
}

.ProfileHeader--org .ProfileHeader-info {
    margin-bottom: 36px;
    overflow: hidden;
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap
}

.ProfileHeader-divider {
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 0 8px;
    background: #ebebeb
}

html[data-theme=dark] .ProfileHeader-divider {
    background: #444
}

.ProfileHeader-infoItem {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.ProfileHeader-infoItem:not(:last-child) {
    margin-bottom: 10px
}

.ProfileHeader-iconWrapper {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 12px;
    text-align: center;
    color: #8590a6
}

html[data-theme=dark] .ProfileHeader-iconWrapper {
    color: #606a80
}

.ProfileHeader-arrowIcon.is-active {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.ProfileHeader-contentFooter {
    position: relative;
    padding-top: 8px
}

.ProfileHeader-expandButton {
    line-height: 1
}

.ProfileHeader-expandButton .Icon {
    margin: 0 16px 0 4px
}

.ProfileHeader-buttons {
    position: absolute;
    right: 0;
    bottom: 0
}

.ProfileHeader-detail {
    width: 100%;
    font-size: 14px;
    line-height: 1.8;
    color: #1a1a1a
}

html[data-theme=dark] .ProfileHeader-detail {
    color: #999
}

.ProfileHeader-detailItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 18px
}

.ProfileHeader-detailLabel {
    width: 60px;
    margin-right: 37px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ProfileHeader-detailLabel {
    font-weight: 500
}

html[data-android] .ProfileHeader-detailLabel {
    font-weight: 700
}

.ProfileHeader-detailValue {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden
}

.ProfileHeader-field {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.ProfileHeader-field:not(:first-child) {
    margin-top: 12px
}

.ProfileHeader-itemAvatar {
    width: 18px;
    height: 18px;
    margin-right: 12px
}

.ProfileHeader-defaultCover {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover
}

.ProfileHeader-tips {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .ProfileHeader-tips {
    color: #606a80
}

.PageHeader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s
}

.PageHeader:not(.is-shown) {
    -webkit-transform: translateY(100%);
    transform: translateY(100%)
}

.ProfileMain-avatar .Avatar {
    display: block;
    cursor: pointer
}

.PageHeader .ProfileMain-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 1000px;
    height: 100%;
    padding: 0 16px;
    margin: 0 auto
}

.PageHeader .ProfileMain-tabs {
    border-bottom: none
}

.ProfileMain-tabs {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.ProfileMain-tabs .Tabs-meta {
    font-weight: 400
}

.ProfileMain-menuToggler {
    font-size: 16px;
    color: #1a1a1a
}

html[data-theme=dark] .ProfileMain-menuToggler {
    color: #999
}

.ProfileMain-tabIcon {
    margin-left: 4px
}

.Profile-popoverMenuItem {
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    color: #1a1a1a
}

.Profile-popoverMenuItem.is-active {
    background: #f6f6f6
}

html[data-theme=dark] .Profile-popoverMenuItem.is-active {
    background: #2e2e2e
}

html[data-theme=dark] .Profile-popoverMenuItem {
    color: #999
}

.Profile-popoverMenuItem .Link-meta {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .Profile-popoverMenuItem .Link-meta {
    color: #606a80
}

body:not(.Body--isAppleDevice) .ProfileMain-tabs .is-active {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] body:not(.Body--isAppleDevice) .ProfileMain-tabs .is-active {
    font-weight: 500
}

html[data-android] body:not(.Body--isAppleDevice) .ProfileMain-tabs .is-active {
    font-weight: 700
}

.ProfileMainPrivacy-mainContentWrapper {
    height: 383px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.ProfileMainPrivacy-mainContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 86px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8590a6
}

html[data-theme=dark] .ProfileMainPrivacy-mainContent {
    color: #606a80
}

.ProfileMainPrivacy-mainContentText {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 20px
}

.ProfileMainPrivacy-mainContentLink {
    font-size: 15px
}

.ProfileMainPrivacy-authWrapper {
    display: inline-block
}

.ProfileMainPrivacy-pointerWrapper {
    cursor: pointer
}

.ProfileLockStatus {
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.ProfileLockStatus-title {
    margin: 42px 0 10px;
    font-size: 20px;
    font-weight: 600;
    font-synthesis: style;
    color: #1a1a1a
}

html[data-ios] .ProfileLockStatus-title {
    font-weight: 500
}

html[data-android] .ProfileLockStatus-title {
    font-weight: 700
}

html[data-theme=dark] .ProfileLockStatus-title {
    color: #999
}

.ProfileLockStatus-subtitle {
    margin-bottom: 23px;
    font-size: 16px;
    color: #8590a6
}

html[data-theme=dark] .ProfileLockStatus-subtitle {
    color: #606a80
}

.ProfileLockStatus-avatar {
    display: block;
    width: 140px;
    height: 140px;
    margin: 0 auto;
    border-radius: 50%
}

.ProfileLockStatus-redirect {
    display: block;
    margin: 0 auto;
    text-decoration: underline
}

.ProfileLockStatus-redirect:hover,html[data-theme=dark] .ProfileLockStatus-redirect:hover {
    color: rgba(23,81,153,.72)
}

.ProfileLockStatus-redirect:active,html[data-theme=dark] .ProfileLockStatus-redirect:active {
    color: #175199
}

.ProfileLockStatus-avatar,.ProfileLockStatus-redirect,.ProfileLockStatus-subtitle,.ProfileLockStatus-title {
    text-align: center
}

.OrgCreateButton {
    border: none;
    padding: 0
}

.OrgCreateButton-logoutModal p {
    padding: 0 24px;
    text-align: center
}

.Footer {
    padding: 10px 0 10px 5px;
    font-size: 13px;
    line-height: 2;
    color: #8590a6
}

html[data-theme=dark] .Footer {
    color: #606a80
}

.Footer-dot:after {
    margin: 0 5px;
    content: "\B7"
}

.Footer-item {
    display: inline-block
}

a.Footer-item:hover {
    color: #175199;
    cursor: pointer
}

html[data-theme=dark] a.Footer-item:hover {
    color: #175199
}

.IconGraf {
    margin-bottom: 12px
}

.IconGraf:last-child {
    margin-bottom: 0
}

.IconGraf-iconWrapper {
    display: inline-block;
    width: 28px
}

.IconGraf-icon {
    fill: #8590a6
}

html[data-theme=dark] .IconGraf-icon {
    fill: #606a80
}

.SideItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 0;
    margin-bottom: 24px
}

.SideItem:last-child {
    margin-bottom: 0
}

.SideItem-image {
    padding-top: 3px
}

.SideItem--multiline .SideItem-image {
    padding-top: 0
}

.SideItem-image img {
    vertical-align: top
}

.SideItem-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-left: 20px
}

.SideItem-title {
    font-size: 15px;
    color: #1a1a1a
}

.SideItem--multiline .SideItem-title {
    font-size: 18px
}

html[data-theme=dark] .SideItem-title {
    color: #999
}

.SideItem-description {
    max-height: 52px;
    margin-top: 2px;
    overflow: hidden;
    font-size: 14px;
    color: #8590a6;
    text-overflow: ellipsis
}

.SideItem--multiline .SideItem-description {
    margin-top: 8px
}

html[data-theme=dark] .SideItem-description {
    color: #606a80
}

.Publication-title:hover,html[data-theme=dark] .Publication-title:hover {
    color: #175199
}

.Publications-content {
    padding: 4px 20px
}

.Publication-item:not(:first-child) {
    display: block;
    border-top: 1px solid #f6f6f6
}

html[data-theme=dark] .Publication-item:not(:first-child) {
    border-top: 1px solid #2e2e2e
}

.Publication-summary {
    display: -webkit-box;
    line-height: 24px;
    color: #1a1a1a;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
}

html[data-theme=dark] .Publication-summary {
    color: #999
}

.Publication-image {
    width: 80px;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1)
}

html[data-theme=dark] .Publication-image {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.FollowshipCard {
    font-size: 14px
}

.FollowshipCard .NumberBoard-itemInner {
    padding: 12px 0
}

.FollowshipCard-counts:not(:last-child) {
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .FollowshipCard-counts:not(:last-child) {
    border-bottom: 1px solid #2e2e2e
}

.FollowshipCard-link {
    color: #175199
}

.FollowshipCard-link:hover,html[data-theme=dark] .FollowshipCard-link:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .FollowshipCard-link {
    color: #175199
}

.FollowshipCard-avatars,.FollowshipCard-item:not(:first-child) {
    margin-top: 12px
}

.FollowshipCard-icon {
    margin-right: 8px
}

.FollowshipCard-avatar {
    margin-left: 8px
}

.FollowshipCard-avatar:first-child {
    margin-left: 0
}

.Profile {
    width: auto
}

.Profile-main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1000px;
    min-height: 100vh;
    padding: 0 16px;
    margin: 10px auto;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.Profile-mainColumn {
    width: 694px
}

.Profile-mainColumn .SubTabs-item .Select-button {
    color: inherit
}

body:not(.Body--isAppleDevice) .Profile-mainColumn .List-headerText {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] body:not(.Body--isAppleDevice) .Profile-mainColumn .List-headerText {
    font-weight: 500
}

html[data-android] body:not(.Body--isAppleDevice) .Profile-mainColumn .List-headerText {
    font-weight: 700
}

body:not(.Body--isAppleDevice) .Profile-mainColumn .SubTabs-item:not(.is-active) {
    font-weight: 400
}

.Profile-sideColumn {
    width: 296px;
    color: #646464
}

html[data-theme=dark] .Profile-sideColumn {
    color: #999
}

.Profile-sideColumnItems {
    padding: 12px 0
}

.Profile-sideColumnItem {
    padding: 6px 20px
}

.Profile-sideColumnItemValue {
    margin-top: 6px;
    margin-left: 29px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .Profile-sideColumnItemValue {
    color: #606a80
}

.Profile-sideColumnItemTitle {
    display: block;
    margin-bottom: 12px
}

.Profile-analyticsBar {
    color: #8590a6;
    cursor: pointer;
    height: 56px;
    line-height: 56px;
    padding: 0 20px
}

.Profile-analyticsBar a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

html[data-theme=dark] .Profile-analyticsBar {
    color: #606a80
}

.Profile-analyticsBarHint {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin-left: 10px
}

.Profile-analyticsBarSeen {
    background: #f36;
    border-radius: 50%;
    height: 6px;
    margin-left: 8px;
    width: 6px
}

html[data-theme=dark] .Profile-analyticsBarSeen {
    background: #d92155
}

.Profile-lightList {
    font-size: 14px
}

.Profile-lightItem {
    padding-left: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 46px;
    font-size: 14px;
    border-top: 1px solid #ebebeb
}

.Profile-lightItem:hover,.Profile-lightItem:hover .Profile-lightItemValue,html[data-theme=dark] .Profile-lightItem:hover,html[data-theme=dark] .Profile-lightItem:hover .Profile-lightItemValue {
    color: #175199
}

.Profile-lightItem:last-child {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .Profile-lightItem:last-child {
    border-bottom: 1px solid #444
}

html[data-theme=dark] .Profile-lightItem {
    border-top: 1px solid #444
}

.Profile-lightItemName {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.Profile-lightItemValue {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .Profile-lightItemValue {
    color: #606a80
}

.Profile-footerOperations {
    width: 100%;
    padding: 10px 0 10px 5px;
    box-sizing: border-box;
    margin-top: 6px;
    font-size: 14px;
    line-height: 1.8;
    text-align: left;
    border-bottom: 1px solid #ebebeb
}

.Profile-footerOperations,.Profile-footerOperations a {
    color: #8590a6
}

html[data-theme=dark] .Profile-footerOperations,html[data-theme=dark] .Profile-footerOperations a {
    color: #606a80
}

html[data-theme=dark] .Profile-footerOperations {
    border-bottom: 1px solid #444
}

.Profile-footerDot:after {
    margin-right: 5px;
    margin-left: 5px;
    content: "\B7"
}

.Profile-sideColumnItemLink {
    cursor: pointer
}

.Profile-sideColumnItemLink:hover,html[data-theme=dark] .Profile-sideColumnItemLink:hover {
    color: #175199
}

.Profile-createOrgAccount {
    display: inline-block;
    width: 100%;
    line-height: 60px;
    text-align: center;
    color: #175199;
    cursor: pointer
}

html[data-theme=dark] .Profile-createOrgAccount {
    color: #175199
}

.Profile-createOrgAccountTip {
    text-align: center
}

.List .EmptyState {
    padding: 70px 0
}

.List-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 50px;
    margin: 0 20px;
    border-bottom: 1px solid #f6f6f6;
    box-sizing: border-box
}

html[data-theme=dark] .List-header {
    border-bottom: 1px solid #2e2e2e
}

.List-headerText {
    margin: 0;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .List-headerText {
    font-weight: 500
}

html[data-android] .List-headerText {
    font-weight: 700
}

.List-headerOptions {
    font-size: 14px
}

.List-loading {
    padding: 200px 0;
    color: #8590a6;
    text-align: center
}

html[data-theme=dark] .List-loading {
    color: #606a80
}

.List-item {
    position: relative;
    padding: 16px 20px
}

.List-item+.List-item:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 20px;
    display: block;
    border-bottom: 1px solid #f6f6f6;
    content: ""
}

html[data-theme=dark] .List-item+.List-item:after {
    border-bottom: 1px solid #2e2e2e
}

.List-item--holder {
    padding: 24px 0
}

.List-itemMeta {
    margin-bottom: 10px;
    color: #8590a6
}

html[data-theme=dark] .List-itemMeta {
    color: #606a80
}

.ContentItem-title {
    font-size: 18px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 1.6;
    color: #1a1a1a;
    margin-top: -4px;
    margin-bottom: -4px
}

html[data-ios] .ContentItem-title {
    font-weight: 500
}

html[data-android] .ContentItem-title {
    font-weight: 700
}

.ContentItem-title+.ContentItem-meta {
    margin-top: 6px
}

.ContentItem-title a:hover,html[data-theme=dark] .ContentItem-title a:hover {
    color: #175199
}

html[data-theme=dark] .ContentItem-title {
    color: #999
}

.ContentItem-meta {
    font-size: 15px;
    color: #646464
}

.ContentItem-meta .ColumnItem-meta,.ContentItem-meta .TopicItem-meta {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

html[data-theme=dark] .ContentItem-meta {
    color: #999
}

.ContentItem-avatar {
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle
}

.ContentItem-avatar .UserLink-avatar {
    width: 38px;
    height: 38px;
    vertical-align: top
}

.ContentItem-author {
    padding-top: 10px
}

.ContentItem-status {
    margin-top: 5px;
    color: #8590a6;
    font-size: 14px
}

html[data-theme=dark] .ContentItem-status {
    color: #606a80
}

.ContentItem-statusItem:not(:first-child):before {
    margin: 0 5px;
    content: "\B7"
}

.ContentItem-actions {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 20px;
    margin: 0 -20px -10px;
    color: #646464;
    background: #fff;
    clear: both
}

.ContentItem-actions.is-fixed {
    margin: 0;
    box-shadow: 0 -1px 3px rgba(26,26,26,.1)
}

html[data-theme=dark] .ContentItem-actions.is-fixed {
    box-shadow: 0 -1px 3px hsla(0,0%,60%,.1)
}

html[data-theme=dark] .ContentItem-actions {
    color: #999;
    background: #1a1a1a
}

.ContentItem-action {
    margin-left: 24px;
    font-size: 14px
}

.ContentItem-action:first-child {
    margin-left: 0
}

.ContentItem-rightButton {
    margin-left: auto
}

.ContentItem-rightButton .Icon {
    margin-left: 8px
}

.ContentItem-more {
    padding: 0;
    margin-left: 4px;
    color: #175199
}

.ContentItem-more:hover,html[data-theme=dark] .ContentItem-more:hover {
    color: gray
}

.ContentItem-more .Icon {
    fill: currentColor
}

html[data-theme=dark] .ContentItem-more {
    color: #175199
}

.ContentItem-time {
    margin-top: 10px;
    font-size: 14px;
    color: #8590a6
}

.ContentItem-time a:hover {
    border-bottom: 1px solid rgba(133,144,166,.72)
}

html[data-theme=dark] .ContentItem-time a:hover {
    border-bottom: 1px solid rgba(96,106,128,.72)
}

html[data-theme=dark] .ContentItem-time {
    color: #606a80
}

.ContentItem-arrowIcon {
    width: 9px;
    margin-left: 8px
}

.ContentItem-arrowIcon.is-active {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.ContentItem-main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.ContentItem-image {
    float: left;
    margin-right: 16px
}

.ContentItem-head {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    margin-right: 6px
}

.ContentItem-extra {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center
}

.ContentItem-cells {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 10px;
    line-height: 26px
}

.ContentItem-cell:not(:first-child) {
    margin-left: 40px
}

.ContentItem-cell>span:first-child {
    color: #8590a6
}

html[data-theme=dark] .ContentItem-cell>span:first-child {
    color: #606a80
}

.ImageView {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 101;
    overflow: hidden;
    transition: background-color .2s ease-in-out
}

.ImageView.is-active {
    background-color: rgba(26,26,26,.65)
}

html[data-theme=dark] .ImageView.is-active {
    background-color: rgba(0,0,0,.65)
}

.ImageView-inner {
    height: 100%;
    box-sizing: border-box
}

.ImageView-img {
    cursor: zoom-out;
    transition: -webkit-transform .3s ease-in-out;
    transition: transform .3s ease-in-out;
    transition: transform .3s ease-in-out,-webkit-transform .3s ease-in-out
}

.ImageView-transformOrigin {
    -webkit-transform-origin: left top;
    transform-origin: left top;
    transition: .3s ease-in-out;
    transition-property: -webkit-transform opacity;
    transition-property: transform opacity;
    transition-property: transform opacity,-webkit-transform opacity
}

.CopyrightRichText-tooltip {
    font-size: 14px
}

.RichContent {
    line-height: 1.67
}

.RichContent b .UserLink-link {
    font-weight: inherit
}

.RichContent.is-collapsed .RichContent-inner {
    max-height: 100px
}

.RichContent--unescapable.is-collapsed {
    position: relative;
    overflow: hidden
}

.RichContent--unescapable.is-collapsed .RichContent-inner {
    position: relative;
    transition: max-height .32s cubic-bezier(.95,.05,.795,.035),-webkit-mask-size .22s cubic-bezier(.95,.05,.795,.035);
    transition: mask-size .22s cubic-bezier(.95,.05,.795,.035),max-height .32s cubic-bezier(.95,.05,.795,.035);
    transition: mask-size .22s cubic-bezier(.95,.05,.795,.035),max-height .32s cubic-bezier(.95,.05,.795,.035),-webkit-mask-size .22s cubic-bezier(.95,.05,.795,.035);
    -webkit-mask-image: linear-gradient(#1a1a1a calc(100% - 8rem),transparent calc(100% - 2.8rem));
    mask-image: linear-gradient(#1a1a1a calc(100% - 8rem),transparent calc(100% - 2.8rem));
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%
}

html[data-theme=dark] .RichContent--unescapable.is-collapsed .RichContent-inner {
    -webkit-mask-image: linear-gradient(#999 calc(100% - 8rem),transparent calc(100% - 2.8rem));
    mask-image: linear-gradient(#999 calc(100% - 8rem),transparent calc(100% - 2.8rem))
}

.RichContent--unescapable.is-collapsed .ContentItem-actions {
    position: relative
}

.RichContent--unescapable.is-collapsed .ContentItem-rightButton {
    position: absolute;
    z-index: 1;
    bottom: 75px;
    left: 0;
    width: 100%;
    color: #175199;
    font-size: 15px
}

html[data-theme=dark] .RichContent--unescapable.is-collapsed .ContentItem-rightButton {
    color: #175199
}

@media (min-width: 690px) {
    .RichContent.is-collapsed {
        cursor:pointer;
        transition: color .14s ease-out
    }

    .RichContent.is-collapsed .CopyrightRichText-richText {
        pointer-events: none
    }

    .RichContent.is-collapsed .RichContent-inner:hover {
        color: #646464
    }

    html[data-theme=dark] .RichContent.is-collapsed .RichContent-inner:hover {
        color: #999
    }
}

.RichContent.is-collapsed:not(.RichContent--unescapable) .CopyrightRichText-richText {
    white-space: normal
}

.RichContent-inner {
    margin-top: 9px;
    margin-bottom: -4px;
    overflow: hidden
}

.RichContent-cover {
    position: relative;
    width: 190px;
    height: 105px;
    margin-top: -2px;
    margin-right: 18px;
    margin-bottom: 4px;
    float: left;
    overflow: hidden;
    background-position: 50%;
    background-size: cover;
    border-radius: 4px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.RichContent-cover+.RichContent-inner {
    margin-top: 16px
}

.RichContent-cover:after {
    position: absolute;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(26,26,26,.02);
    content: ""
}

html[data-theme=dark] .RichContent-cover:after {
    background: hsla(0,0%,60%,.02)
}

.RichContent-cover .VagueImage {
    vertical-align: top
}

.RichContent-cover-play {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.RichContent-cover-play .Icon {
    display: block
}

.RichContent-cover-inner {
    position: absolute;
    top: 50%;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    overflow: hidden
}

.RichContent-cover-inner img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.RichContent-cover>img {
    margin: 0!important
}

.RichContent-cover .zh-lightbox-thumb {
    cursor: pointer!important
}

.RichContent-cover--mobile {
    float: none;
    width: 100%;
    height: 0;
    padding: 21% 0;
    margin: 10px 0 -8px!important
}

@media (max-width: 320px) {
    .RichContent-collapsedText {
        display:none
    }
}

.RichContent-actions.is-fixed {
    -webkit-animation: .2s slideInUp;
    animation: .2s slideInUp
}

.RichContent-videoMore {
    text-align: center;
    font-size: 14px;
    margin-top: 30px;
    color: #0084ff
}

html[data-theme=dark] .RichContent-videoMore {
    color: #3a76d0
}

@-webkit-keyframes slideInUp {
    0% {
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

@keyframes slideInUp {
    0% {
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
        visibility: visible
    }

    to {
        -webkit-transform: translateZ(0);
        transform: translateZ(0)
    }
}

.ShareMenu-button {
    height: 40px;
    font-size: 14px
}

.ShareMenu-button .Zi--InsertLink {
    vertical-align: middle;
    margin-right: 4px;
    margin-left: -2px
}

.ShareMenu-wechat {
    padding-bottom: 12px
}

.ShareMenu-fakeQRCode {
    display: none
}

.ShareMenu-qrCode,.ShareMenu-wechatText {
    display: block
}

.ShareMenu-qrCode {
    width: 94px;
    height: 94px
}

.ShareMenu-isReviewing {
    margin-left: 24px
}

.CommentButton-text {
    margin-right: 4px
}

@media (max-width: 320px) {
    .CommentButton-text {
        display:none
    }
}

.QuestionItem-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.QuestionItem-muteStatus {
    display: inline-block;
    padding: 0 6px;
    margin-left: 8px;
    font-size: 12px;
    line-height: 1.5;
    color: #8590a6;
    cursor: default;
    background-color: #f6f6f6;
    border-radius: 3px
}

html[data-theme=dark] .QuestionItem-muteStatus {
    color: #606a80;
    background-color: #2e2e2e
}

.QuestionItem-icon {
    margin-left: 8px
}

.QuestionItem-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.QuestionItem-answerIcon {
    margin-right: 4px
}

.QuestionItem-mobileDot {
    margin: 0 10px
}

.QuestionItem-mobileDot:after {
    content: "\\2022"
}

.RadioButtons {
    font-size: 14px;
    color: #444
}

.RadioButtons-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    padding: 11px 0;
    border-bottom: 1px solid #f6f6f6
}

@media (max-width: 660px) {
    .RadioButtons-item {
        min-height:48px;
        line-height: 20px
    }
}

html[data-theme=dark] .RadioButtons-item {
    border-bottom: 1px solid #2e2e2e
}

.RadioButtons-text {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.RadioButtons-input {
    display: inline-block;
    width: 14px;
    height: 14px;
    padding: 2px;
    margin: 0 4px 0 0;
    vertical-align: middle;
    border: 2px solid #ebebeb;
    border-radius: 50%;
    transition: background-color,border-color .3s;
    background-clip: content-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none
}

.RadioButtons-input:checked {
    background-color: #0084ff;
    border-color: #0084ff
}

html[data-theme=dark] .RadioButtons-input:checked {
    background-color: #3a76d0;
    border-color: #3a76d0
}

.RadioButtons-input:focus {
    outline: none
}

html[data-theme=dark] .RadioButtons-input {
    border: 2px solid #444
}

html[data-theme=dark] .RadioButtons {
    color: gray
}

.AddAnnotationModal-description {
    color: #8590a6;
    font-size: 14px;
    margin: 20px 0
}

html[data-theme=dark] .AddAnnotationModal-description {
    color: #606a80
}

.AddAnnotationModal-body {
    max-height: 300px;
    overflow: scroll;
    margin: 0 -20px;
    padding: 0 20px
}

@media (max-width: 660px) {
    .AddAnnotationModal-body {
        margin:16px;
        padding: 0;
        max-height: inherit
    }
}

@media (max-width: 660px) {
    .AddAnnotationModal-buttonGroup {
        position:absolute;
        bottom: 10px;
        width: 100%;
        height: 36px;
        padding: 0 16px
    }
}

@media (max-width: 660px) {
    .CancelAnnotationModal {
        padding:16px
    }
}

@media (max-width: 660px) {
    .CancelAnnotationModal-Input {
        min-height:132px
    }
}

@media (max-width: 660px) {
    .CancelAnnotationModal-CancelButton {
        position:absolute;
        bottom: 10px;
        width: 343px!important;
        height: 36px
    }
}

.Annotation-mark {
    background-color: rgba(23,81,153,.05);
    margin-top: 16px;
    padding-bottom: 8px;
    border-radius: 4px;
    position: relative
}

@media (max-width: 660px) {
    .Annotation-mark {
        margin:16px 12px 0
    }
}

html[data-theme=dark] .Annotation-mark {
    background-color: rgba(23,81,153,.05)
}

.Annotation-markTitle {
    color: #1a1a1a;
    font-size: 15px;
    margin-left: 16px;
    padding-top: 16px;
    font-weight: 600
}

@media (max-width: 660px) {
    .Annotation-markTitle {
        margin:12px 12px 8px
    }
}

html[data-theme=dark] .Annotation-markTitle {
    color: #999
}

.Annotation-markSummary {
    color: #1a1a1a;
    font-size: 14px;
    margin: 4px 16px 0;
    line-height: 24px;
    overflow: auto
}

.Annotation-markSummary a {
    cursor: pointer;
    color: #175199;
    text-decoration: underline
}

html[data-theme=dark] .Annotation-markSummary a {
    color: #175199
}

@media (max-width: 660px) {
    .Annotation-markSummary {
        margin:12px
    }
}

html[data-theme=dark] .Annotation-markSummary {
    color: #999
}

.Annotation-complaintHelp {
    position: absolute;
    top: 18px;
    right: 16px
}

.UserItem-avatar .Avatar,.UserItem-avatar .Popover {
    display: block
}

.UserItem-title {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.UserItem-name,.UserItem-name .UserLink-badge,.UserItem-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.UserItem-name .UserLink-badge {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.UserItem-headline {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.UserItem-business {
    font-size: 14px;
    color: #1a1a1a
}

html[data-theme=dark] .UserItem-business {
    color: #999
}

.UserItem-company:after {
    margin: 0 5px;
    color: #ebebeb;
    content: "|"
}

html[data-theme=dark] .UserItem-company:after {
    color: #444
}

.ContentItem-rewardDetails {
    margin-top: -10px
}

.ContentItem-rewardAmount {
    font-size: 18px;
    color: #444;
    line-height: 25px
}

html[data-theme=dark] .ContentItem-rewardAmount {
    color: gray
}

.ContentItem-rewardTime {
    margin-top: 6px;
    font-size: 15px;
    color: #8590a6;
    line-height: 21px;
    text-align: right
}

html[data-theme=dark] .ContentItem-rewardTime {
    color: #606a80
}

.VoterList {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%
}

.VoterList-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: scroll
}

.VoterList-description {
    text-align: center;
    color: #8590a6;
    font-size: 14px;
    background: rgba(133,144,166,.1)
}

.VoterList-description p {
    margin: 12px 24px
}

html[data-theme=dark] .VoterList-description {
    color: #606a80;
    background: rgba(96,106,128,.1)
}

.Voters {
    color: #8590a6
}

html[data-theme=dark] .Voters {
    color: #606a80
}

.AnswerModal-list {
    font-size: 14px;
    line-height: 1.75
}

.AnswerModal-list>li:not(:first-child) {
    margin-top: 4px
}

.AnswerModal-moreLink {
    display: inline-block;
    margin-top: 8px;
    border-bottom: 1px solid transparent;
    font-size: 14px;
    color: #175199
}

.AnswerModal-moreLink:hover,html[data-theme=dark] .AnswerModal-moreLink:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerModal-moreLink {
    color: #175199
}

.RewardForm-rewardModal {
    width: 536px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .RewardForm-rewardModal {
    color: #606a80
}

.RewardForm-rewardTitle {
    color: #444;
    font-size: 24px;
    margin: 40px auto 24px;
    text-align: center
}

html[data-theme=dark] .RewardForm-rewardTitle {
    color: gray
}

.RewardForm-rewardInput {
    width: 488px;
    height: 48px;
    line-height: 48px;
    border: 1px solid #d3d3d3;
    border-radius: 3px
}

.RewardForm-rewardInput input {
    height: 36px
}

html[data-theme=dark] .RewardForm-rewardInput {
    border: 1px solid #2e2e2e
}

.RewardForm-rewardCheckbox {
    margin-top: 5px;
    margin-right: 8px;
    display: inline-block
}

.RewardForm-rewardLink {
    color: #0084ff
}

html[data-theme=dark] .RewardForm-rewardLink {
    color: #3a76d0
}

.RewardForm-prompting {
    display: inline-block;
    position: absolute;
    right: 22px
}

.RewardForm-remark {
    margin: 16px 0 39px
}

.RewardForm-Protocol,.RewardForm-Protocol p {
    display: inline-block
}

.RewardForm-rewardSubmit {
    width: 220px;
    height: 36px;
    display: block;
    margin: 0 auto;
    background: #0084ff;
    border-radius: 3px;
    border: 1px solid #0084ff;
    color: #fff
}

.RewardForm-rewardSubmit:hover {
    background-color: #0084ff!important;
    color: #fff
}

html[data-theme=dark] .RewardForm-rewardSubmit:hover {
    background-color: #3a76d0!important;
    color: #1a1a1a
}

html[data-theme=dark] .RewardForm-rewardSubmit {
    background: #3a76d0;
    border: 1px solid #3a76d0;
    color: #1a1a1a
}

.RewardForm-rewardSubmit-disabled {
    border: 1px solid #d3d3d3
}

html[data-theme=dark] .RewardForm-rewardSubmit-disabled {
    border: 1px solid #2e2e2e
}

@media (max-width: 690px) {
    .RewardForm-rewardModal {
        width:100%
    }

    .RewardForm-rewardInput {
        width: 90%;
        margin: 0 auto
    }

    .RewardForm-remark {
        text-align: center
    }

    .RewardForm-prompting {
        position: static
    }
}

@-webkit-keyframes fsFadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes fsFadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@-webkit-keyframes fsFadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@keyframes fsFadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@-webkit-keyframes fsSlideUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(40px);
        transform: translateY(40px)
    }

    to {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes fsSlideUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(40px);
        transform: translateY(40px)
    }

    to {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@-webkit-keyframes fsSlideDown {
    0% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    to {
        opacity: 0;
        -webkit-transform: translateY(40px);
        transform: translateY(40px)
    }
}

@keyframes fsSlideDown {
    0% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }

    to {
        opacity: 0;
        -webkit-transform: translateY(40px);
        transform: translateY(40px)
    }
}

.AnswerForm {
    position: relative
}

.AnswerForm--bordered {
    border: 1px solid #ebebeb;
    border-radius: 3px
}

html[data-theme=dark] .AnswerForm--bordered {
    border: 1px solid #444
}

.AnswerForm:not(.AnswerForm--bordered) .Editable-toolbar {
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .AnswerForm:not(.AnswerForm--bordered) .Editable-toolbar {
    border-top: 1px solid #444
}

.AnswerForm--isToolbarSticky .Editable-toolbar,.AnswerForm .Sticky.is-fixed .Editable-toolbar {
    border-top: none;
    border-bottom: none
}

.AnswerForm--isToolbarSticky .Editable-toolbar:after,.AnswerForm .Sticky.is-fixed .Editable-toolbar:after {
    content: " ";
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    pointer-events: none;
    height: 3px;
    background: radial-gradient(ellipse at 50% 1%,rgba(26,26,26,.1),hsla(0,0%,100%,0) 80%)
}

html[data-theme=dark] .AnswerForm--isToolbarSticky .Editable-toolbar:after,html[data-theme=dark] .AnswerForm .Sticky.is-fixed .Editable-toolbar:after {
    background: radial-gradient(ellipse at 50% 1%,hsla(0,0%,60%,.1),rgba(26,26,26,0) 80%)
}

.AnswerForm-fullscreenBackdrop {
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26,26,26,.3);
    -webkit-animation: fsFadeIn .3s ease-in-out;
    animation: fsFadeIn .3s ease-in-out
}

.AnswerForm-fullscreenBackdrop.isLeaveActive {
    -webkit-animation: fsFadeOut .3s ease-out;
    animation: fsFadeOut .3s ease-out
}

html[data-theme=dark] .AnswerForm-fullscreenBackdrop {
    background: hsla(0,0%,60%,.3)
}

.AnswerForm-fullscreenScroller {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 52px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background: #fff
}

html[data-theme=dark] .AnswerForm-fullscreenScroller {
    background: #1a1a1a
}

.AnswerForm-cloneEditor {
    opacity: 1
}

.AnswerForm-fullscreenContent {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-animation: fsSlideUp .3s ease-in-out;
    animation: fsSlideUp .3s ease-in-out
}

.AnswerForm-fullscreenContent.isLeaveActive {
    -webkit-animation: fsSlideDown .3s ease-out;
    animation: fsSlideDown .3s ease-out
}

.AnswerForm-fullscreenContent .RichText {
    height: calc(100% - 52px);
    min-height: 0!important
}

.AnswerForm-fullscreenContent .Editable {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
    border: none;
    overflow: visible
}

.AnswerForm-fullscreenContent .Editable-toolbar {
    position: -webkit-sticky;
    position: sticky;
    z-index: 10;
    top: 0;
    border-color: #ebebeb;
    border-width: 1px 0;
    background: #fff
}

html[data-theme=dark] .AnswerForm-fullscreenContent .Editable-toolbar {
    border-color: #444;
    background: #1a1a1a
}

.AnswerForm-fullscreenContent .AnswerForm-container {
    margin-left: auto;
    margin-right: auto;
    max-width: 688px;
    width: 100%
}

.AnswerForm-fullscreenContent .AnswerForm-editor {
    position: static;
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.AnswerForm-fullscreenContent .AnswerForm-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 3px 0 rgba(23,81,153,.05)
}

html[data-theme=dark] .AnswerForm-fullscreenContent .AnswerForm-footer {
    box-shadow: 0 -1px 3px 0 rgba(23,81,153,.05)
}

.AnswerForm-enterFullscreenButton {
    padding: 0 6px
}

.AnswerForm-exitFullscreenButton {
    position: fixed;
    z-index: 11;
    top: 17px;
    right: 17px;
    padding: 0 8px;
    line-height: 30px;
    background: #ebebeb;
    border-radius: 4px;
    border: none
}

.AnswerForm-exitFullscreenButton .Icon {
    margin-right: 8px;
    fill: currentColor
}

.AnswerForm-exitFullscreenButton:hover {
    color: gray;
    background: #ebebeb
}

html[data-theme=dark] .AnswerForm-exitFullscreenButton:hover {
    color: gray;
    background: #444
}

html[data-theme=dark] .AnswerForm-exitFullscreenButton {
    background: #444
}

.AnswerForm-title {
    margin: 16px 0;
    padding: 0 20px;
    font-size: 22px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .AnswerForm-title {
    font-weight: 500
}

html[data-android] .AnswerForm-title {
    font-weight: 700
}

.AnswerForm-editor.is-focus {
    border: none
}

.AnswerForm-editor .Dropzone-overlay {
    margin: 14px 24px
}

.AnswerForm-cloneEditor,.AnswerForm-editor {
    border: none;
    border-radius: 0
}

.AnswerForm-cloneEditor .DraftEditor-root,.AnswerForm-editor .DraftEditor-root {
    padding: 12px 20px;
    font-size: 15px
}

.AnswerForm-footer {
    position: relative;
    background: #fff
}

.AnswerForm--isFullscreen .AnswerForm-footer,.AnswerForm-footer.is-fixed,html[data-theme=dark] .AnswerForm--isFullscreen .AnswerForm-footer,html[data-theme=dark] .AnswerForm-footer.is-fixed {
    box-shadow: 0 -1px 3px 0 rgba(23,81,153,.05)
}

.AnswerForm-footer--hidden {
    pointer-events: none;
    opacity: 0
}

html[data-theme=dark] .AnswerForm-footer {
    background: #1a1a1a
}

.AnswerForm-footerContent {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 52px;
    padding: 12px 24px;
    box-sizing: border-box;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.AnswerForm-status {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .AnswerForm-status {
    color: #606a80
}

.AnswerForm-delete {
    margin-right: 12px
}

.AnswerForm-delete:hover .Icon {
    fill: #999
}

html[data-theme=dark] .AnswerForm-delete:hover .Icon {
    fill: #646464
}

.AnswerForm-draftStatus--failed {
    color: #f1403c
}

html[data-theme=dark] .AnswerForm-draftStatus--failed {
    color: #b7302d
}

.AnswerForm-footerRight {
    transition: opacity .3s ease-out;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.AnswerForm-submit {
    margin-left: 22px
}

.AnswerForm-cancel {
    cursor: pointer;
    color: #175199
}

.AnswerForm-cancel:hover,html[data-theme=dark] .AnswerForm-cancel:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerForm-cancel {
    color: #175199
}

.AnswerForm-Notication {
    position: absolute;
    right: 300px;
    display: inline-block;
    background: #1a1a1a;
    margin-left: 129px;
    height: 20px;
    opacity: .8;
    color: #fff;
    padding: 8px;
    line-height: 20px;
    border-radius: 4px;
    font-size: 14px
}

.AnswerForm-Notication:after {
    position: absolute;
    right: -12px;
    z-index: 3;
    width: 0;
    height: 0;
    margin: auto;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    border-radius: 1px;
    content: "";
    border-bottom: 8px solid #1a1a1a;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    margin-top: 6px
}

html[data-theme=dark] .AnswerForm-Notication:after {
    border-bottom: 8px solid #999
}

html[data-theme=dark] .AnswerForm-Notication {
    background: #999;
    color: #1a1a1a
}

.AnswerForm-openRewardButton {
    margin-left: auto;
    position: absolute;
    right: 250px
}

.AnswerForm-openRewardDraftsLabel {
    right: 200px
}

.AnswerForm-openRewardLabel {
    color: #8590a6;
    font-size: 14px
}

.AnswerForm-openRewardLabel input {
    margin-right: 9px
}

html[data-theme=dark] .AnswerForm-openRewardLabel {
    color: #606a80
}

.VoteDownReasonMenu-container {
    box-sizing: border-box;
    font-size: 14px;
    padding: 16px 20px;
    position: relative;
    width: 350px
}

.VoteDownReasonMenu-header {
    font-weight: 600;
    margin-bottom: 12px
}

.VoteDownReasonMenu-action {
    color: #8590a6;
    cursor: pointer;
    font-size: 13px;
    line-height: 20px;
    position: absolute;
    right: 20px;
    top: 16px
}

html[data-theme=dark] .VoteDownReasonMenu-action {
    color: #606a80
}

.VoteDownReasonMenu-spliter {
    background: #d3d3d3;
    display: inline-block;
    height: 12px;
    margin: 4px 6px 0 10px;
    vertical-align: top;
    width: 1px
}

html[data-theme=dark] .VoteDownReasonMenu-spliter {
    background: #2e2e2e
}

.VoteDownReasonMenu-closeButton {
    padding: 4px;
    vertical-align: top
}

.VoteDownReasonMenu-closeIcon {
    display: block
}

.VoteDownReasonMenu-reasonList {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.VoteDownReasonMenu-reason {
    background: #f6f6f6;
    border-radius: 3px;
    color: #0084ff;
    cursor: pointer;
    display: inline-block;
    line-height: 30px;
    margin-bottom: 10px;
    text-align: center;
    width: 150px
}

.VoteDownReasonMenu-reason:last-child,.VoteDownReasonMenu-reason:nth-last-child(2) {
    margin-bottom: 0
}

html[data-theme=dark] .VoteDownReasonMenu-reason {
    background: #2e2e2e;
    color: #3a76d0
}

.VoteDownReasonMenu-disableReasonHint {
    margin-bottom: 12px
}

.VoteDownReasonMenu-disableReasonButtonList {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.VoteDownReasonMenu-disableReasonButtonList .Button {
    line-height: 28px;
    width: 150px
}

.VoteButton {
    padding: 0 10px;
    color: #0084ff;
    background: rgba(0,132,255,.1);
    border-color: transparent
}

.VoteButton:not(:disabled):hover {
    background-color: rgba(0,132,255,.15)
}

html[data-theme=dark] .VoteButton:not(:disabled):hover {
    background-color: rgba(58,118,208,.15)
}

.VoteButton:disabled:hover {
    background: #f6f6f6
}

html[data-theme=dark] .VoteButton:disabled:hover {
    background: #2e2e2e
}

.VoteButton.is-active {
    color: #fff;
    background: #0084ff
}

.VoteButton.is-active:hover {
    background-color: #0084ff
}

html[data-theme=dark] .VoteButton.is-active:hover {
    background-color: #3a76d0
}

html[data-theme=dark] .VoteButton.is-active {
    color: #ebebeb;
    background: #3a76d0
}

html[data-theme=dark] .VoteButton {
    color: #3a76d0;
    background: rgba(58,118,208,.1)
}

.VoteButton:focus {
    outline: none
}

html:not([data-focus-method=pointer]) .VoteButton:focus {
    box-shadow: 0 0 0 2px #fff,0 0 0 4px rgba(0,132,255,.3)
}

html[data-theme=dark] html:not([data-focus-method=pointer]) .VoteButton:focus {
    box-shadow: 0 0 0 2px #1a1a1a,0 0 0 4px rgba(58,118,208,.3)
}

.VoteButton-TriangleUp {
    margin-right: 5px
}

.VoteButton--down {
    margin-left: 4px
}

.VoteButton--down.VoteButton--mobileDown {
    margin-left: 8px
}

.Reward-activateBtn {
    color: #fff;
    background: #f36;
    width: 80px;
    height: 34px;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-top: 60px
}

html[data-theme=dark] .Reward-activateBtn {
    color: #1a1a1a;
    background: #d92155
}

.Reward-activateHint {
    margin-bottom: 28px
}

.Reward-editButton {
    margin-left: 15px;
    cursor: pointer
}

.Reward-money {
    font-size: 24px;
    margin-top: 20px;
    font-weight: 600;
    font-synthesis: style;
    color: #444
}

html[data-ios] .Reward-money {
    font-weight: 500
}

html[data-android] .Reward-money {
    font-weight: 700
}

.Reward-money span {
    cursor: pointer
}

html[data-theme=dark] .Reward-money {
    color: gray
}

.Reward-User-text {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    cursor: pointer;
    margin: 0 auto 10px;
    max-width: 100px
}

.Reward-User-img {
    position: relative
}

.Reward-User-img:hover:after,.Reward-User-img:hover:before {
    visibility: visible;
    opacity: 1;
    transition-delay: .3s
}

.Reward-User-img:before {
    -webkit-transform: scale(-1);
    transform: scale(-1);
    width: 0;
    height: 0;
    margin: 0 0 0 -6px;
    font-size: 0;
    color: rgba(26,26,26,.8);
    border-bottom: 6px solid currentColor;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent
}

html[data-theme=dark] .Reward-User-img:before {
    color: hsla(0,0%,60%,.8)
}

.Reward-User-img:after,.Reward-User-img:before {
    content: "";
    position: absolute;
    visibility: hidden;
    opacity: 0;
    left: 38%;
    top: -20px;
    z-index: 10;
    transition: visibility .3s,opacity .3s
}

.Reward-User-img:after {
    content: attr(data-hover-title);
    -webkit-transform: translate(-50%,-100%);
    transform: translate(-50%,-100%);
    font-size: 13px;
    color: #fff;
    background: rgba(26,26,26,.8);
    border-radius: 4px;
    white-space: nowrap;
    padding: 3px 8px
}

html[data-theme=dark] .Reward-User-img:after {
    color: #1a1a1a;
    background: hsla(0,0%,60%,.8)
}

.Reward-MoreUser,.Reward-User-avatar {
    cursor: pointer;
    border-radius: 100px;
    height: 25px;
    width: 25px;
    margin-right: 9px
}

.Reward-MoreUser {
    text-align: center;
    display: inline-block;
    background: #f6f6f6
}

.Reward-MoreUser i {
    width: 3px;
    height: 3px;
    background: #bfbfbf;
    border-radius: 45%;
    position: absolute;
    margin-top: 11px;
    margin-left: -2px
}

.Reward-MoreUser i:first-child {
    margin-left: -8px
}

.Reward-MoreUser i:last-child {
    margin-left: 4px
}

html[data-theme=dark] .Reward-MoreUser i {
    background: gray
}

html[data-theme=dark] .Reward-MoreUser {
    background: #2e2e2e
}

.Reward-count,.Reward-countZero {
    margin-top: 20px
}

.Reward-rewardBtn {
    color: #fff;
    background: #f36;
    width: 80px;
    height: 34px;
    border-radius: 4px;
    margin-top: 27px
}

html[data-theme=dark] .Reward-rewardBtn {
    color: #1a1a1a;
    background: #d92155
}

.Reward {
    text-align: center;
    font-size: 14px
}

.Reward,html[data-theme=dark] .Reward {
    color: gray
}

.Reward-tagline {
    margin-top: 60px;
    line-height: 18px;
    font-size: 15px
}

.TPass {
    display: inline-block;
    border-color: #bfbfbf
}

html[data-theme=dark] .TPass {
    border-color: gray
}

.TPass-wrapper {
    display: block;
    position: relative;
    font-size: 14px;
    color: #646464;
    border-color: inherit
}

html[data-theme=dark] .TPass-wrapper {
    color: #999
}

.TPass-input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 1px;
    margin-left: 1px;
    padding: 0;
    width: 50px;
    height: 50px;
    border: 0;
    border-radius: 4px;
    line-height: 50px;
    text-align: center;
    color: currentColor;
    transition: opacity .1s
}

.TPass-input::-webkit-inner-spin-button,.TPass-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none
}

.TPass-input:focus {
    opacity: 1
}

.TPassBoxes {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 352px;
    line-height: 1;
    vertical-align: top;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.TPassBox {
    box-sizing: border-box;
    border-radius: 4px;
    display: block;
    width: 50px;
    height: 50px;
    border: 1px solid;
    border-color: inherit;
    line-height: 50px;
    text-align: center;
    vertical-align: top
}

.TPassBox-mask:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: currentColor;
    color: gray
}

html[data-theme=dark] .TPassBox-mask:before {
    color: gray
}

.TPassBox,.TPassBoxes {
    transition: border-color .1s
}

.Spinner {
    contain: strict;
    display: block;
    margin: 0 auto;
    width: 24px;
    height: 24px;
    line-height: 24px
}

.Spinner-loading {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 auto;
    border-radius: 100px;
    border: 4px solid #f1403c;
    border-top-color: transparent;
    -webkit-animation: rotate .8s infinite linear;
    animation: rotate .8s infinite linear
}

html[data-theme=dark] .Spinner-loading {
    border: 4px solid #b7302d
}

@-webkit-keyframes rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

.Payment {
    font-size: 14px;
    text-align: center;
    color: #646464;
    margin-top: 16px
}

html[data-theme=dark] .Payment {
    color: #999
}

.Payment-placeholder {
    height: 20px;
    padding: 70px;
    text-align: center
}

.Payment-placehoder--empty {
    margin-bottom: -16px
}

.PaymentsList {
    text-align: left;
    margin: 0 -16px -16px;
    line-height: 50px
}

.PaymentsList .Popover {
    position: absolute;
    right: 26px
}

.Payment-Popover {
    border: none;
    padding-left: 4px;
    padding-right: 0
}

.Payment-Bottomline,.Payment-Topline {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    color: #ebebeb;
    background: currentColor;
    width: 353px;
    margin-left: 23px
}

html[data-theme=dark] .Payment-Bottomline,html[data-theme=dark] .Payment-Topline {
    color: #444
}

.PaymentWay {
    font-size: 14px;
    color: #999;
    margin-left: 23px;
    margin-right: 118px
}

html[data-theme=dark] .PaymentWay {
    color: #646464
}

.Payment-select-list,.Popover-targetContainer-verification {
    width: auto;
    min-width: 187px
}

.PaymentItem svg {
    margin-right: 4px
}

.PaymentItem:hover {
    background: #f6f6f6
}

html[data-theme=dark] .PaymentItem:hover {
    background: #2e2e2e
}

.PaymentItem .icon {
    vertical-align: -4px;
    margin-right: 6px
}

.PaymentItem--disabled {
    color: #999;
    pointer-events: none
}

html[data-theme=dark] .PaymentItem--disabled {
    color: #646464
}

.Payment-balancePay,.Payment-wechatPay {
    line-height: 40px;
    padding-top: 20px;
    padding-bottom: 8px
}

.Payment-balancePay .icon,.Payment-wechatPay .icon {
    margin-right: 6px
}

.Payment-balancePayTitle,.Payment-wechatPayTitle {
    font-size: 24px;
    color: #444;
    line-height: 33px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

html[data-theme=dark] .Payment-balancePayTitle,html[data-theme=dark] .Payment-wechatPayTitle {
    color: gray
}

.PaymentIconWechat {
    color: #999
}

html[data-theme=dark] .PaymentIconWechat {
    color: #646464
}

.PaymentIconWallet {
    color: #0084ff
}

.PaymentItem--disabled .PaymentIconWallet {
    color: #999
}

html[data-theme=dark] .PaymentItem--disabled .PaymentIconWallet {
    color: #646464
}

html[data-theme=dark] .PaymentIconWallet {
    color: #3a76d0
}

.Payment-CheckedButton {
    display: block;
    margin: 19px 24px 0 22px;
    height: 44px;
    width: 353px;
    border-radius: 4px;
    background: #0084ff;
    border: 1px solid #0084ff;
    color: #fff;
    font-size: 16px
}

.Payment-CheckedButton:hover {
    background-color: #0084ff
}

html[data-theme=dark] .Payment-CheckedButton:hover {
    background-color: #3a76d0
}

@media (max-width: 690px) {
    .Payment-CheckedButton {
        width:295px;
        margin-bottom: 20px
    }
}

html[data-theme=dark] .Payment-CheckedButton {
    background: #3a76d0;
    border: 1px solid #3a76d0;
    color: #1a1a1a
}

.Payment-balancePaySms {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    position: relative
}

.Payment-balancePaySmsText,.Payment-sms {
    -webkit-box-flex: 100%;
    -ms-flex: 100%;
    flex: 100%
}

.Payment-sendSms {
    position: absolute;
    right: 0;
    top: 44px;
    border: none;
    line-height: 33px;
    color: currentColor;
    background: none
}

.Payment-sendSms:hover {
    text-decoration: underline;
    cursor: pointer
}

.Payment-sendSms[disabled] {
    color: #999;
    cursor: not-allowed
}

html[data-theme=dark] .Payment-sendSms[disabled] {
    color: #646464
}

.Payment-qrPlaceholder,.Payment-qrWrapper {
    margin: 0 auto;
    width: 115px;
    height: 115px;
    color: #999
}

.Payment-qrPlaceholder i,.Payment-qrWrapper i {
    margin: 20px
}

.Payment-qrPlaceholder img,.Payment-qrWrapper img {
    width: 115px;
    height: 115px
}

html[data-theme=dark] .Payment-qrPlaceholder,html[data-theme=dark] .Payment-qrWrapper {
    color: #646464
}

.Payment-qrPlaceholder {
    padding-top: 30px
}

.Payment-qrPlaceholder img {
    position: absolute;
    bottom: 0;
    opacity: .01
}

.Payment-balancePayFooter {
    padding: 20px 0 0;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.Payment-balancePayConfirmBtn {
    width: 60px;
    padding: 0
}

.Payment-balancePayForget {
    font-size: 13px;
    line-height: 24px;
    color: #8590a6;
    margin-top: 20px
}

html[data-theme=dark] .Payment-balancePayForget {
    color: #606a80
}

.Payment-errorTip {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #f1403c;
    text-align: center;
    line-height: 36px
}

html[data-theme=dark] .Payment-errorTip {
    color: #b7302d
}

.Payment-errorInput {
    border-color: #f1403c
}

.Payment-errorInput .TPass-wrapper {
    color: #f1403c
}

html[data-theme=dark] .Payment-errorInput .TPass-wrapper {
    color: #b7302d
}

html[data-theme=dark] .Payment-errorInput {
    border-color: #b7302d
}

.Payment-errorInput input {
    outline-color: #f1403c
}

html[data-theme=dark] .Payment-errorInput input {
    outline-color: #b7302d
}

.Payment-tpass {
    position: relative;
    margin-top: 41px
}

.Payment-tpass .TPass-wrapper {
    color: #bfbfbf
}

html[data-theme=dark] .Payment-tpass .TPass-wrapper {
    color: gray
}

.Payment-progressing .TPass-wrapper {
    visibility: hidden
}

.Payment-balancePaySpinner {
    margin-top: -24px;
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px)
}

.Payment-email {
    color: #0084ff
}

html[data-theme=dark] .Payment-email {
    color: #3a76d0
}

.Payment-description {
    font-size: 14px;
    color: #8590a6;
    line-height: 24px;
    margin-top: 2px
}

html[data-theme=dark] .Payment-description {
    color: #606a80
}

.Reward-TipjarDialogModal {
    width: 400px
}

.Reward-TipjarDialog {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch
}

.Reward-TipjarDialog-user {
    font-size: 18px;
    color: #444;
    font-weight: 600;
    font-synthesis: style;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 16px 0 0
}

html[data-ios] .Reward-TipjarDialog-user {
    font-weight: 500
}

html[data-android] .Reward-TipjarDialog-user {
    font-weight: 700
}

.Reward-TipjarDialog-user .Reward-UserAvatar {
    margin-right: 16px;
    display: inline-block;
    vertical-align: middle
}

.Reward-TipjarDialog-user .Reward-UserAvatar img {
    display: block;
    border-radius: 2px
}

html[data-theme=dark] .Reward-TipjarDialog-user {
    color: gray
}

.Reward-Avatar {
    width: 36px;
    height: 36px
}

.Reward-TipjarDialog-tagLine {
    height: 30px;
    font-size: 14px;
    margin-top: 20px;
    line-height: 30px;
    background: #f6f6f6;
    border-radius: 4px;
    padding: 5px 10px;
    color: #444;
    margin-bottom: 20px;
    position: relative
}

html[data-theme=dark] .Reward-TipjarDialog-tagLine {
    background: #2e2e2e;
    color: gray
}

.Reward-TipjarDialog-selectAmount {
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch
}

.Reward-TipjarDialog-amountList,.Reward-TipjarDialog-selectAmount {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal
}

.Reward-TipjarDialog-amountList {
    -webkit-box-orient: horizontal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.Reward-TipjarDialog-amountList .Button {
    width: 28%;
    margin: 0 0 24px;
    font-size: 14px
}

.Reward-TipjarDialog-amountList .Button--red {
    border-color: #f1403c;
    color: #f1403c
}

html[data-theme=dark] .Reward-TipjarDialog-amountList .Button--red {
    border-color: #b7302d;
    color: #b7302d
}

.Reward-TipjarDialog-amountList .Reward-Button-checked {
    background: #f1403c;
    color: #fff
}

html[data-theme=dark] .Reward-TipjarDialog-amountList .Reward-Button-checked {
    background: #b7302d;
    color: #1a1a1a
}

.Reward-TipjarDialog-amountList b {
    margin-right: .2em;
    font-size: 16px
}

.Reward-TipjarDialog-amountCustom {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 6px
}

.Reward-TipjarDialog-amountCustom,.Reward-TipjarDialog-amountInput {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.Reward-TipjarDialog-amountInput {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%
}

.Reward-TipjarDialog-amountInput .Button {
    margin-left: 21px;
    height: 34px;
    width: 68px;
    line-height: 34px;
    margin-top: 1px
}

.Reward-TipjarDialog-amountInput .SimpleInput {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-height: 0;
    outline: none;
    padding: 0 4px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 2px;
    border: 1px solid #d3d3d3;
    box-shadow: 0 1px 2px 0 hsla(0,0%,100%,.12);
    border-radius: 3px;
    width: 261px;
    height: 36px
}

.Reward-TipjarDialog-amountInput .SimpleInput::-webkit-input-placeholder {
    color: #8590a6
}

.Reward-TipjarDialog-amountInput .SimpleInput:-ms-input-placeholder {
    color: #8590a6
}

.Reward-TipjarDialog-amountInput .SimpleInput::placeholder {
    color: #8590a6
}

html[data-theme=dark] .Reward-TipjarDialog-amountInput .SimpleInput::-webkit-input-placeholder {
    color: #606a80
}

html[data-theme=dark] .Reward-TipjarDialog-amountInput .SimpleInput:-ms-input-placeholder {
    color: #606a80
}

html[data-theme=dark] .Reward-TipjarDialog-amountInput .SimpleInput::placeholder {
    color: #606a80
}

html[data-theme=dark] .Reward-TipjarDialog-amountInput .SimpleInput {
    border: 1px solid #2e2e2e;
    box-shadow: 0 1px 2px 0 rgba(26,26,26,.12)
}

.TipjarDialog-customButton {
    display: block;
    margin: 0 auto;
    color: #f1403c
}

html[data-theme=dark] .TipjarDialog-customButton {
    color: #b7302d
}

.TipjarDialog-customButton-cheked {
    background: #f1403c;
    border: 1px solid #f1403c;
    border-radius: 3px;
    width: 140px;
    height: 34px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    margin: 0 auto;
    display: block
}

.TipjarDialog-customButton-cheked:hover {
    background-color: #f1403c
}

html[data-theme=dark] .TipjarDialog-customButton-cheked:hover {
    background-color: #b7302d
}

html[data-theme=dark] .TipjarDialog-customButton-cheked {
    background: #b7302d;
    border: 1px solid #b7302d;
    color: #1a1a1a
}

.Reward-TipjarDialog-error {
    color: #f1403c;
    margin-top: 6px;
    display: none;
    -webkit-box-flex: 100%;
    -ms-flex: 100%;
    flex: 100%;
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1
}

html[data-theme=dark] .Reward-TipjarDialog-error {
    color: #b7302d
}

@media (max-width: 690px) {
    .Reward-TipjarDialogModal {
        width:90%
    }

    .Reward-TipjarDialog-amountList .Button {
        height: 40px;
        width: 87px
    }

    .Reward-TipjarDialog-amountList b {
        margin-right: 0
    }
}

.CommercialQuestionTail {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    color: #0084ff
}

html[data-theme=dark] .CommercialQuestionTail {
    color: #3a76d0
}

.CommercialQuestionTail-Icon {
    color: #0084ff;
    margin-left: 4px
}

html[data-theme=dark] .CommercialQuestionTail-Icon {
    color: #3a76d0
}

.AnswerItem-meta {
    position: relative;
    margin-top: 14px
}

.AnswerItem-meta .AnswerItem-sticky {
    font-size: 14px;
    color: #8590a6;
    cursor: default
}

html[data-theme=dark] .AnswerItem-meta .AnswerItem-sticky {
    color: #606a80
}

.AnswerItem-selfMenu {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .AnswerItem-selfMenu {
    color: #606a80
}

.AnswerItem-selfMenuItem {
    line-height: 40px
}

.AnswerItem-selectMenuItem {
    position: relative;
    padding-left: 44px;
    line-height: 40px
}

.AnswerItem-selectMenuItem .Icon {
    position: absolute;
    top: 10px;
    left: 20px
}

.AnswerItem-commercialBadge {
    display: block;
    background-color: hsla(37,47%,60%,.1);
    color: #c2a469;
    font-size: 14px;
    padding: 12px;
    margin-top: 12px;
    border-radius: 4px
}

html[data-theme=dark] .AnswerItem-commercialBadge {
    color: #806e46
}

.AnswerItem-extraInfo {
    margin-top: 10px;
    margin-bottom: -4px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .AnswerItem-extraInfo {
    color: #606a80
}

.AnswerItem-statusContent {
    padding: 16px;
    margin: 16px 0;
    background: #f6f6f6;
    border-radius: 4px
}

html[data-theme=dark] .AnswerItem-statusContent {
    background: #2e2e2e
}

.AnswerItem-statusReason {
    font-size: 15px;
    line-height: 26px;
    color: #1a1a1a;
    font-weight: 600;
    font-synthesis: style;
    margin-bottom: 3px
}

html[data-ios] .AnswerItem-statusReason {
    font-weight: 500
}

html[data-android] .AnswerItem-statusReason {
    font-weight: 700
}

html[data-theme=dark] .AnswerItem-statusReason {
    color: #999
}

.AnswerItem-statusDescription {
    font-size: 14px;
    line-height: 26px;
    color: #1a1a1a
}

.AnswerItem-statusDescription .RichContent-inner {
    margin-top: 0
}

.AnswerItem-statusDescription .RichContent.is-collapsed .RichContent-inner:hover {
    color: #1a1a1a
}

html[data-theme=dark] .AnswerItem-statusDescription .RichContent.is-collapsed .RichContent-inner:hover {
    color: #999
}

.AnswerItem-statusDescription .ContentItem-arrowIcon {
    display: none
}

html[data-theme=dark] .AnswerItem-statusDescription {
    color: #999
}

.AnswerItem-statusLink {
    border-bottom: 1px solid #8590a6
}

.AnswerItem-statusLink:active,.AnswerItem-statusLink:hover {
    color: #175199;
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerItem-statusLink:active,html[data-theme=dark] .AnswerItem-statusLink:hover {
    color: #175199;
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerItem-statusLink {
    border-bottom: 1px solid #606a80
}

.AnswerItem-complaintLink {
    color: #175199;
    font-weight: 400;
    padding-bottom: 2px
}

.AnswerItem-complaintLink:hover,html[data-theme=dark] .AnswerItem-complaintLink:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerItem-complaintLink {
    color: #175199
}

.AnswerItem-complaintHelp {
    float: right
}

.AnswerItem-complaintIcon {
    position: relative;
    top: -1px
}

.AnswerItem-status {
    padding: 16px;
    margin: 16px 0;
    color: #8590a6;
    background: #ebebeb;
    border-radius: 4px
}

.AnswerItem-status a {
    color: #175199
}

.AnswerItem-status a:hover,html[data-theme=dark] .AnswerItem-status a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerItem-status a {
    color: #175199
}

html[data-theme=dark] .AnswerItem-status {
    color: #606a80;
    background: #444
}

.AnswerItem-deleted {
    font-size: 15px;
    color: #8590a6;
    text-align: center
}

.AnswerItem-deleted a {
    font-size: inherit;
    cursor: pointer;
    color: #175199
}

.AnswerItem-deleted a:hover,html[data-theme=dark] .AnswerItem-deleted a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerItem-deleted a {
    color: #175199
}

html[data-theme=dark] .AnswerItem-deleted {
    color: #606a80
}

.AnswerItem-form {
    margin-top: 24px
}

.AnswerItem-CommercialQuestionTail {
    margin-top: 10px
}

.AnswerItem-editButton {
    color: #175199;
    cursor: pointer
}

.AnswerItem-editButton:hover .AnswerItem-editButtonText,html[data-theme=dark] .AnswerItem-editButton:hover .AnswerItem-editButtonText {
    border-bottom: 1px solid #175199
}

.AnswerItem-editButton .Icon,html[data-theme=dark] .AnswerItem-editButton .Icon {
    fill: #175199
}

html[data-theme=dark] .AnswerItem-editButton {
    color: #175199
}

.AnswerItem-mainAction {
    margin-right: 16px;
    border-color: #0084ff;
    color: #0084ff
}

.AnswerItem-mainAction--disabled {
    opacity: .5
}

html[data-theme=dark] .AnswerItem-mainAction {
    border-color: #3a76d0;
    color: #3a76d0
}

.Mobile-body .AnswerItem-mainAction {
    margin-right: 12px;
    padding: 0 10px;
    line-height: 28px;
    font-size: 12px
}

.Mobile-body .AnswerItem .Icon--comment,.Mobile-body .AnswerItem .Icon--dots,.Mobile-body .AnswerItem .Icon--setting,.Mobile-body .AnswerItem .Icon--star {
    width: 16px!important
}

.AnswerItem-authorInfo {
    margin-top: 10px
}

.AnswerItem-authorInfo--related {
    margin-top: 0
}

.AnswerItem-brandQuestionPrizeTip {
    margin-top: 8px;
    font-size: 15px;
    color: #8590a6
}

.AnswerItem-brandQuestionPrizeTip a {
    margin-left: 5px;
    color: #0084ff
}

html[data-theme=dark] .AnswerItem-brandQuestionPrizeTip a {
    color: #3a76d0
}

html[data-theme=dark] .AnswerItem-brandQuestionPrizeTip {
    color: #606a80
}

.LikeButton {
    padding: 0 15px;
    text-align: center;
    color: #0084ff;
    background: rgba(0,132,255,.1);
    border-color: transparent;
    border-radius: 3px;
    box-sizing: border-box
}

.LikeButton:not(:disabled):hover {
    background-color: rgba(0,132,255,.15)
}

html[data-theme=dark] .LikeButton:not(:disabled):hover {
    background-color: rgba(58,118,208,.15)
}

.LikeButton:disabled:hover {
    background: #f6f6f6
}

html[data-theme=dark] .LikeButton:disabled:hover {
    background: #2e2e2e
}

.LikeButton.is-active {
    color: #fff;
    background: #0084ff
}

.LikeButton.is-active:hover {
    background-color: #0084ff
}

html[data-theme=dark] .LikeButton.is-active:hover {
    background-color: #3a76d0
}

html[data-theme=dark] .LikeButton.is-active {
    color: #ebebeb;
    background: #3a76d0
}

.LikeButton .Icon {
    margin-right: 7px;
    fill: currentColor
}

html[data-theme=dark] .LikeButton {
    color: #3a76d0;
    background: rgba(58,118,208,.1)
}

.ArticleItem-authorInfo {
    margin-top: 14px
}

.ArticleItem-extraInfo {
    margin-top: 8px;
    margin-bottom: -3px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .ArticleItem-extraInfo {
    color: #606a80
}

.ArticleItem-image {
    margin-top: 10px;
    width: 100%
}

.ArticleItem .RichContent-cover-inner img {
    -o-object-fit: cover;
    object-fit: cover
}

.ArticleItem-status {
    padding: 16px;
    margin: 16px 0;
    color: #8590a6;
    background: #ebebeb;
    border-radius: 4px
}

.ArticleItem-status a {
    color: #175199
}

.ArticleItem-status a:hover,html[data-theme=dark] .ArticleItem-status a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .ArticleItem-status a {
    color: #175199
}

html[data-theme=dark] .ArticleItem-status {
    color: #606a80;
    background: #444
}

.ArticleItem-selfMenuItem {
    line-height: 40px
}

.ArticleItem-selfMenu {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .ArticleItem-selfMenu {
    color: #606a80
}

.ColumnItem {
    position: relative
}

.ColumnItem-more {
    position: absolute;
    top: 0;
    right: 0
}

.ColumnItem-botton {
    display: block;
    width: 96px;
    line-height: 40px
}

.EBookItem .ContentItem-title {
    margin-top: 0
}

.EBookItem-description {
    line-height: 27px;
    margin-top: 12px;
    margin-bottom: 16px;
    color: #1a1a1a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

html[data-theme=dark] .EBookItem-description {
    color: #999
}

.EBookItem-image {
    border-radius: 3px;
    box-shadow: 0 1px 4px 0 rgba(26,26,26,.12);
    vertical-align: top
}

html[data-theme=dark] .EBookItem-image {
    box-shadow: 0 1px 4px 0 hsla(0,0%,60%,.12)
}

.EBookItem-actions {
    margin-top: 4px
}

.EBookItem-price {
    color: #f1403c
}

.EBookItem-price del {
    margin-left: 6px;
    color: #8590a6
}

html[data-theme=dark] .EBookItem-price del {
    color: #606a80
}

html[data-theme=dark] .EBookItem-price {
    color: #b7302d
}

.TopicItem-statusLink {
    font-size: 14px;
    color: #175199
}

html[data-theme=dark] .TopicItem-statusLink {
    color: #175199
}

.FavlistItem-title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.FavlistItem-lockIcon {
    margin-left: 8px
}

.FavlistItem-follow {
    width: 90px
}

.RoundtableItem-badge {
    display: inline-block;
    padding: 3px 6px;
    font-size: 12px;
    white-space: nowrap;
    color: #8590a6;
    vertical-align: 1px;
    background-color: #f6f6f6;
    border-radius: 3px;
    line-height: 1;
    margin-left: 8px
}

.RoundtableItem-badge .Icon {
    margin-right: 6px
}

html[data-theme=dark] .RoundtableItem-badge {
    color: #606a80;
    background-color: #2e2e2e
}

.LiveAvatar-wrapper {
    position: relative;
    display: inline-block;
    overflow: hidden;
    border-radius: 10%
}

.LiveAvatar-column {
    display: inline-block;
    width: calc(50% - 1px);
    height: 100%;
    overflow: hidden
}

.LiveAvatar-img {
    display: block;
    border-radius: inherit
}

.LiveAvatar-img.alignCenter {
    -webkit-transform: translateX(-25%);
    transform: translateX(-25%)
}

.LiveAvatar-img+.LiveAvatar-img {
    border-top: 2px solid #fff
}

html[data-theme=dark] .LiveAvatar-img+.LiveAvatar-img {
    border-top: 2px solid #1a1a1a
}

.LiveAvatar-column+.LiveAvatar-column {
    border-left: 2px solid #fff
}

html[data-theme=dark] .LiveAvatar-column+.LiveAvatar-column {
    border-left: 2px solid #1a1a1a
}

.LiveItem-description {
    display: inline-block;
    line-height: 26px;
    cursor: pointer
}

.LiveItem-description.is-expand {
    overflow: auto;
    white-space: pre-wrap
}

button.LiveItem-description {
    display: block;
    width: 100%;
    text-align: left
}

.LiveItem-price {
    color: #f1403c
}

.LiveItem-price del {
    color: #8590a6;
    margin-left: 3px
}

html[data-theme=dark] .LiveItem-price del {
    color: #606a80
}

html[data-theme=dark] .LiveItem-price {
    color: #b7302d
}

.LiveItem-cover {
    position: relative;
    display: block;
    width: 100%;
    height: 160px;
    border-radius: 4px;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    margin-bottom: 10px
}

.LiveItem-cover img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.ImageGallery {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 101;
    overflow: hidden;
    transition: background-color .2s ease-in-out
}

.ImageGallery.is-active {
    background-color: rgba(26,26,26,.65)
}

html[data-theme=dark] .ImageGallery.is-active {
    background-color: rgba(0,0,0,.65)
}

.ImageGallery .ImageGallery-Content {
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.ImageGallery .ImageGallery-Content .ImageGallery-arrow-left,.ImageGallery .ImageGallery-Content .ImageGallery-arrow-right {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.ImageGallery-arrow-left,.ImageGallery-arrow-right,.ImageGallery-close {
    position: absolute;
    cursor: pointer;
    width: 72px;
    height: 72px
}

.ImageGallery-arrow-left:before,.ImageGallery-arrow-right:before,.ImageGallery-close:before {
    content: "";
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%
}

.ImageGallery-arrow-left:hover:before,.ImageGallery-arrow-right:hover:before,.ImageGallery-close:hover:before {
    background: #fff;
    opacity: .1
}

html[data-theme=dark] .ImageGallery-arrow-left:hover:before,html[data-theme=dark] .ImageGallery-arrow-right:hover:before,html[data-theme=dark] .ImageGallery-close:hover:before {
    background: #1a1a1a
}

.ImageGallery-arrow-left:active:before,.ImageGallery-arrow-right:active:before,.ImageGallery-close:active:before {
    background: #fff;
    opacity: .3
}

html[data-theme=dark] .ImageGallery-arrow-left:active:before,html[data-theme=dark] .ImageGallery-arrow-right:active:before,html[data-theme=dark] .ImageGallery-close:active:before {
    background: #1a1a1a
}

.ImageGallery-arrow-left svg,.ImageGallery-arrow-right svg,.ImageGallery-close svg {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%)
}

.ImageGallery-arrow-disabled {
    opacity: .3;
    cursor: default
}

.ImageGallery-arrow-disabled:active:before,.ImageGallery-arrow-disabled:hover:before {
    background: transparent
}

.ImageGallery-Inner {
    height: 100%;
    box-sizing: border-box;
    display: block
}

.ImageGallery-CursorZoomIn {
    cursor: -webkit-zoom-in
}

.ImageGallery-transition {
    transition: all .3s ease-in-out
}

.ImageGallery-fixed {
    position: absolute;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%
}

.ImageGallery-close {
    position: absolute;
    top: 24px;
    right: 14px
}

.Image-Wrapper-Preview {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-right: -2px;
    display: block
}

.Image-Wrapper-Preview:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
}

.Image-Wrapper-Preview .Thumbnail-Wrapper {
    float: left;
    box-sizing: border-box;
    position: relative;
    height: 1px;
    margin-bottom: 2px;
    cursor: zoom-in
}

.Image-Wrapper-Preview .Thumbnail-Wrapper span {
    margin-right: 2px;
    position: relative;
    display: block;
    overflow: hidden;
    height: 100%
}

.Image-Wrapper-Preview .Thumbnail-Wrapper span img {
    position: absolute
}

.Image-Wrapper-Preview .Thumbnail-Wrapper .Image-PreviewVague .VagueImage {
    position: static
}

.Image-Wrapper-Preview .Thumbnail-Wrapper .Image-PreviewVague>img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.Image-Wrapper-Preview .Thumbnail-Wrapper .Thumbnail-Surplus-Sign {
    position: absolute;
    left: 0;
    top: 0;
    right: 2px;
    bottom: 0;
    font-size: 32px;
    color: #fff;
    font-style: normal;
    z-index: 1;
    font-weight: 500;
    letter-spacing: 4px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Image-Wrapper-Preview .Thumbnail-Wrapper .Thumbnail-Surplus-Sign:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    opacity: .3;
    z-index: -1
}

html[data-theme=dark] .Image-Wrapper-Preview .Thumbnail-Wrapper .Thumbnail-Surplus-Sign:before {
    background: #999
}

html[data-theme=dark] .Image-Wrapper-Preview .Thumbnail-Wrapper .Thumbnail-Surplus-Sign {
    color: #1a1a1a
}

.Image-Wrapper-Preview .Thumbnail-Wrapper .Thumbnail-Gif-Sign {
    position: absolute;
    background: hsla(0,0%,100%,.55);
    border-radius: 4px;
    border: 1px solid rgba(26,26,26,.15);
    color: rgba(26,26,26,.35);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    width: 28px;
    height: 16px;
    right: 6px;
    bottom: 6px;
    font-weight: 500;
    font-style: normal;
    text-align: center;
    line-height: 18px;
    font-size: 12px
}

html[data-theme=dark] .Image-Wrapper-Preview .Thumbnail-Wrapper .Thumbnail-Gif-Sign {
    background: rgba(26,26,26,.55);
    border: 1px solid hsla(0,0%,60%,.15);
    color: hsla(0,0%,60%,.35)
}

.ReactionButton {
    padding: 0 15px;
    color: #0084ff;
    text-align: center;
    border-color: transparent;
    border-radius: 3px;
    box-sizing: border-box
}

.ReactionButton,.ReactionButton:disabled:hover {
    background: #f6f6f6
}

html[data-theme=dark] .ReactionButton:disabled:hover {
    background: #2e2e2e
}

.ReactionButton:not(:disabled):hover {
    background-color: #ebebeb
}

html[data-theme=dark] .ReactionButton:not(:disabled):hover {
    background-color: #444
}

.ReactionButton.is-active {
    color: #fff;
    background: #0084ff
}

.ReactionButton.is-active:hover {
    background-color: #0084ff
}

html[data-theme=dark] .ReactionButton.is-active:hover {
    background-color: #3a76d0
}

html[data-theme=dark] .ReactionButton.is-active {
    color: #ebebeb;
    background: #3a76d0
}

.ReactionButton .Icon {
    margin-right: 7px;
    fill: currentColor
}

html[data-theme=dark] .ReactionButton {
    color: #3a76d0;
    background: #2e2e2e
}

.PinItem-authorInfo {
    margin-bottom: 10px
}

.PinItem-remainContentRichText {
    margin-top: 10px;
    pointer-events: auto
}

.PinItem-remainContentRichText .link-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 10px
}

.PinItem-remainContentRichText .link-box .content {
    padding-left: 0
}

.PinItem-remainContentRichText .link-box .thumbnail {
    width: 72px;
    height: 72px;
    border-radius: 4px
}

.PinItem-remainContentRichText blockquote {
    cursor: pointer
}

.PinItem-3lineBlockquote {
    display: -webkit-box;
    max-height: 81px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical
}

.PinItem-contentTitle {
    max-height: 54px
}

.PinItem-contentTitle,.PinItem-contentUrl {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.PinItem .subtype {
    display: inline-block;
    padding: 1px 6px;
    margin-left: 8px;
    font-size: 12px;
    line-height: normal;
    color: #8590a6;
    vertical-align: 1px;
    background-color: #f6f6f6;
    border-radius: 3px
}

html[data-theme=dark] .PinItem .subtype {
    color: #606a80;
    background-color: #2e2e2e
}

.Thumbnail-Wrapper {
    width: 25%
}

.PinItem .Voters {
    display: none
}

.PinItem-content-repin {
    border: 1px solid #ebebeb;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background: #fff;
    margin-top: 20px;
    overflow: visible;
    border-radius: 4px;
    padding: 16px;
    font-size: 15px;
    line-height: 25px
}

html[data-theme=dark] .PinItem-content-repin {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.PinItem-content-repin blockquote {
    margin: 8px 0
}

.PinItem-content-repin .link-text {
    font-size: 14px;
    color: #999;
    line-height: 16px;
    margin-top: 8px;
    width: 100%;
    border-bottom: none!important;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

html[data-theme=dark] .PinItem-content-repin .link-text {
    color: #646464
}

.PinItem-content-repin .RichText-video {
    width: 50%;
    margin: 0
}

html[data-theme=dark] .PinItem-content-repin {
    border: 1px solid #444;
    background: #1a1a1a
}

.ActivityItem-meta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.ActivityItem-metaTitle {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.List-headerOptions,.Profile-writePosts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-item-align: center;
    align-self: center
}

.Profile-writePosts {
    line-height: 24px;
    margin-right: 20px;
    position: relative
}

.Profile-writePosts:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 12px;
    background-color: #ebebeb;
    right: -11px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

html[data-theme=dark] .Profile-writePosts:after {
    background-color: #444
}

.Profile-writePostsText {
    color: #0084ff
}

html[data-theme=dark] .Profile-writePostsText {
    color: #3a76d0
}

.SubTabs {
    display: inline-block
}

.SubTabs-item {
    height: 21px;
    padding: 6px 0 7px;
    margin-right: 36px
}

.SubTabs-item:last-child {
    margin-right: 0
}

.SubTabs-item:not(.is-active) {
    font-weight: 400
}

.SubTabs .Select-button {
    font-size: 1em;
    font-weight: inherit
}

.Field {
    padding: 30px 0;
    border-bottom: 1px solid #ebebeb
}

.Field .ButtonGroup .Button+.Button {
    margin-left: 16px
}

html[data-theme=dark] .Field {
    border-bottom: 1px solid #444
}

.Field-label {
    position: absolute;
    font-size: 15px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 36px;
    color: #444
}

html[data-ios] .Field-label {
    font-weight: 500
}

html[data-android] .Field-label {
    font-weight: 700
}

html[data-theme=dark] .Field-label {
    color: gray
}

.Field-content {
    padding: 0 64px 0 140px;
    line-height: 36px
}

.Field-list {
    margin: 20px -10px 0
}

.Field-dot {
    margin-right: 10px
}

.Field-input {
    width: 180px
}

.Field-longInput {
    width: 495px
}

.Field-autoComplete {
    display: inline-block
}

.Field-autoComplete:not(:first-child) {
    margin-left: 16px
}

.Field-card {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 440px;
    padding: 8px 10px;
    line-height: 24px;
    cursor: move
}

.Field-card span {
    margin-left: 12px;
    font-size: 15px;
    color: #1a1a1a
}

html[data-theme=dark] .Field-card span {
    color: #999
}

.Field-hoveredCard {
    background: #f6f6f6;
    border-radius: 4px
}

html[data-theme=dark] .Field-hoveredCard {
    background: #2e2e2e
}

.Field-draggingCard {
    opacity: 1
}

.Field-delete {
    position: absolute;
    top: 50%;
    right: 10px;
    cursor: pointer;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.Field-avatar {
    vertical-align: top
}

.Field-modify {
    position: absolute;
    margin-left: 16px;
    line-height: inherit;
    transition: opacity .1s
}

.Field-modify-hidden:not(:focus) {
    opacity: 0
}

.Field .MaxLength {
    position: absolute;
    top: 30px;
    right: 12px;
    text-align: right
}

.Field-education .Field-content {
    padding-right: 52px
}

.Field-line {
    margin-bottom: 20px
}

.Field-select:not(:first-child) {
    margin-left: 16px
}

.Field-select .Select-button {
    height: 34px;
    line-height: 34px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 5px 0 10px;
    border-color: #ebebeb
}

html[data-theme=dark] .Field-select .Select-button {
    border-color: #444
}

.Field-selectList>.Select-option:first-child {
    display: none
}

.EductaionField-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.EductaionField-card>img {
    border-radius: 50%
}

.EductaionField-cardContent>div {
    line-height: 1
}

.EductaionField-card:first-child {
    padding-bottom: 16px
}

.EductaionField-card:not(:first-child) {
    padding: 16px 10px
}

.EductaionField-cardYears {
    color: #8590a6;
    margin-bottom: 12px;
    font-size: 14px
}

html[data-theme=dark] .EductaionField-cardYears {
    color: #606a80
}

.ButtonGroup {
    margin-top: 24px;
    vertical-align: top
}

.ButtonGroup--right {
    display: inline-block;
    margin-top: 0;
    margin-left: 24px
}

.FullnameField .Field {
    border-bottom: 0;
    padding-top: 14px;
    padding-bottom: 0
}

.FullnameField .Field .MaxLength {
    bottom: 0;
    right: 0;
    top: auto
}

.FullnameField-input {
    width: 420px
}

.FullnameField-buttonGroup {
    display: inline-block
}

.FullnameField-actions {
    position: relative;
    width: 420px
}

.FullnameField-hint {
    background: #fff;
    bottom: 0;
    color: #8590a6;
    font-size: 14px;
    position: absolute;
    right: 0
}

html[data-theme=dark] .FullnameField-hint {
    background: #1a1a1a;
    color: #606a80
}

.FullnameField-name {
    display: inline-block;
    height: 30px;
    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.FullnameField-editable,.FullnameField-readonly {
    font-size: 26px;
    font-weight: 600;
    font-synthesis: style;
    height: 30px;
    line-height: 30px
}

html[data-ios] .FullnameField-editable,html[data-ios] .FullnameField-readonly {
    font-weight: 500
}

html[data-android] .FullnameField-editable,html[data-android] .FullnameField-readonly {
    font-weight: 700
}

.FullnameField-readonly {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.FullnameField-readonlyHint {
    color: #8590a6;
    font-size: 14px;
    font-weight: 400;
    padding-left: 16px
}

html[data-theme=dark] .FullnameField-readonlyHint {
    color: #606a80
}

.FullnameField-editable {
    display: inline-block;
    padding-right: 80px
}

.FullnameField-editable .Field-modify {
    font-weight: 400
}

.HeadlineField-input {
    width: 540px
}

.HeadlineField-buttonGroup {
    display: inline-block
}

.HeadlineField-actions {
    position: relative
}

.HomepageField-input {
    width: 540px
}

.HomepageField-buttonGroup {
    display: inline-block
}

.HomepageField-actions {
    position: relative
}

.AddButton {
    font-size: 15px
}

.AddButton-icon {
    fill: #0084ff;
    vertical-align: -4px
}

html[data-theme=dark] .AddButton-icon {
    fill: #3a76d0
}

.TextArea {
    padding: 4px 10px;
    font-family: inherit;
    font-size: 14px;
    font-weight: inherit;
    line-height: 26px;
    background: #f6f6f6;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    outline: none;
    box-sizing: border-box;
    transition: background .2s;
    resize: none
}

.TextArea:focus {
    background: #fff
}

html[data-theme=dark] .TextArea:focus {
    background: #1a1a1a
}

.TextArea::-webkit-input-placeholder {
    color: #8590a6
}

.TextArea:-ms-input-placeholder {
    color: #8590a6
}

.TextArea::placeholder {
    color: #8590a6
}

html[data-theme=dark] .TextArea::-webkit-input-placeholder {
    color: #606a80
}

html[data-theme=dark] .TextArea:-ms-input-placeholder {
    color: #606a80
}

html[data-theme=dark] .TextArea::placeholder {
    color: #606a80
}

html[data-theme=dark] .TextArea {
    background: #2e2e2e;
    border: 1px solid #444
}

.DescriptionField-input {
    width: 540px
}

.DescriptionField-buttonGroup {
    display: inline-block
}

.DescriptionField-actions {
    position: relative
}

.DescriptionField-content {
    word-break: break-all
}

.PersonalVerificationField-label {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative
}

.PersonalVerificationField-toolTip {
    position: absolute
}

.PersonalVerificationField-editingWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.PersonalVerificationField-checkoutLabel {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.PersonalVerificationField-helpIcon {
    color: #999;
    margin-left: 8px
}

html[data-theme=dark] .PersonalVerificationField-helpIcon {
    color: #646464
}

.PersonalVerificationField-checkoutItemWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.PersonalVerificationField-checkoutInput {
    margin-right: 12px
}

.PersonalVerificationField-checkoutInfo {
    font-size: 15px;
    margin-right: 16px;
    max-width: 400px;
    word-wrap: break-word
}

.PersonalVerificationField-toggleEditButton {
    font-size: 15px;
    fill: #175199
}

html[data-theme=dark] .PersonalVerificationField-toggleEditButton {
    fill: #175199
}

.ProfileEdit {
    width: 1000px;
    padding: 0 16px;
    margin: 14px auto;
    font-size: 15px;
    color: #1a1a1a
}

html[data-theme=dark] .ProfileEdit {
    color: #999
}

.ProfileEdit-fields {
    padding-bottom: 100px;
    margin-top: 10px
}

.ProfileEdit-headlineInput {
    width: 495px
}

.ProfileEdit-buttons {
    margin-top: 24px
}

.ProfileEdit-expandActions {
    bottom: auto
}

.ProfileEdit-arrowIcon {
    margin: 0 4px 0 8px;
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.CreatorFormFields-fieldWrapper {
    width: 100%
}

.CreatorFormFields-fieldInput {
    width: 400px
}

.CreatorFormFields-formTextArea {
    background: #fff;
    height: 96px;
    resize: vertical;
    width: 100%
}

html[data-theme=dark] .CreatorFormFields-formTextArea {
    background: #1a1a1a
}

.CreatorFormFields-extraHint {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 21px;
    font-size: 14px
}

.CreatorFormFields-extraHint--common {
    color: #8590a6
}

html[data-theme=dark] .CreatorFormFields-extraHint--common {
    color: #606a80
}

.CreatorFormFields-extraHint--error {
    margin-top: 8px;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    color: #f1403c
}

html[data-theme=dark] .CreatorFormFields-extraHint--error {
    color: #b7302d
}

.CreatorFormFields-fieldEmailWrapper {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content
}

.MultiUploadPreviewListImage-closeIcon {
    fill: #fff
}

html[data-theme=dark] .MultiUploadPreviewListImage-closeIcon {
    fill: #ebebeb
}

.MultiUploadPreviewListImage-imageWrapper {
    position: relative;
    width: 88px;
    height: 88px;
    margin: 10px;
    border: 1px solid #d3d3d3;
    border-radius: 6px
}

html[data-theme=dark] .MultiUploadPreviewListImage-imageWrapper {
    border: 1px solid #2e2e2e
}

.MultiUploadPreviewListImage-imageInner {
    display: block;
    cursor: pointer;
    text-align: center;
    width: 100%;
    height: 100%
}

.MultiUploadPreviewListImage-previewImgContainer {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    -o-object-fit: cover;
    object-fit: cover
}

.MultiUploadPreviewListImage-closeButtonWrapper {
    position: absolute;
    z-index: 1;
    top: -8px;
    right: -8px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #f1403c
}

html[data-theme=dark] .MultiUploadPreviewListImage-closeButtonWrapper {
    background-color: #b7302d
}

.MultiUploadPreviewListImage-imageUploadingShade {
    position: absolute;
    background-color: hsla(0,0%,39%,.8);
    width: 100%;
    height: 100%;
    border-radius: 6px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #fff;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.MultiUploadPreviewList-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.MultiUploadButton-addWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    margin: 10px;
    cursor: pointer;
    color: #999;
    border: 1px dashed #bfbfbf;
    border-radius: 6px
}

html[data-theme=dark] .MultiUploadButton-addWrapper {
    color: #646464;
    border: 1px dashed #444
}

.MultiUploadButton-addText {
    margin-top: 12px
}

.IdCardImageUploader-addButtonWrapper {
    display: inline-block;
    width: 112px;
    height: 70px;
    position: relative;
    border-radius: 3px;
    border: 1px solid #d3d3d3;
    margin: 10px
}

.IdCardImageUploader-addButtonWrapper--editable {
    cursor: pointer
}

html[data-theme=dark] .IdCardImageUploader-addButtonWrapper {
    border: 1px solid #2e2e2e
}

.IdCardImageUploader-addButtonPlusIconWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #0084ff;
    left: 44px;
    top: 23px
}

html[data-theme=dark] .IdCardImageUploader-addButtonPlusIconWrapper {
    background: #3a76d0
}

.IdCardImageUploader-addButtonImg {
    width: 112px;
    height: 70px
}

.IdCardImageUploader-uploadImage {
    margin-top: 6px;
    display: inline-block;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.IdCardImageUploader-uploadImageContent {
    width: 112px;
    height: 70px
}

.IdCardImageUploader-addButtonImg {
    width: 100%;
    background-size: cover
}

.CreatorAccountSettings-uploadImageHint {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.CreatorFormFields-fieldIdCodeWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.CreatorFormFields-formSelectList {
    max-height: 270px
}

.CreatorFormFields-formSelectList .Select-button {
    margin-right: 24px
}

.CreatorFormFields-fieldInput {
    width: 400px
}

.CreatorFormFields-uploadImageHint {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.CreatorFormFields-fieldIdCodeWrapper .Select-button {
    height: 34px;
    line-height: 32px;
    padding: 0 4px 0 15px;
    border: 1px solid #ebebeb
}

html[data-theme=dark] .CreatorFormFields-fieldIdCodeWrapper .Select-button {
    border: 1px solid #444
}

.CreatorFormFields-uploadImageSection .IdCardImageUploader-uploadImage:first-child {
    margin: -10px
}

.CreatorFormFields-vfieldPhoneVerifiedWrap {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 34px
}

.CreatorFormFields-fieldPhonePhone,.CreatorFormFields-fieldPhonePhoneWrap,.CreatorFormFields-vfieldPhoneVerifiedWrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.CreatorFormFields-fieldPhonePhone {
    width: 300px;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.CreatorFormFields-fieldPhonePhone.is-focus {
    border: 1px solid #8590a6
}

html[data-theme=dark] .CreatorFormFields-fieldPhonePhone.is-focus {
    border: 1px solid #606a80
}

html[data-theme=dark] .CreatorFormFields-fieldPhonePhone {
    border: 1px solid #2e2e2e
}

.CreatorFormFields-fieldPhonePhoneCode {
    width: 100px
}

.CreatorFormFields-fieldPhonePhoneCode .Select-button {
    width: 100%;
    height: 34px;
    line-height: 32px;
    border: none;
    padding-right: 0
}

.CreatorFormFields-fieldPhonePhoneCode .Select-button svg {
    position: absolute;
    right: 10px;
    top: 50%;
    -webkit-transform: translate(2px,-50%);
    transform: translate(2px,-50%)
}

.CreatorFormFields-fieldPhonePhoneCodeList .Select-option {
    height: 34px;
    line-height: 34px
}

.CreatorFormFields-fieldPhonePhoneSpliter {
    height: 21px;
    border-left: 1px solid #ebebeb
}

html[data-theme=dark] .CreatorFormFields-fieldPhonePhoneSpliter {
    border-left: 1px solid #444
}

.CreatorFormFields-fieldPhonePhoneNo {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    border: none
}

.CreatorFormFields-fieldPhonePhoneNo.is-focus {
    border: 0
}

.CreatorFormFields-fieldPhoneCaptchaWrap {
    margin-top: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.CreatorFormFields-fieldPhoneCaptcha {
    width: 100px
}

.CreatorFormFields-fieldPhoneBtnCheckCaptcha {
    margin-left: 16px;
    width: 62px;
    display: inline-block
}

.CreatorFormFields-fieldPhoneCaptchaRetry,.CreatorFormFields-fieldPhoneCaptchaSended {
    font-size: 14px;
    line-height: 34px;
    margin-left: 16px;
    display: inline-block
}

.CreatorFormFields-fieldPhoneCaptchaSended {
    color: #8590a6
}

html[data-theme=dark] .CreatorFormFields-fieldPhoneCaptchaSended {
    color: #606a80
}

.CreatorFormFields-fieldPhoneCaptchaRetry {
    color: #0084ff
}

html[data-theme=dark] .CreatorFormFields-fieldPhoneCaptchaRetry {
    color: #3a76d0
}

.CreatorFormFields-fieldPhoneFieldPhoneNo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.CreatorFormFields-fieldPhoneBtnSendCaptcha {
    width: 114px;
    margin-left: 16px
}

.CreatorFormFields-fieldPhoneVerifiedWrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 34px
}

.CreatorFormFields-fieldPhoneVerifiedPhoneNo {
    font-size: 14px;
    color: #444
}

html[data-theme=dark] .CreatorFormFields-fieldPhoneVerifiedPhoneNo {
    color: gray
}

.CreatorFormFields-fieldPhoneBtnEdit {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #8590a6;
    font-size: 14px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer
}

html[data-theme=dark] .CreatorFormFields-fieldPhoneBtnEdit {
    color: #606a80
}

.CreatorFormFields-fieldPhoneIconVerified {
    margin: 0 16px 0 8px;
    fill: #0084ff
}

html[data-theme=dark] .CreatorFormFields-fieldPhoneIconVerified {
    fill: #3a76d0
}

.CreatorFormFields-fieldPhoneIconEdit {
    margin-right: 4px
}

.CreatorFormFields-fieldTypeError {
    -webkit-box-pack: normal;
    -ms-flex-pack: normal;
    justify-content: normal;
    margin-left: 110px
}

.CreatorFormFields-fieldWrapper--horizontal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.CreatorFormFields-fieldSubHeader {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 16px;
    word-break: keep-all;
    margin-right: 40px;
    width: 60px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .CreatorFormFields-fieldSubHeader {
    font-weight: 500
}

html[data-android] .CreatorFormFields-fieldSubHeader {
    font-weight: 700
}

.CreatorFormFields-fieldSubHeader--horizontal {
    font-size: 15px
}

.CreatorFormFields-uploadComponentWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.CreatorFormFields-uploadImage {
    margin-left: -10px;
    margin-top: 6px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.CreatorFormFields-uploadImageHint {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.CreatorInviteForm-extraMaterialModal {
    width: 595px
}

.CreatorInviteForm-extraMaterialFormHeader {
    width: 100%;
    margin-bottom: 24px;
    text-align: center
}

.CreatorInviteForm-extraMaterialDescription {
    font-weight: 600;
    font-synthesis: style;
    margin-top: 20px;
    margin-bottom: 40px;
    line-height: 24px
}

html[data-ios] .CreatorInviteForm-extraMaterialDescription {
    font-weight: 500
}

html[data-android] .CreatorInviteForm-extraMaterialDescription {
    font-weight: 700
}

.CreatorInviteForm-extraMaterialDescription * {
    font-weight: 400
}

.CreatorInviteForm-extraMaterialDescription ul {
    margin-left: 20px
}

.CreatorInviteForm-extraMaterialDescription li {
    list-style: disc inside
}

.CreatorInviteForm-extraMaterialUploadImage {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
}

.CreatorInviteForm-extraMaterialUploadActionButtonGroup {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.Button.CreatorInviteForm-extraMaterialUploadActionButton {
    width: 168px;
    -webkit-box-flex: initial;
    -ms-flex: initial;
    flex: initial
}

.CreatorInviteForm .Select-button {
    height: 34px;
    line-height: 32px;
    padding: 0 4px 0 15px
}

.CreatorInviteForm-section {
    width: 694px
}

.CreatorInviteForm-card,.CreatorInviteForm-welcome {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 96px 0
}

.CreatorInviteForm-image {
    width: 608px
}

.CreatorInviteForm-welcomeHeader {
    font-size: 24px;
    margin-top: 48px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .CreatorInviteForm-welcomeHeader {
    font-weight: 500
}

html[data-android] .CreatorInviteForm-welcomeHeader {
    font-weight: 700
}

.CreatorInviteForm-welcomeHint {
    font-size: 14px;
    margin-top: 18px
}

.CreatorInviteForm-descriptionHint {
    font-size: 14px;
    margin-top: 18px;
    text-align: center;
    width: 320px
}

.CreatorInviteForm-descriptionHint--welcome {
    width: 364px
}

.CreatorInviteForm-SubmitSuccessHint {
    width: 320px;
    font-size: 14px;
    margin-top: 18px;
    text-align: center
}

.CreatorInviteForm-stepButton {
    margin-top: 24px;
    padding: 0;
    width: 220px
}

.CreatorInviteForm-form {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 40px 30px 20px
}

.CreatorInviteForm-formHeader {
    font-size: 26px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .CreatorInviteForm-formHeader {
    font-weight: 500
}

html[data-android] .CreatorInviteForm-formHeader {
    font-weight: 700
}

.CreatorInviteForm-formHint {
    color: #646464;
    font-size: 14px;
    margin-top: 24px;
    padding-bottom: 44px
}

html[data-theme=dark] .CreatorInviteForm-formHint {
    color: #999
}

.CreatorInviteForm-formLine {
    border-top: 1px solid #f0f2f7;
    margin-top: 10px;
    margin-bottom: 24px;
    width: 100%
}

.CreatorInviteForm-formSelectList {
    max-height: 270px
}

.CreatorInviteForm-formSelectList .Select-button {
    margin-right: 24px
}

.CreatorInviteForm-formTextArea {
    background: #fff;
    height: 96px;
    resize: vertical;
    width: 100%
}

html[data-theme=dark] .CreatorInviteForm-formTextArea {
    background: #1a1a1a
}

.CreatorInviteForm-formSubmitButton {
    -ms-flex-item-align: end;
    align-self: flex-end;
    margin-top: 40px;
    width: 114px
}

.CreatorInviteForm-refuseButtonGroup {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 10px
}

.CreaotrRightsButton[disabled] {
    background-color: hsla(0,0%,60%,.08);
    border: none;
    color: #8590a6;
    cursor: default;
    opacity: 1
}

html[data-theme=dark] .CreaotrRightsButton[disabled] {
    background-color: hsla(0,0%,39%,.08);
    color: #606a80
}

.Creator {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 10px auto;
    width: 1000px
}

.Creator--form {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.Creator-sideColumn {
    color: #444;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 10px;
    width: 170px
}

html[data-theme=dark] .Creator-sideColumn {
    color: gray
}

.Creator-mainColumn {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.Creator-menuItem {
    padding-bottom: 10px
}

.Creator-menuItem--noContent {
    padding-bottom: 0
}

.Creator-menuItemHeader {
    color: #8590a6;
    line-height: 50px;
    padding-left: 20px
}

.Creator-menuItemHeader .Zi {
    margin-right: 10px
}

html[data-theme=dark] .Creator-menuItemHeader {
    color: #606a80
}

.Creator-menuItem:not(:first-child) {
    border-top: 1px solid #f6f6f6
}

html[data-theme=dark] .Creator-menuItem:not(:first-child) {
    border-top: 1px solid #2e2e2e
}

.Creator-subMenuItem {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #444;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 15px;
    line-height: 40px;
    padding-left: 50px;
    text-align: left
}

.Creator-subMenuItem:hover {
    background: #f6f6f6;
    color: #444
}

html[data-theme=dark] .Creator-subMenuItem:hover {
    background: #2e2e2e;
    color: gray
}

.Creator-subMenuItem.is-active {
    color: #fff;
    background: #0084ff
}

html[data-theme=dark] .Creator-subMenuItem.is-active {
    color: #1a1a1a;
    background: #3a76d0
}

html[data-theme=dark] .Creator-subMenuItem {
    color: gray
}

.Creator-subMenuItemNewIcon {
    margin-left: 4px
}

.Creator-emptyRights {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 560px
}

.Creator-emptyRightsIcon {
    color: #0084ff
}

html[data-theme=dark] .Creator-emptyRightsIcon {
    color: #3a76d0
}

.Creator-emptyRightsTitle {
    font-size: 24px;
    margin-top: 22px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Creator-emptyRightsTitle {
    font-weight: 500
}

html[data-android] .Creator-emptyRightsTitle {
    font-weight: 700
}

.Creator-emptyRightsHint {
    font-size: 14px;
    margin-top: 10px;
    max-width: 450px;
    text-align: center
}

.Creator-emptyRightsHintRequirement {
    color: gray;
    margin-top: 10px
}

html[data-theme=dark] .Creator-emptyRightsHintRequirement {
    color: gray
}

.Creator-emptyRightsButton {
    margin-top: 20px
}

.Creator-entityLink {
    color: #175199;
    cursor: pointer
}

.Creator-entityLink:hover {
    text-decoration: underline
}

html[data-theme=dark] .Creator-entityLink {
    color: #175199
}

.Creator-internalLink {
    color: #0084ff;
    cursor: pointer
}

.Creator-internalLink:hover {
    color: #3a76d0
}

.Creator-internalLink[disabled] {
    cursor: default;
    color: #999
}

html[data-theme=dark] .Creator-internalLink[disabled] {
    color: #646464
}

html[data-theme=dark] .Creator-internalLink {
    color: #3a76d0
}

.Creator-hintLink {
    color: gray;
    cursor: pointer
}

.Creator-hintLink:hover {
    color: #444
}

html[data-theme=dark] .Creator-hintLink,html[data-theme=dark] .Creator-hintLink:hover {
    color: gray
}

.Creator-ButtonGroup {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Creator-ButtonGroupButton {
    border: 1px solid #ebebeb;
    color: #8590a6;
    font-size: 14px;
    line-height: 24px;
    width: 140px
}

.Creator-ButtonGroupButton.Creator-ButtonGroupButton:first-child {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px
}

.Creator-ButtonGroupButton.Creator-ButtonGroupButton:last-child {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px
}

.Creator-ButtonGroupButton.Creator-ButtonGroupButton--selected {
    position: relative;
    background: #8590a6;
    border-color: #8590a6;
    color: #fff;
    z-index: 2
}

html[data-theme=dark] .Creator-ButtonGroupButton.Creator-ButtonGroupButton--selected {
    background: #606a80;
    border-color: #606a80;
    color: #1a1a1a
}

.Creator-ButtonGroupButton+.Creator-ButtonGroupButton {
    margin-left: -1px
}

html[data-theme=dark] .Creator-ButtonGroupButton {
    border: 1px solid #444;
    color: #606a80
}

.Creator-BounceLoading {
    margin: 60px auto
}

.Creator-SubTab {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 20px;
    height: 50px
}

html[data-theme=dark] .Creator-SubTab {
    border-bottom: 1px solid #444
}

.Creator-SubTabItem {
    cursor: pointer;
    margin-right: 40px
}

.Creator-SubTabItem:last-child {
    margin-right: 0
}

.Creator-SubTabItem--active {
    font-weight: 700
}

.AnalyticsWork-entityTable {
    table-layout: fixed
}

.AnalyticsWork-titleColumn {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.AnalyticsWork-detailExpand {
    margin-right: -10px
}

.AnalyticsWork-detailExpand--noData {
    color: #999
}

html[data-theme=dark] .AnalyticsWork-detailExpand--noData {
    color: #646464
}

.AnalyticsWork-detailExpand .Zi {
    color: #d3d3d3;
    margin-left: 4px
}

html[data-theme=dark] .AnalyticsWork-detailExpand .Zi {
    color: #2e2e2e
}

.CreatorCalendar {
    width: 292px;
    padding-bottom: 10px
}

.CreatorCalendar--hasBottomTool {
    padding-bottom: 0
}

.CreatorCalendar-topTool {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 20px 7px;
    position: relative
}

.CreatorCalendar-topToolDate {
    color: #1a1a1a;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .CreatorCalendar-topToolDate {
    font-weight: 500
}

html[data-android] .CreatorCalendar-topToolDate {
    font-weight: 700
}

html[data-theme=dark] .CreatorCalendar-topToolDate {
    color: #999
}

.CreatorCalendar-topToolButton {
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #8590a6;
    font-size: 12px;
    position: absolute;
    top: 24px;
    width: 24px
}

.CreatorCalendar-topToolButton--prevYear {
    left: 20px
}

.CreatorCalendar-topToolButton--prevMonth {
    left: 44px
}

.CreatorCalendar-topToolButton--nextMonth {
    right: 44px
}

.CreatorCalendar-topToolButton--nextYear {
    right: 20px
}

.CreatorCalendar-topToolButton:hover {
    color: #0084ff
}

html[data-theme=dark] .CreatorCalendar-topToolButton:hover {
    color: #3a76d0
}

.CreatorCalendar-topToolButton button {
    height: 24px
}

html[data-theme=dark] .CreatorCalendar-topToolButton {
    color: #606a80
}

.CreatorCalendar-table {
    border-collapse: separate;
    border-spacing: 12px 6px;
    padding: 0 20px 10px;
    table-layout: fixed
}

.CreatorCalendar-weekName {
    color: #8590a6;
    height: 24px;
    padding: 0;
    font-size: 12px
}

html[data-theme=dark] .CreatorCalendar-weekName {
    color: #606a80
}

.CreatorCalendar-day {
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 14px;
    height: 24px;
    padding: 0;
    position: relative;
    text-align: center;
    width: 24px
}

.CreatorCalendar-day.is-hovered {
    background: rgba(0,132,255,.1)
}

html[data-theme=dark] .CreatorCalendar-day.is-hovered {
    background: rgba(58,118,208,.1)
}

.CreatorCalendar-day.is-today {
    border: 1px solid #0084ff;
    color: #0084ff
}

.CreatorCalendar-day.is-today.is-disabled {
    border-color: #bfbfbf;
    color: #bfbfbf
}

html[data-theme=dark] .CreatorCalendar-day.is-today.is-disabled {
    border-color: #444;
    color: #444
}

html[data-theme=dark] .CreatorCalendar-day.is-today {
    border: 1px solid #3a76d0;
    color: #3a76d0
}

.CreatorCalendar-day.is-disabled {
    color: #bfbfbf;
    cursor: not-allowed
}

.CreatorCalendar-day.is-disabled.is-hovered {
    background: none
}

html[data-theme=dark] .CreatorCalendar-day.is-disabled {
    color: #444
}

.CreatorCalendar-day.is-not-this-month {
    color: #bfbfbf
}

html[data-theme=dark] .CreatorCalendar-day.is-not-this-month {
    color: #444
}

.CreatorCalendar-day.is-input-date {
    background: #0084ff;
    color: #fff
}

html[data-theme=dark] .CreatorCalendar-day.is-input-date {
    background: #3a76d0;
    color: #1a1a1a
}

.CreatorCalendar-day.is-in-range:before {
    content: "";
    display: block;
    background: rgba(0,132,255,.1);
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: -6px;
    right: -6px
}

html[data-theme=dark] .CreatorCalendar-day.is-in-range:before {
    background: rgba(58,118,208,.1)
}

.CreatorCalendar-bottomTool {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 46px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 8px
}

html[data-theme=dark] .CreatorCalendar-bottomTool {
    border-top: 1px solid #444
}

.CreatorCalendar-todayButton {
    color: #0084ff;
    font-size: 14px
}

.CreatorCalendar-todayButton[disabled] {
    color: #bfbfbf;
    cursor: not-allowed
}

html[data-theme=dark] .CreatorCalendar-todayButton[disabled] {
    color: #444
}

html[data-theme=dark] .CreatorCalendar-todayButton {
    color: #3a76d0
}

.CreatorRangePicker {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.CreatorRangePicker-Button {
    padding: 0 16px 0 12px
}

.CreatorRangePicker-Button .Zi {
    margin-right: 10px
}

.CreatorRangePicker-hyphen {
    margin: 0 8px
}

.CreatorRangePicker-PopoverContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.CreatorPagination {
    color: #8590a6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

html[data-theme=dark] .CreatorPagination {
    color: #606a80
}

.CreatorPagination-arrowButton {
    padding: 0;
    width: 34px
}

.CreatorPagination-lastButton .Zi {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.CreatorPagination-nextButton .Zi {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
}

.CreatorPagination-pageNumber {
    line-height: 34px;
    padding: 0 20px
}

.CreatorPagination-Input {
    margin: 0 10px;
    width: 60px
}

.CreatorTable {
    font-size: 14px
}

.CreatorTable-table {
    border-bottom: 1px solid #ebebeb;
    width: 100%
}

html[data-theme=dark] .CreatorTable-table {
    border-bottom: 1px solid #444
}

.CreatorTable-tableHead {
    background: #fff;
    font-weight: 400;
    color: #8590a6;
    text-align: left;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.CreatorTable-tableHead:first-child {
    padding-left: 24px
}

.CreatorTable-tableHead:last-child {
    padding-right: 24px
}

.CreatorTable-tableHead--hasSorter {
    cursor: pointer
}

.CreatorTable-tableHead--hasSorter:last-child {
    padding-right: 10px
}

.CreatorTable-tableHead .Zi {
    margin-left: 2px
}

html[data-theme=dark] .CreatorTable-tableHead {
    background: #1a1a1a;
    color: #606a80
}

.CreatorTable-tableRow {
    line-height: 48px
}

.CreatorTable-tableRow--hover:hover,.CreatorTable-tableRow--odd {
    background: #f6f6f6
}

html[data-theme=dark] .CreatorTable-tableRow--hover:hover,html[data-theme=dark] .CreatorTable-tableRow--odd {
    background: #2e2e2e
}

.CreatorTable-tableData:first-child {
    padding-left: 24px
}

.CreatorTable-tableData:last-child {
    padding-right: 24px
}

.CreatorTable-tableData--hasSorter {
    padding-right: 14px
}

.CreatorTable-tableData--hasSorter:last-child {
    padding-right: 24px
}

.CreatorTable-tableData--empty {
    height: 48px
}

.CreatorTable-noData {
    color: #999;
    font-size: 14px;
    line-height: 350px;
    text-align: center
}

html[data-theme=dark] .CreatorTable-noData {
    color: #646464
}

.CreatorTable-Pagination {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 10px 24px
}

.CreatorSorter {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex
}

.CreatorSorter-icon {
    margin-left: 2px;
    fill: #d3d3d3
}

.CreatorSorter-icon--ascend path:first-child {
    fill: #0084ff
}

html[data-theme=dark] .CreatorSorter-icon--ascend path:first-child {
    fill: #3a76d0
}

.CreatorSorter-icon--descend path:last-child {
    fill: #0084ff
}

html[data-theme=dark] .CreatorSorter-icon--descend path:last-child {
    fill: #3a76d0
}

html[data-theme=dark] .CreatorSorter-icon {
    fill: #2e2e2e
}

.CreatorTable-Tooltip .TooltipContent {
    white-space: pre-wrap;
    width: 250px
}

.AnalyticsChart {
    position: relative
}

.AnalyticsChart .recharts-curve.recharts-line-curve {
    stroke-linecap: round;
    stroke-linejoin: round
}

.AnalyticsChart-tooltip {
    background: hsla(0,0%,100%,.95);
    border: 1px solid #ebebeb;
    box-shadow: 0 5px 20px 0 rgba(68,68,68,.1);
    min-width: 210px;
    padding: 24px
}

html[data-theme=dark] .AnalyticsChart-tooltip {
    background: rgba(26,26,26,.95);
    border: 1px solid #444;
    box-shadow: 0 5px 20px 0 hsla(0,0%,50%,.1)
}

.AnalyticsChart-tooltipHeader {
    font-size: 14px;
    margin-bottom: 24px;
    text-align: center;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .AnalyticsChart-tooltipHeader {
    font-weight: 500
}

html[data-android] .AnalyticsChart-tooltipHeader {
    font-weight: 700
}

.AnalyticsChart-tooltipLineItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 16px
}

.AnalyticsChart-tooltipLineItem:last-child {
    margin-bottom: 0
}

.AnalyticsChart-tooltipLineItemName {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.AnalyticsChart-legend {
    color: #8590a6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 28px
}

html[data-theme=dark] .AnalyticsChart-legend {
    color: #606a80
}

.AnalyticsChart-legendItem {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: 20px
}

.AnalyticsChart-legendItem:last-child {
    margin-right: 0
}

.AnalyticsChart-legendItemIconContainer {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 20px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 4px;
    width: 20px
}

.AnalyticsChart-legendItemInactiveIcon {
    border: 1px solid #bfbfbf;
    border-radius: 50%;
    box-sizing: border-box;
    height: 14px;
    width: 14px
}

html[data-theme=dark] .AnalyticsChart-legendItemInactiveIcon {
    border: 1px solid #444
}

.AnalyticsChart-hint {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    left: 0;
    height: 370px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%
}

html[data-theme=dark] .AnalyticsChart-hint {
    color: #646464
}

.CreatorSection {
    border: 1px solid #ebebeb;
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(26,26,26,.1)
}

html[data-theme=dark] .CreatorSection {
    border: 1px solid #444;
    box-shadow: 0 1px 3px 0 hsla(0,0%,60%,.1)
}

.CreatorSection-header {
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 24px
}

html[data-theme=dark] .CreatorSection-header {
    border-bottom: 1px solid #444
}

.CreatorSection .CreatorSectionItem {
    margin-right: 40px
}

.CreatorSectionItem {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 20px 0
}

.CreatorSectionItem--clickable {
    cursor: pointer
}

.CreatorSectionItem.is-active {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .CreatorSectionItem.is-active {
    font-weight: 500
}

html[data-android] .CreatorSectionItem.is-active {
    font-weight: 700
}

.CreatorSectionItem .Zi {
    color: #bfbfbf;
    margin-left: 4px
}

html[data-theme=dark] .CreatorSectionItem .Zi {
    color: #444
}

.CreatorSectionItem-TooltipIconContainer {
    cursor: pointer
}

.CreatorSectionItem-Tooltip .TooltipContent {
    white-space: pre-wrap;
    width: 250px
}

.AnalyticsCountDelta {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 130px
}

.AnalyticsCountDelta-text {
    font-size: 14px;
    color: #8590a6;
    margin-right: 8px
}

html[data-theme=dark] .AnalyticsCountDelta-text {
    color: #606a80
}

.AnalyticsCountDelta-number {
    font-size: 12px;
    margin-left: 4px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .AnalyticsCountDelta-number {
    font-weight: 500
}

html[data-android] .AnalyticsCountDelta-number {
    font-weight: 700
}

.AnalyticsCountDelta-upIcon {
    color: #0084ff
}

html[data-theme=dark] .AnalyticsCountDelta-upIcon {
    color: #3a76d0
}

.AnalyticsCountDelta-downIcon {
    color: #f36
}

html[data-theme=dark] .AnalyticsCountDelta-downIcon {
    color: #d92155
}

.AnalyticsWorkArticles {
    padding: 20px
}

.AnalyticsWorkArticles-CreatorSection {
    margin-bottom: 20px
}

.AnalyticsWorkArticles-CreatorSection:last-child {
    margin-bottom: 0
}

.AnalyticsWorkArticles-readCount {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 40px 24px
}

.AnalyticsWorkArticles-readCountItem {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 80px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.AnalyticsWorkArticles-readCountYesterday {
    border-right: 1px solid #ebebeb
}

html[data-theme=dark] .AnalyticsWorkArticles-readCountYesterday {
    border-right: 1px solid #444
}

.AnalyticsWorkArticles-readCountNumber {
    font-size: 26px;
    line-height: 1;
    margin: 16px 0;
    position: relative
}

.AnalyticsWorkArticles-readCountTitle {
    color: #8590a6;
    font-size: 14px;
    line-height: 1
}

html[data-theme=dark] .AnalyticsWorkArticles-readCountTitle {
    color: #606a80
}

.AnalyticsWorkArticles-detailCountHeader {
    width: 100%
}

.AnalyticsWorkArticles-detailCountMenu {
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

html[data-theme=dark] .AnalyticsWorkArticles-detailCountMenu {
    border-bottom: 1px solid #444
}

.AnalyticsWorkArticles-detailCountDate {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 13px 0
}

.AnalyticsWorkArticles-detailCountDate .Button {
    border-color: #ebebeb
}

.AnalyticsWorkArticles-detailCountDate .Button:hover {
    border-color: #8590a6
}

html[data-theme=dark] .AnalyticsWorkArticles-detailCountDate .Button:hover {
    border-color: #606a80
}

.AnalyticsWorkArticles-detailCountDate .Button.is-active {
    border-color: #0084ff
}

html[data-theme=dark] .AnalyticsWorkArticles-detailCountDate .Button.is-active {
    border-color: #3a76d0
}

html[data-theme=dark] .AnalyticsWorkArticles-detailCountDate .Button {
    border-color: #444
}

.AnalyticsWorkArticles-detailCountDateLast {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.AnalyticsWorkArticles-detailCountDateLast .Button {
    margin-right: 16px
}

.AnalyticsWorkArticles-detailCountDateRange {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.AnalyticsWorkArticles-detailCountDateRangeHint {
    color: #8590a6;
    font-size: 14px;
    margin: 0 8px
}

html[data-theme=dark] .AnalyticsWorkArticles-detailCountDateRangeHint {
    color: #606a80
}

.AnalyticsWorkArticles-detailCountChartSection {
    padding: 0 24px
}

.AnalyticsWorkArticles-detailCountChartSection .AnalyticsWorkArticles-detailCountBodyHeader {
    padding-left: 0
}

.AnalyticsWorkArticles-detailCountChart {
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 30px
}

html[data-theme=dark] .AnalyticsWorkArticles-detailCountChart {
    border-bottom: 1px solid #444
}

.AnalyticsWorkArticles-detailCountBodyHeader {
    color: #646464;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 60px;
    padding: 0 24px
}

html[data-theme=dark] .AnalyticsWorkArticles-detailCountBodyHeader {
    color: #999
}

.AnalyticsWorkArticles-detailCountBodyHeaderTitle {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.AnalyticsWorkArticles-detailCountBodyHeaderTool {
    color: #8590a6
}

html[data-theme=dark] .AnalyticsWorkArticles-detailCountBodyHeaderTool {
    color: #606a80
}

.AnalyticsWorkArticles-detailCountBodyHeaderToolButton {
    cursor: pointer
}

.AnalyticsWorkArticles-detailCountBodyHeaderToolButton .Zi {
    margin-right: 4px
}

.AnalyticsWorkArticles .AnalyticsTable {
    width: 100%
}

.AnalyticsWorkAnswers {
    padding: 20px
}

.AnalyticsWorkAnswers-CreatorSection {
    margin-bottom: 20px
}

.AnalyticsWorkAnswers-CreatorSection:last-child {
    margin-bottom: 0
}

.AnalyticsWorkAnswers-readCount {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 40px 0
}

.AnalyticsWorkAnswers-readCountItem {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-right: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 80px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.AnalyticsWorkAnswers-readCountItem:last-child {
    border-right: none
}

html[data-theme=dark] .AnalyticsWorkAnswers-readCountItem {
    border-right: 1px solid #444
}

.AnalyticsWorkAnswers-readCountNumber {
    font-size: 26px;
    line-height: 1;
    margin-top: 16px;
    position: relative
}

.AnalyticsWorkAnswers-readCountTitle {
    color: #8590a6;
    font-size: 14px;
    line-height: 1
}

html[data-theme=dark] .AnalyticsWorkAnswers-readCountTitle {
    color: #606a80
}

.AnalyticsWorkAnswers-detailCountHeader {
    width: 100%
}

.AnalyticsWorkAnswers-detailCountMenu {
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

html[data-theme=dark] .AnalyticsWorkAnswers-detailCountMenu {
    border-bottom: 1px solid #444
}

.AnalyticsWorkAnswers-detailCountDate {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 13px 0
}

.AnalyticsWorkAnswers-detailCountDate .Button {
    border-color: #ebebeb
}

.AnalyticsWorkAnswers-detailCountDate .Button:hover {
    border-color: #8590a6
}

html[data-theme=dark] .AnalyticsWorkAnswers-detailCountDate .Button:hover {
    border-color: #606a80
}

.AnalyticsWorkAnswers-detailCountDate .Button.is-active {
    border-color: #0084ff
}

html[data-theme=dark] .AnalyticsWorkAnswers-detailCountDate .Button.is-active {
    border-color: #3a76d0
}

html[data-theme=dark] .AnalyticsWorkAnswers-detailCountDate .Button {
    border-color: #444
}

.AnalyticsWorkAnswers-detailCountDateLast {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.AnalyticsWorkAnswers-detailCountDateLast .Button {
    margin-right: 16px
}

.AnalyticsWorkAnswers-detailCountDateRange {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.AnalyticsWorkAnswers-detailCountDateRangeHint {
    color: #8590a6;
    font-size: 14px;
    margin: 0 8px
}

html[data-theme=dark] .AnalyticsWorkAnswers-detailCountDateRangeHint {
    color: #606a80
}

.AnalyticsWorkAnswers-detailCountChartSection {
    padding: 0 24px
}

.AnalyticsWorkAnswers-detailCountChartSection .AnalyticsWorkAnswers-detailCountBodyHeader {
    padding-left: 0
}

.AnalyticsWorkAnswers-detailCountChart {
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 30px
}

html[data-theme=dark] .AnalyticsWorkAnswers-detailCountChart {
    border-bottom: 1px solid #444
}

.AnalyticsWorkAnswers-detailCountBodyHeader {
    color: #646464;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 60px;
    padding: 0 24px
}

html[data-theme=dark] .AnalyticsWorkAnswers-detailCountBodyHeader {
    color: #999
}

.AnalyticsWorkAnswers-detailCountBodyHeaderTitle {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.AnalyticsWorkAnswers-detailCountBodyHeaderTool {
    color: #8590a6
}

html[data-theme=dark] .AnalyticsWorkAnswers-detailCountBodyHeaderTool {
    color: #606a80
}

.AnalyticsWorkAnswers-detailCountBodyHeaderToolButton {
    cursor: pointer
}

.AnalyticsWorkAnswers-detailCountBodyHeaderToolButton .Zi {
    margin-right: 4px
}

.AnalyticsWorkAnswers-expandRowContainer {
    border-top: 1px solid #ebebeb;
    padding-bottom: 24px
}

html[data-theme=dark] .AnalyticsWorkAnswers-expandRowContainer {
    border-top: 1px solid #444
}

.AnalyticsWorkAnswers-expandRowButtonGroup {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 30px 0
}

.AnalyticsWorkAnswers .AnalyticsTable {
    width: 100%
}

.AnalyticsWorkPins {
    padding: 20px
}

.AnalyticsWorkPins-CreatorSection {
    margin-bottom: 20px
}

.AnalyticsWorkPins-CreatorSection:last-child {
    margin-bottom: 0
}

.AnalyticsWorkPins-readCount {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 40px 0
}

.AnalyticsWorkPins-readCountItem {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-right: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.AnalyticsWorkPins-readCountItem:last-child {
    border-right: none
}

html[data-theme=dark] .AnalyticsWorkPins-readCountItem {
    border-right: 1px solid #444
}

.AnalyticsWorkPins-readCountNumber {
    font-size: 26px;
    line-height: 1;
    margin: 16px 0;
    position: relative
}

.AnalyticsWorkPins-readCountTitle {
    color: #8590a6;
    font-size: 14px;
    line-height: 1
}

html[data-theme=dark] .AnalyticsWorkPins-readCountTitle {
    color: #606a80
}

.AnalyticsWorkPins-detailCountHeader {
    width: 100%
}

.AnalyticsWorkPins-detailCountMenu {
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

html[data-theme=dark] .AnalyticsWorkPins-detailCountMenu {
    border-bottom: 1px solid #444
}

.AnalyticsWorkPins-detailCountDate {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 13px 0
}

.AnalyticsWorkPins-detailCountDate .Button {
    border-color: #ebebeb
}

.AnalyticsWorkPins-detailCountDate .Button:hover {
    border-color: #8590a6
}

html[data-theme=dark] .AnalyticsWorkPins-detailCountDate .Button:hover {
    border-color: #606a80
}

.AnalyticsWorkPins-detailCountDate .Button.is-active {
    border-color: #0084ff
}

html[data-theme=dark] .AnalyticsWorkPins-detailCountDate .Button.is-active {
    border-color: #3a76d0
}

html[data-theme=dark] .AnalyticsWorkPins-detailCountDate .Button {
    border-color: #444
}

.AnalyticsWorkPins-detailCountDateLast {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.AnalyticsWorkPins-detailCountDateLast .Button {
    margin-right: 16px
}

.AnalyticsWorkPins-detailCountDateRange {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.AnalyticsWorkPins-detailCountDateRangeHint {
    color: #8590a6;
    font-size: 14px;
    margin: 0 8px
}

html[data-theme=dark] .AnalyticsWorkPins-detailCountDateRangeHint {
    color: #606a80
}

.AnalyticsWorkPins-detailCountChartSection {
    padding: 0 24px
}

.AnalyticsWorkPins-detailCountChartSection .AnalyticsWorkPins-detailCountBodyHeader {
    padding-left: 0
}

.AnalyticsWorkPins-detailCountChart {
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 30px
}

html[data-theme=dark] .AnalyticsWorkPins-detailCountChart {
    border-bottom: 1px solid #444
}

.AnalyticsWorkPins-detailCountBodyHeader {
    color: #646464;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 60px;
    padding: 0 24px
}

html[data-theme=dark] .AnalyticsWorkPins-detailCountBodyHeader {
    color: #999
}

.AnalyticsWorkPins-detailCountBodyHeaderTitle {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.AnalyticsWorkPins-detailCountBodyHeaderTool {
    color: #8590a6
}

html[data-theme=dark] .AnalyticsWorkPins-detailCountBodyHeaderTool {
    color: #606a80
}

.AnalyticsWorkPins-detailCountBodyHeaderToolButton {
    cursor: pointer
}

.AnalyticsWorkPins-detailCountBodyHeaderToolButton .Zi {
    margin-right: 4px
}

.AnalyticsWorkPins-expandRowContainer {
    border-top: 1px solid #ebebeb;
    padding-bottom: 24px
}

html[data-theme=dark] .AnalyticsWorkPins-expandRowContainer {
    border-top: 1px solid #444
}

.AnalyticsWorkPins-expandRowButtonGroup {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 30px 0
}

.AnalyticsWorkPins .AnalyticsTable {
    width: 100%
}

.AnalyticsFollowers {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 280px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.AnalyticsFollowers-hint {
    color: #8590a6;
    line-height: 21px
}

html[data-theme=dark] .AnalyticsFollowers-hint {
    color: #606a80
}

.QuestionReviewInfo {
    width: 640px;
    height: 45px;
    background-color: #ebebeb;
    line-height: 45px;
    color: #8590a6;
    font-size: 15px;
    margin: 10px 0 12px;
    border-radius: 4px
}

.QuestionReviewInfo p {
    margin-left: 16px
}

html[data-theme=dark] .QuestionReviewInfo {
    background-color: #444;
    color: #606a80
}

.QuestionRichText {
    font-size: 15px;
    line-height: 25px
}

.QuestionRichText--expandable.QuestionRichText--collapsed {
    max-height: 51px;
    overflow: hidden;
    cursor: pointer;
    transition: color .14s ease-out
}

.QuestionRichText--expandable.QuestionRichText--collapsed .RichText {
    pointer-events: none
}

.QuestionRichText--expandable.QuestionRichText--collapsed:hover {
    color: #646464
}

html[data-theme=dark] .QuestionRichText--expandable.QuestionRichText--collapsed:hover {
    color: #999
}

.QuestionRichText-more:hover {
    color: gray
}

.QuestionRichText-more:hover .Icon {
    fill: #999
}

html[data-theme=dark] .QuestionRichText-more:hover .Icon {
    fill: #646464
}

html[data-theme=dark] .QuestionRichText-more:hover {
    color: gray
}

.QuestionRichText-more-icon {
    margin-left: 8px
}

.QuestionRichText--video {
    max-height: 105px!important;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 8px
}

.QuestionRichText--image {
    width: 190px;
    height: 105px;
    margin-right: 20px;
    border-radius: 4px
}

.QuestionRichText--wrapImgae {
    position: relative
}

.QuestionRichText--wrapImgae:before {
    content: "";
    border: 2px solid #fff;
    z-index: 2;
    background: rgba(26,26,26,.3);
    border-radius: 50px;
    height: 48px;
    position: absolute;
    width: 48px;
    left: 70px;
    top: 30px;
    margin: auto
}

html[data-theme=dark] .QuestionRichText--wrapImgae:before {
    border: 2px solid #1a1a1a;
    background: hsla(0,0%,60%,.3)
}

.QuestionRichText--wrapImgae:after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 11.5px 0 11.5px 18px;
    border-color: transparent transparent transparent #fff;
    position: absolute;
    z-index: 3;
    border-radius: 2px;
    opacity: .9;
    left: 90px;
    top: 45px;
    margin: auto
}

html[data-theme=dark] .QuestionRichText--wrapImgae:after {
    border-color: transparent transparent transparent #1a1a1a
}

.ToolsQuestionItem {
    border-bottom: 1px solid #ebebeb;
    padding: 16px 0
}

html[data-theme=dark] .ToolsQuestionItem {
    border-bottom: 1px solid #444
}

.ToolsQuestionItem-hint {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 22px;
    color: #8590a6
}

html[data-theme=dark] .ToolsQuestionItem-hint {
    color: #606a80
}

.ToolsQuestionItem-hintLeft {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.ToolsQuestionItem-hintRight {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.ToolsQuestionItem-hintRightSpace {
    white-space: pre
}

.ToolsQuestionItem-label {
    background-color: rgba(133,144,166,.2);
    border-radius: 4px;
    color: #8590a6;
    font-size: 12px;
    line-height: 22px;
    padding: 0 6px
}

html[data-theme=dark] .ToolsQuestionItem-label {
    background-color: rgba(96,106,128,.2);
    color: #606a80
}

.ToolsQuestionItem-label--blue {
    background-color: rgba(0,132,255,.1);
    color: #0084ff
}

html[data-theme=dark] .ToolsQuestionItem-label--blue {
    background-color: rgba(58,118,208,.1);
    color: #3a76d0
}

.ToolsQuestionItem-label--red {
    background-color: rgba(241,64,60,.1);
    color: #f1403c
}

html[data-theme=dark] .ToolsQuestionItem-label--red {
    background-color: rgba(183,48,45,.1);
    color: #b7302d
}

.ToolsQuestionItem-title {
    font-size: 18px;
    margin-top: 10px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ToolsQuestionItem-title {
    font-weight: 500
}

html[data-android] .ToolsQuestionItem-title {
    font-weight: 700
}

.ToolsQuestionItem-title:hover,html[data-theme=dark] .ToolsQuestionItem-title:hover {
    color: #175199
}

.ToolsQuestionItem-detail {
    margin-top: 10px
}

.ToolsQuestionItem-tool {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 15px
}

.ToolsQuestionItem-toolLeft {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.ToolsQuestionItem-toolLeft,.ToolsQuestionItem-toolRight {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.ToolsQuestionItem-toolButton {
    line-height: 26px;
    margin-right: 16px;
    width: 96px
}

.ToolsQuestionItem-toolButtonText {
    color: #8590a6;
    font-size: 14px
}

html[data-theme=dark] .ToolsQuestionItem-toolButtonText {
    color: #606a80
}

.ToolsQuestionItem-toolHide {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8590a6;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 100%
}

html[data-theme=dark] .ToolsQuestionItem-toolHide {
    color: #606a80
}

.ToolsGoodAtTopic {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%
}

.ToolsGoodAtTopic .List-item {
    padding: 20px
}

.ToolsGoodAtTopic-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 55px;
    padding: 0 24px
}

html[data-theme=dark] .ToolsGoodAtTopic-header {
    border-bottom: 1px solid #444
}

.ToolsGoodAtTopic-body {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-y: scroll
}

.ToolsGoodAtTopic-title {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    line-height: 1;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ToolsGoodAtTopic-title {
    font-weight: 500
}

html[data-android] .ToolsGoodAtTopic-title {
    font-weight: 700
}

.ToolsGoodAtTopic-Input {
    width: 238px
}

.ToolsGoodAtTopic-searchIcon {
    color: #8590a6
}

html[data-theme=dark] .ToolsGoodAtTopic-searchIcon {
    color: #606a80
}

.ToolsGoodAtTopic-noGoodatHint {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8590a6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-size: 16px;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

html[data-theme=dark] .ToolsGoodAtTopic-noGoodatHint {
    color: #606a80
}

.ToolsGoodAtTopic-topic {
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 24px;
    padding: 16px 0 14px
}

html[data-theme=dark] .ToolsGoodAtTopic-topic {
    border-bottom: 1px solid #444
}

.ToolsGoodAtTopic-topicList {
    height: 100%
}

.ToolsGoodAtTopic-topic .TopicLink-avatar {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-right: 16px
}

.ToolsGoodAtTopic-topicInfo {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden
}

.ToolsGoodAtTopic-topicName {
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ToolsGoodAtTopic-topicName {
    font-weight: 500
}

html[data-android] .ToolsGoodAtTopic-topicName {
    font-weight: 700
}

.ToolsGoodAtTopic-topicExcerpt {
    line-height: 1;
    margin-top: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.ToolsGoodAtTopic-topicButton {
    -ms-flex-item-align: center;
    -ms-grid-row-align: center;
    align-self: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: 36px;
    width: 94px
}

.ToolsGoodAtTopic-topicButtonGoodat--hovering,.ToolsGoodAtTopic-topicButtonGoodat:hover .ToolsGoodAtTopic-topicButtonGoodat--default {
    display: none
}

.ToolsGoodAtTopic-topicButtonGoodat:hover .ToolsGoodAtTopic-topicButtonGoodat--hovering {
    display: inline-block
}

.ToolsGoodAtTopic-answerCount {
    color: #8590a6;
    font-size: 14px;
    margin-top: 13px
}

html[data-theme=dark] .ToolsGoodAtTopic-answerCount {
    color: #606a80
}

.ToolsQuestionNew-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 50px;
    margin: 0 20px
}

html[data-theme=dark] .ToolsQuestionNew-header {
    border-bottom: 1px solid #444
}

.ToolsQuestionNew-title {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ToolsQuestionNew-title {
    font-weight: 500
}

html[data-android] .ToolsQuestionNew-title {
    font-weight: 700
}

.ToolsQuestionNew-topic {
    color: #8590a6;
    cursor: pointer
}

html[data-theme=dark] .ToolsQuestionNew-topic {
    color: #606a80
}

.ToolsQuestionNew-questionList {
    padding: 0 20px
}

.ToolsQuestionNew-questionList .PlaceHolder {
    padding: 16px 0;
    width: 640px
}

.ToolsQuestionNew-goodatTopicHint {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    color: #8590a6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 194px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

html[data-theme=dark] .ToolsQuestionNew-goodatTopicHint {
    border-bottom: 1px solid #444;
    color: #606a80
}

.ToolsQuestionNew-goodatTopicHintText {
    margin-top: 28px
}

.ToolsQuestionNew-goodatTopicHintLink {
    color: #175199;
    cursor: pointer
}

html[data-theme=dark] .ToolsQuestionNew-goodatTopicHintLink {
    color: #175199
}

.ToolsQuestionRecommend-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 50px;
    margin: 0 20px
}

html[data-theme=dark] .ToolsQuestionRecommend-header {
    border-bottom: 1px solid #444
}

.ToolsQuestionRecommend-title {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ToolsQuestionRecommend-title {
    font-weight: 500
}

html[data-android] .ToolsQuestionRecommend-title {
    font-weight: 700
}

.ToolsQuestionRecommend-topic {
    color: #8590a6;
    cursor: pointer
}

html[data-theme=dark] .ToolsQuestionRecommend-topic {
    color: #606a80
}

.ToolsQuestionRecommend-questionList {
    padding: 0 20px
}

.ToolsQuestionRecommend-questionList .PlaceHolder {
    padding: 16px 0;
    width: 640px
}

.ToolsQuestionRecommend-goodatTopicHint {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    color: #8590a6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 194px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

html[data-theme=dark] .ToolsQuestionRecommend-goodatTopicHint {
    border-bottom: 1px solid #444;
    color: #606a80
}

.ToolsQuestionRecommend-goodatTopicHintText {
    margin-top: 28px
}

.ToolsQuestionRecommend-goodatTopicHintLink {
    color: #175199;
    cursor: pointer
}

html[data-theme=dark] .ToolsQuestionRecommend-goodatTopicHintLink {
    color: #175199
}

.ToolsRecommend-tooltipIcon {
    color: #bfbfbf;
    cursor: pointer;
    margin-left: 4px
}

html[data-theme=dark] .ToolsRecommend-tooltipIcon {
    color: #444
}

.ToolsRecommendList {
    padding: 20px
}

.ToolsRecommendList .CreatorSection:first-child {
    margin-bottom: 20px
}

.ToolsRecommendList-availabeTimesSection .CreatorSection-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.ToolsRecommendList-availabeTimesSection .CreatorSectionItem {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.ToolsRecommendList-availableTimesContainer {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 30px 0 25px
}

.ToolsRecommendList-availableTimesHint {
    color: #8590a6;
    font-size: 14px;
    margin-bottom: 14px
}

html[data-theme=dark] .ToolsRecommendList-availableTimesHint {
    color: #606a80
}

.ToolsRecommendList-availableTimesNumber {
    color: #444;
    font-size: 26px
}

html[data-theme=dark] .ToolsRecommendList-availableTimesNumber {
    color: gray
}

.ToolsRecommendList-Table {
    table-layout: fixed
}

.ToolsRecommendList-titleColumn {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.ToolsRecommendList-Modal {
    height: auto
}

.ToolsRecommendList-ruleContent {
    margin: 0 24px;
    height: 340px;
    overflow-y: scroll
}

.ToolsRecommendList-confirmModalContent {
    text-align: center
}

.ToolsRecommendRecord-Table {
    table-layout: fixed
}

.ToolsRecommendRecord-titleColumn {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.ToolsQuestionInvited-subTabs {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    border-bottom: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 50px;
    margin: 0 20px
}

html[data-theme=dark] .ToolsQuestionInvited-subTabs {
    border-bottom: 1px solid #444
}

.ToolsQuestionInvited-subTabsItem {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: 36px
}

.ToolsQuestionInvited-subTabsItem--focused .ToolsQuestionInvited-subTabsItemTitle {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ToolsQuestionInvited-subTabsItem--focused .ToolsQuestionInvited-subTabsItemTitle {
    font-weight: 500
}

html[data-android] .ToolsQuestionInvited-subTabsItem--focused .ToolsQuestionInvited-subTabsItemTitle {
    font-weight: 700
}

.ToolsQuestionInvited-subTabsItemTitle {
    margin-right: 8px
}

.ToolsQuestionInvited-subTabsItemMeta {
    color: #8590a6
}

html[data-theme=dark] .ToolsQuestionInvited-subTabsItemMeta {
    color: #606a80
}

.ToolsQuestionInvited-questionList {
    padding: 0 20px
}

.ToolsQuestionInvited-questionList .PlaceHolder {
    padding: 16px 0;
    width: 640px
}

.CreatorDatePicker {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.CreatorDatePicker-Button {
    padding: 0 12px
}

.CreatorDatePicker-Button .Zi {
    margin-right: 4px
}

.CustomPromotion-cardWrapper {
    min-width: 262px;
    margin: 40px 16px;
    padding: 20px 12px 12px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.CustomPromotion-cardWrapper--imgLeft {
    -webkit-box-pack: initial;
    -ms-flex-pack: initial;
    justify-content: initial
}

html[data-theme=dark] .CustomPromotion-cardWrapper {
    border: 1px solid #444
}

.CustomPromotion-cardWrapperTag {
    position: absolute;
    padding: 0 4px;
    height: 20px;
    line-height: 20px;
    font-size: 10px;
    color: #fff;
    background-color: #1a1a1a;
    border: 4px solid #fff;
    border-radius: 8px;
    left: 8px;
    top: -14px
}

html[data-theme=dark] .CustomPromotion-cardWrapperTag {
    color: #1a1a1a;
    background-color: #999;
    border: 4px solid #1a1a1a
}

.Rating {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Rating-star {
    position: relative;
    width: 16px;
    height: 16px
}

.Rating-star .Zi {
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    fill: #fa0
}

.Rating-star--half .Zi:first-child {
    fill: #d7d7d9
}

.Rating-star--half .Zi:last-child {
    clip: rect(0,8px,16px,0);
    -webkit-clip-path: inset(0 8px 0 0);
    clip-path: inset(0 8px 0 0)
}

.Rating-star--empty path {
    fill: #d7d7d9
}

.CustomPromotion-emptyImgWrapper {
    width: 90px;
    height: 60px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #d3d3d3;
    border-radius: 8px;
    color: #fff
}

html[data-theme=dark] .CustomPromotion-emptyImgWrapper {
    background-color: #2e2e2e;
    color: #ebebeb
}

.CustomPromotion-title {
    font-size: 16px;
    line-height: 1.28;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    word-break: break-word;
    max-height: 40px
}

.CustomPromotion-textSection {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: calc(100% - 70px)
}

.CustomPromotion-textSection--rightImg {
    width: calc(100% - 100px)
}

.CustomPromotion-statusList {
    margin-top: 2px;
    font-size: 12px;
    color: #999
}

.CustomPromotion-statusList :not(:first-child):before {
    margin: 0 5px;
    content: "\B7"
}

html[data-theme=dark] .CustomPromotion-statusList {
    color: #646464
}

.CustomPromotion-leftImg {
    width: 60px;
    height: 60px;
    border-radius: 8px
}

.CustomPromotion-leftImgWrapper {
    margin-right: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.CustomPromotion-ebookImgWrapper {
    width: 60px;
    height: 80px;
    border-radius: 8px;
    overflow: hidden
}

.CustomPromotion-ebookImg {
    width: 60px
}

.CustomPromotion-scoreLine {
    margin-top: 3px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 20px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .CustomPromotion-scoreLine {
    color: #606a80
}

.CustomPromotion-TryTag {
    font-size: 12px;
    padding: 0 3px;
    height: 18px;
    border-radius: 3px;
    color: #fff;
    text-align: center;
    margin-right: 7px
}

.CustomPromotion-TryTag,html[data-theme=dark] .CustomPromotion-TryTag {
    background-color: #ff9607
}

html[data-theme=dark] .CustomPromotion-TryTag {
    color: #1a1a1a
}

.CustomPromotion-Score {
    margin-top: -12px
}

.CustomPromotion-rightImg {
    width: 90px;
    height: 60px;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 8px
}

.CustomPromotion-rightImgWrapper {
    margin-left: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.ToolsCustomPromotion-phonePreviewer {
    position: relative;
    width: 320px;
    height: 627px
}

.ToolsCustomPromotion-phonePreviewerCardWrapper {
    position: absolute;
    top: 85px
}

.ToolsCustomPromotion-SelectModalWrapper {
    width: 596px
}

.ToolsCustomPromotion-SelectModalWrapper .Modal-content {
    padding: 0 0 32px
}

.ToolsCustomPromotion-tableContentTitle {
    width: 310px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.ToolsCustomPromotion-modalTabs {
    width: 100%;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.ToolsCustomPromotion-tableContentDate {
    color: #999
}

html[data-theme=dark] .ToolsCustomPromotion-tableContentDate {
    color: #646464
}

.ToolsCustomPromotion-modalTab {
    cursor: pointer
}

.ToolsCustomPromotion-tableContentWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.ToolsCustomPromotion-editWrapper {
    margin: 20px
}

.ToolsCustomPromotion-editHint {
    color: #8590a6;
    font-size: 14px;
    margin-bottom: 20px
}

html[data-theme=dark] .ToolsCustomPromotion-editHint {
    color: #606a80
}

.ToolsCustomPromotion-editContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 40px;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .ToolsCustomPromotion-editContent {
    border-bottom: 1px solid #444
}

.ToolsCustomPromotion-editOptionSection {
    position: relative;
    margin-top: 68px;
    margin-left: 20px;
    height: 240px;
    width: 410px;
    border: 1px solid #ebebeb;
    padding: 20px;
    border-radius: 2px
}

html[data-theme=dark] .ToolsCustomPromotion-editOptionSection {
    border: 1px solid #444
}

.ToolsCustomPromotion-editOptionSectionArrow {
    position: absolute;
    width: 13px;
    height: 13px;
    border-width: 1px 0 0 1px;
    border-color: #ebebeb;
    border-style: solid;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 100px;
    left: -8px;
    background-color: #fff;
    box-sizing: content-box
}

html[data-theme=dark] .ToolsCustomPromotion-editOptionSectionArrow {
    border-color: #444;
    background-color: #1a1a1a
}

.ToolsCustomPromotion-editTitle {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-bottom: 14px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .ToolsCustomPromotion-editTitle {
    border-bottom: 1px solid #444
}

.ToolsCustomPromotion-boldText {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ToolsCustomPromotion-boldText {
    font-weight: 500
}

html[data-android] .ToolsCustomPromotion-boldText {
    font-weight: 700
}

.ToolsCustomPromotion-editOptionSectionContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 200px
}

.ToolsCustomPromotion-editOptionSectionSelectedTitle {
    margin-top: 20px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    word-break: break-word;
    max-height: 40px
}

.ToolsCustomPromotion-editDatePickers {
    margin-top: 20px;
    width: 300px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: gray
}

html[data-theme=dark] .ToolsCustomPromotion-editDatePickers {
    color: gray
}

.ToolsCustomPromotion-submitButtonWrapper {
    margin: 25px auto 60px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.ToolsCustomPromotion-showStatusContent {
    width: 100%;
    padding: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.ToolsCustomPromotion-showStatusHint {
    text-align: center;
    font-size: 14px;
    color: #999;
    margin-top: 12px;
    margin-bottom: 24px;
    width: 378px
}

.ToolsCustomPromotion-showStatusHint--error {
    width: 310px;
    color: #f1403c
}

html[data-theme=dark] .ToolsCustomPromotion-showStatusHint--error {
    color: #b7302d
}

html[data-theme=dark] .ToolsCustomPromotion-showStatusHint {
    color: #646464
}

.ToolsCustomPromotion-showStatusTitle {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ToolsCustomPromotion-showStatusTitle {
    font-weight: 500
}

html[data-android] .ToolsCustomPromotion-showStatusTitle {
    font-weight: 700
}

.ToolsCustomPromotion-showStatusButtonGroup {
    width: 190px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.ToolsCustomPromotion-showStatusPhonePreviewerWrapper {
    margin-top: 33px
}

.ToolsCustomPromotion-showStatusCancelModalText {
    width: 100%;
    text-align: center
}

.ProfitReward-title {
    border-bottom: 1px solid #ebebeb;
    font-size: 16px;
    line-height: 50px;
    padding-left: 20px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ProfitReward-title {
    font-weight: 500
}

html[data-android] .ProfitReward-title {
    font-weight: 700
}

html[data-theme=dark] .ProfitReward-title {
    border-bottom: 1px solid #444
}

.Creator-Iframe {
    border: none;
    width: 100%
}

.ProfitCommercialTask-iframe {
    border: none;
    height: 1440px;
    width: 100%
}

.ExploreAcademy-article {
    border-bottom: 1px solid #ebebeb;
    margin: 0 20px
}

.ExploreAcademy-article--current .ExploreAcademy-articleTitleDot {
    background-color: #0084ff
}

html[data-theme=dark] .ExploreAcademy-article--current .ExploreAcademy-articleTitleDot {
    background-color: #3a76d0
}

.ExploreAcademy-article--current .ExploreAcademy-articleTitleText {
    color: #0084ff
}

html[data-theme=dark] .ExploreAcademy-article--current .ExploreAcademy-articleTitleText {
    color: #3a76d0
}

.ExploreAcademy-article--current .ExploreAcademy-articleContent {
    display: block
}

html[data-theme=dark] .ExploreAcademy-article {
    border-bottom: 1px solid #444
}

.ExploreAcademy-articleTitle {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 16px;
    height: 60px
}

.ExploreAcademy-articleTitleDot {
    background-color: #8590a6;
    border-radius: 3px;
    color: #1a1a1a;
    height: 6px;
    margin-right: 14px;
    width: 6px
}

html[data-theme=dark] .ExploreAcademy-articleTitleDot {
    background-color: #606a80;
    color: #999
}

.ExploreAcademy-articleTitleText {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.ExploreAcademy-articleTitleIcon {
    color: #8590a6
}

html[data-theme=dark] .ExploreAcademy-articleTitleIcon {
    color: #606a80
}

.ExploreAcademy-articleContent {
    display: none;
    padding: 0 0 20px 20px
}

.GrowthLevel-panelSvgSwapper {
    position: absolute;
    top: -80px
}

.GrowthLevel-cardContent {
    padding: 20px
}

.GrowthLevel-panelCard {
    margin-bottom: 20px;
    border: 1px solid #ebebeb
}

html[data-theme=dark] .GrowthLevel-panelCard {
    border: 1px solid #444
}

.GrowthLevel-panelCardHeader {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .GrowthLevel-panelCardHeader {
    border-bottom: 1px solid #444
}

.GrowthLevel-container .Card-headerText {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.GrowthLevel-panelCardHeaderHint {
    font-weight: 400;
    color: gray
}

html[data-theme=dark] .GrowthLevel-panelCardHeaderHint {
    color: gray
}

.GrowthLevel-panelCardContent {
    height: 510px;
    box-sizing: border-box;
    padding: 20px;
    position: relative
}

.GrowthLevel-bottomSection,.GrowthLevel-panelCardContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.GrowthLevel-bottomSection {
    margin-bottom: 40px;
    margin-top: -100px
}

.GrowthLevel-bottomText {
    margin-bottom: 20px;
    font-size: 15px
}

.GrowthLevel-blueText {
    color: #0084ff
}

html[data-theme=dark] .GrowthLevel-blueText {
    color: #3a76d0
}

.GrowthLevel-bottomButton {
    z-index: 1;
    width: 186px
}

.GrowthLevel-descriptionContent {
    padding: 20px
}

.GrowthLevel-ul>li {
    list-style: inside
}

.AccountRights-title {
    border-bottom: 1px solid #ebebeb;
    font-size: 16px;
    line-height: 50px;
    padding-left: 20px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .AccountRights-title {
    font-weight: 500
}

html[data-android] .AccountRights-title {
    font-weight: 700
}

html[data-theme=dark] .AccountRights-title {
    border-bottom: 1px solid #444
}

.AccountRights-rightsList {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 10px 10px 20px
}

.AccountRights-rights {
    box-sizing: border-box;
    margin: 10px;
    width: 380px
}

.AccountRights-rights .CreatorSection-header {
    padding-left: 20px
}

.AccountRights-rightsBody {
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 180px;
    padding: 20px 20px 15px
}

.AccountRights-rightsTitle {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 60px
}

.AccountRights-rightsIcon {
    color: #0084ff;
    margin-right: 10px
}

html[data-theme=dark] .AccountRights-rightsIcon {
    color: #3a76d0
}

.AccountRights-rightsName {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .AccountRights-rightsName {
    font-weight: 500
}

html[data-android] .AccountRights-rightsName {
    font-weight: 700
}

.AccountRights-rightsRequirement {
    color: gray;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-size: 14px;
    margin-top: 10px
}

html[data-theme=dark] .AccountRights-rightsRequirement {
    color: gray
}

.AccountRights-RightsButton {
    -ms-flex-item-align: end;
    align-self: flex-end
}

.AccountRights-moreRightsHint {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 240px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0
}

.AccountRights-moreRightsHintImage {
    height: 88px;
    -o-object-fit: cover;
    object-fit: cover;
    width: 88px
}

.AccountRights-moreRightsHintText {
    color: gray;
    margin-top: 10px
}

html[data-theme=dark] .AccountRights-moreRightsHintText {
    color: gray
}

.AccountRights-passModalBody {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-top: 46px
}

.AccountRights-passModalImage {
    height: 128px;
    -o-object-fit: cover;
    object-fit: cover;
    width: 128px
}

.AccountRights-passModalTitle {
    font-size: 24px;
    line-height: 33px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .AccountRights-passModalTitle {
    font-weight: 500
}

html[data-android] .AccountRights-passModalTitle {
    font-weight: 700
}

.AccountRights-passModalText {
    margin-top: 16px;
    max-width: 280px;
    text-align: center
}

.CreatorSettings-fieldItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 80px
}

.CreatorSettings-fieldItem:not(:first-child) {
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .CreatorSettings-fieldItem:not(:first-child) {
    border-top: 1px solid #444
}

.CreatorSettings-fieldItemLabel {
    width: 160px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .CreatorSettings-fieldItemLabel {
    font-weight: 500
}

html[data-android] .CreatorSettings-fieldItemLabel {
    font-weight: 700
}

.CreatorSettings-fieldItemContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.CreatorSettings-identityAddModal {
    width: 700px
}

.CreatorSettings-identityAddModalContentWrapper {
    padding-top: 10px
}

.CreatorSettings-identityAddModalContentWrapper--cardType {
    padding-top: 15px
}

.CreatorSettings-identityAddModalButtonGroup {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.CreatorSettings-identityAddModalButton {
    width: 168px;
    -webkit-box-flex: initial!important;
    -ms-flex: initial!important;
    flex: initial!important
}

.CreatorSettings-identityHavePhotoHint {
    margin-top: 20px
}

.CreatorSettings-identityPhotoList {
    margin-left: -10px
}

.CreatorSettings-fieldUploadImageFieldSection {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.CreatorSettings-fieldUploadImageFieldHint {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.CreatorSettings-content {
    padding: 20px
}

.CreatorSettings-innerCard {
    border: 1px solid #ebebeb
}

html[data-theme=dark] .CreatorSettings-innerCard {
    border: 1px solid #444
}

.CreatorSettings-innerCardTitle {
    height: 60px;
    padding: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb
}

.CreatorSettings-innerCardTitle>:first-child {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .CreatorSettings-innerCardTitle>:first-child {
    font-weight: 500
}

html[data-android] .CreatorSettings-innerCardTitle>:first-child {
    font-weight: 700
}

html[data-theme=dark] .CreatorSettings-innerCardTitle {
    border-bottom: 1px solid #444
}

.CreatorSettings-innerCardContent {
    padding: 0 20px
}

.CreatorSettings-editingField {
    padding-top: 25px
}

.CreatorSettings-buttonGroup {
    width: 120px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    margin-top: -20px
}

.CreatorSettings-statusSection {
    font-weight: 400
}

.CreatorSettings-statusSectionNotPassHint {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #f1403c;
    margin-right: 5px;
    font-size: 14px
}

html[data-theme=dark] .CreatorSettings-statusSectionNotPassHint {
    color: #b7302d
}

.CreatorSettings-statusSectionReviewingHint {
    color: #999;
    margin-right: 5px;
    font-size: 14px
}

html[data-theme=dark] .CreatorSettings-statusSectionReviewingHint {
    color: #646464
}

.CreatorSettings-statusSection,.CreatorSettings-statusTextGroup {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.CreatorSettings-statusTextGroup :not(:last-child) {
    margin-left: 10px
}

.Anonymous-confirm ul {
    padding-left: 2em
}

.Anonymous-confirm ul li {
    list-style: disc
}

.Redirector {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #eff2f5;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.Redirector,.Redirector-body>div:first-child {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Redirector-body>div:first-child {
    font-size: 30px;
    color: #222;
    line-height: 1.2;
    margin: 0 0 .33em .33em;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Redirector-body>div:first-child {
    font-weight: 500
}

html[data-android] .Redirector-body>div:first-child {
    font-weight: 700
}

.Redirector-content {
    width: 404px;
    box-sizing: border-box;
    padding: 36px 20px;
    border-radius: 4px;
    font-size: 16px;
    background-color: #f7f7f7;
    border: 1px solid #babbbc;
    text-align: center
}

.Redirector-mobileContent {
    width: unset;
    padding: 24px 20px
}

.Redirector-mobileContent .Redirector-counter {
    padding: 20px 0;
    margin-bottom: 16px
}

.Redirector-title {
    font-size: 18px;
    color: #000;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Redirector-title {
    font-weight: 500
}

html[data-android] .Redirector-title {
    font-weight: 700
}

.Redirector-counter {
    color: #999;
    padding: 30px 0;
    border-bottom: 1px solid #9a9a9a;
    margin-bottom: 24px
}

.Redirector-link {
    color: #105cb6
}

.AnswerCard {
    transition: box-shadow .3s
}

.AnswerCard.is-focus {
    position: relative;
    z-index: 1;
    box-shadow: 0 5px 30px rgba(26,26,26,.16)
}

html[data-theme=dark] .AnswerCard.is-focus {
    box-shadow: 0 5px 30px hsla(0,0%,60%,.16)
}

.QuestionButtonGroup {
    display: inline-block;
    margin: 0 -8px
}

.QuestionButtonGroup .Button {
    margin: 0 8px
}

.QuestionButton-icon {
    vertical-align: text-bottom;
    margin-right: 4px
}

.MobileQuestionButtonGroup .Button {
    margin-right: 16px
}

.QuestionMainAction {
    width: 100%;
    height: 50px;
    font-size: 15px;
    border: none;
    border-radius: 0
}

.QuestionMainAction:first-child:not(:last-child) {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .QuestionMainAction:first-child:not(:last-child) {
    border-bottom: 1px solid #444
}

.QuestionMainAction:last-child:not(:first-child) {
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .QuestionMainAction:last-child:not(:first-child) {
    border-top: 1px solid #444
}

.QuestionMainAction a {
    color: #175199
}

.QuestionMainAction a:hover,html[data-theme=dark] .QuestionMainAction a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .QuestionMainAction a {
    color: #175199
}

a.QuestionMainAction {
    display: block;
    line-height: 50px;
    color: #8590a6;
    text-align: center
}

a.QuestionMainAction:hover,html[data-theme=dark] a.QuestionMainAction:hover {
    color: #175199
}

html[data-theme=dark] a.QuestionMainAction {
    color: #606a80
}

.AutoInviteItem-button--open {
    color: grey
}

.AutoInviteItem-button--closed {
    color: #0084ff
}

html[data-theme=dark] .AutoInviteItem-button--closed {
    color: #3a76d0
}

.AutoInviteItem-wrapper--desktop {
    padding: 12px;
    background: #f6f6f6;
    border-radius: 8px;
    margin: 12px 12px 0
}

html[data-theme=dark] .AutoInviteItem-wrapper--desktop {
    background: #2e2e2e
}

.AutoInviteItem-wrapper--mobile {
    background: #f6f6f6;
    padding: 12px 16px
}

html[data-theme=dark] .AutoInviteItem-wrapper--mobile {
    background: #2e2e2e
}

.QuestionInvitation {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 100%
}

.QuestionInvitation .Card-headerText {
    color: #8590a6
}

html[data-theme=dark] .QuestionInvitation .Card-headerText {
    color: #606a80
}

.QuestionInvitation em {
    font-style: normal;
    color: #f1403c
}

html[data-theme=dark] .QuestionInvitation em {
    color: #b7302d
}

.QuestionInvitation-title {
    font-size: 16px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .QuestionInvitation-title {
    font-weight: 500
}

html[data-android] .QuestionInvitation-title {
    font-weight: 700
}

.QuestionInvitation-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto
}

.QuestionInvitation-content .ContentItem-title+.QuestionInvitation-content .ContentItem-meta {
    margin-top: 4px
}

.QuestionInvitation-content .List-item {
    padding: 12px 24px
}

.QuestionInvitation-content .List-item--mobile {
    padding: 12px 16px
}

.QuestionInvitation-content .ContentItem-title {
    font-size: 15px;
    line-height: 1.6
}

.QuestionInvitation-content .Avatar {
    width: 38px!important;
    height: 38px!important
}

.QuestionInvitation-content .UserItem {
    font-size: 15px
}

.QuestionInvitation-content .ContentItem-meta {
    font-size: 14px
}

.QuestionInvitation-content .ContentItem-extra>.Button {
    width: 80px;
    height: 32px;
    padding: 0
}

.QuestionInvitation-content--centered {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 160px
}

.QuestionInvitation-content--centered .ContentItem-title+.QuestionInvitation-content--centered .ContentItem-meta {
    margin-top: 4px
}

.QuestionInvitation-content--centered .List-item {
    padding: 12px 24px
}

.QuestionInvitation-content--centered .List-item--mobile {
    padding: 12px 16px
}

.QuestionInvitation-content--centered .ContentItem-title {
    font-size: 15px;
    line-height: 1.6
}

.QuestionInvitation-content--centered .Avatar {
    width: 38px!important;
    height: 38px!important
}

.QuestionInvitation-content--centered .UserItem {
    font-size: 15px
}

.QuestionInvitation-content--centered .ContentItem-meta {
    font-size: 14px
}

.QuestionInvitation-content--centered .ContentItem-extra>.Button {
    width: 80px;
    height: 32px;
    padding: 0
}

.Invitees {
    max-height: 383px;
    overflow-y: auto
}

.Invitees-toggler {
    font-size: 15px;
    color: inherit
}

.Invitees-togglerUsers {
    font-weight: 400;
    color: #1a1a1a
}

html[data-theme=dark] .Invitees-togglerUsers {
    color: #999
}

.InviteeItem {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 340px;
    padding: 16px;
    box-sizing: border-box
}

.InviteeItem:not(:last-child):after {
    position: absolute;
    bottom: 0;
    display: block;
    width: calc(100% - 32px);
    border-bottom: 1px solid #f6f6f6;
    content: ""
}

html[data-theme=dark] .InviteeItem:not(:last-child):after {
    border-bottom: 1px solid #2e2e2e
}

.InviteeItem-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.InviteeItem-image {
    margin-right: 12px
}

.InviteeItem-title {
    margin: 0;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .InviteeItem-title {
    font-weight: 500
}

html[data-android] .InviteeItem-title {
    font-weight: 700
}

.QuestionStatus-notification-closeButton {
    padding-left: 16px
}

.QuestionStatus-bar {
    position: relative;
    padding: 16px;
    line-height: 28px;
    color: #8590a6;
    text-align: center;
    background-color: rgba(133,144,166,.08);
    z-index: 5
}

.QuestionStatus-bar em,.QuestionStatus-bar strong {
    font-style: normal;
    font-weight: 600;
    font-synthesis: style;
    color: #444
}

html[data-ios] .QuestionStatus-bar em,html[data-ios] .QuestionStatus-bar strong {
    font-weight: 500
}

html[data-android] .QuestionStatus-bar em,html[data-android] .QuestionStatus-bar strong {
    font-weight: 700
}

html[data-theme=dark] .QuestionStatus-bar em,html[data-theme=dark] .QuestionStatus-bar strong {
    color: gray
}

html[data-theme=dark] .QuestionStatus-bar {
    color: #606a80;
    background-color: rgba(96,106,128,.08)
}

.QuestionStatus-bar-inner {
    width: 1000px;
    padding: 0 24px;
    margin: 0 auto;
    box-sizing: border-box
}

.QuestionStatus-bar-inner a {
    color: #0084ff
}

html[data-theme=dark] .QuestionStatus-bar-inner a {
    color: #3a76d0
}

.QuestionStatus-bar-inner+p {
    line-height: 26px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .QuestionStatus-bar-inner+p {
    color: #606a80
}

.QuestionStatus-bar-commercialMuted {
    line-height: 26px;
    font-size: 14px;
    font-weight: 600;
    font-synthesis: style;
    color: #444
}

html[data-ios] .QuestionStatus-bar-commercialMuted {
    font-weight: 500
}

html[data-android] .QuestionStatus-bar-commercialMuted {
    font-weight: 700
}

.QuestionStatus-bar-commercialMuted a {
    color: #0084ff
}

html[data-theme=dark] .QuestionStatus-bar-commercialMuted a {
    color: #3a76d0
}

.QuestionStatus-bar-commercialMuted+p {
    line-height: 26px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .QuestionStatus-bar-commercialMuted+p {
    color: #606a80
}

html[data-theme=dark] .QuestionStatus-bar-commercialMuted {
    color: gray
}

.QuestionStatus-notification {
    position: absolute;
    z-index: 99
}

.QuestionStatus-notification-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.QuestionStatus-notification-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap
}

.QuestionStatus-notification-content a {
    display: inline;
    color: #175199
}

.QuestionStatus-notification-content a:hover {
    text-decoration: underline
}

html[data-theme=dark] .QuestionStatus-notification-content a {
    color: #175199
}

.QuestionStatus-notification-actions {
    margin-left: 32px
}

.QuestionStatus-notification-divider {
    display: inline-block;
    height: 14px;
    margin: 0 12px;
    vertical-align: middle;
    border-right: 1px solid #ebebeb
}

html[data-theme=dark] .QuestionStatus-notification-divider {
    border-right: 1px solid #444
}

.QuestionStatus-notification-primary,html[data-theme=dark] .QuestionStatus-notification-primary {
    color: #175199
}

.QuestionFollowStatus-counts {
    width: 200px;
    margin-left: auto
}

.QuestionFollowStatus-counts .NumberBoard-itemInner {
    padding: 0 8px
}

.QuestionFollowStatus-people {
    height: 32px;
    margin-top: 10px
}

.QuestionFollowStatus-people .UserLink {
    display: inline-block;
    vertical-align: middle
}

.QuestionFollowStatus-people .UserLink+.UserLink {
    margin-left: -8px
}

.QuestionFollowStatus-people .Avatar {
    display: block;
    border: 1px solid #fff;
    box-shadow: 0 2px 4px rgba(26,26,26,.1)
}

html[data-theme=dark] .QuestionFollowStatus-people .Avatar {
    border: 1px solid #1a1a1a;
    box-shadow: 0 2px 4px hsla(0,0%,60%,.1)
}

.QuestionFollowStatus-people-tip {
    margin-right: 8px;
    font-size: 14px;
    color: #8590a6;
    vertical-align: middle
}

html[data-theme=dark] .QuestionFollowStatus-people-tip {
    color: #606a80
}

.QuestionRedirectionCreator-content {
    height: 160px
}

.QuestionRedirectionCreator .Popover {
    display: block
}

.QuestionRedirectionCreator .Input {
    height: 30px
}

.QuestionRedirectionCreator-menu {
    width: 488px
}

.QuestionHeaderActions {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.QuestionHeaderActions>.Button:not(:first-child),.QuestionHeaderActions>.Popover:not(:first-child) {
    margin-left: 20px
}

@media (max-width: 690px) {
    .QuestionHeaderActions>.Button:not(:first-child),.QuestionHeaderActions>.Popover:not(:first-child) {
        margin-left:16px
    }
}

.BrandQuestionSymbol {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 15px;
    color: #8590a6
}

html[data-theme=dark] .BrandQuestionSymbol {
    color: #606a80
}

.BrandQuestionSymbol-brandLink {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.BrandQuestionSymbol-brandLink .UserLink-badge {
    margin-left: 0;
    margin-right: 5px
}

.BrandQuestionSymbol-name {
    margin-left: 8px;
    margin-right: 5px;
    color: #175199
}

html[data-theme=dark] .BrandQuestionSymbol-name {
    color: #175199
}

.BrandQuestionSymbol-logo {
    border-radius: 28px;
    width: 28px;
    height: 28px
}

.BrandQustionSymbol-link {
    text-decoration: underline
}

.BrandQustionSymbol-link:hover,html[data-theme=dark] .BrandQustionSymbol-link:hover {
    color: #175199
}

.BrandQustionSymbol-divider {
    margin-left: 16px;
    margin-right: 17px;
    border-left: 1px solid #ebebeb;
    height: 24px;
    background: #ebebeb
}

html[data-theme=dark] .BrandQustionSymbol-divider {
    border-left: 1px solid #444;
    background: #444
}

.BrandQuestionSymbol.is-mobile .BrandQuestionSymbol-logo {
    border-radius: 22px;
    width: 22px;
    height: 22px
}

.BrandQuestionPrizes {
    margin-bottom: 15px;
    width: 645px
}

.BrandQuestionPrizes-info {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    width: 100%;
    overflow: hidden
}

html[data-theme=dark] .BrandQuestionPrizes-info {
    border: 1px solid #444
}

.BrandQuestionPrizes-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: -1px;
    border-bottom: 1px solid #ebebeb;
    padding: 8px;
    width: 100%;
    height: 65px;
    background: #f6f6f6;
    box-sizing: border-box;
    cursor: pointer
}

html[data-theme=dark] .BrandQuestionPrizes-bar {
    border-bottom: 1px solid #444;
    background: #2e2e2e
}

.BrandQuestionPrizes-desc {
    margin-left: 4px
}

.BrandQuestionPrizes-symbol {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 20px;
    font-size: 14px;
    color: #8590a6
}

.BrandQuestionPrizes-symbol svg {
    margin-right: 12px
}

.BrandQuestionPrizes-symbol em {
    margin: 0 4px;
    line-height: 20px;
    font-style: normal;
    color: #ff9607
}

html[data-theme=dark] .BrandQuestionPrizes-symbol em {
    color: #ff9607
}

html[data-theme=dark] .BrandQuestionPrizes-symbol {
    color: #606a80
}

.BrandQuestionPrizes-name {
    margin-top: 5px;
    font-size: 17px;
    font-weight: 700;
    color: #1a1a1a
}

html[data-theme=dark] .BrandQuestionPrizes-name {
    color: #999
}

.BrandQuestionPrizes-images {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.BrandQuestionPrizes-images img {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    margin-right: 8px;
    width: 46px;
    height: 46px
}

html[data-theme=dark] .BrandQuestionPrizes-images img {
    border: 1px solid #444
}

.BrandQuestionPrizes-images .Icon {
    margin: 0 4px
}

.BrandQuestionPrizes-detail {
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 12px
}

.BrandQuestionPrizes-detail,.BrandQuestionPrizes-prize {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal
}

.BrandQuestionPrizes-prize {
    -webkit-box-orient: horizontal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 46px;
    line-height: 46px;
    font-size: 15px
}

.BrandQuestionPrizes-prize+.BrandQuestionPrizes-prize {
    margin-top: 12px
}

.BrandQuestionPrizes-intro {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.BrandQuestionPrizes-intro,.BrandQuestionPrizes-prizeInfo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.BrandQuestionPrizes-prizeImage {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    margin-right: 12px;
    width: 46px;
    height: 46px
}

html[data-theme=dark] .BrandQuestionPrizes-prizeImage {
    border: 1px solid #444
}

.BrandQuestionPrizes-prizeName {
    font-weight: 700;
    color: #444
}

html[data-theme=dark] .BrandQuestionPrizes-prizeName {
    color: gray
}

.BrandQuestionPrizes-prizeValue {
    margin-left: 8px;
    color: #8590a6
}

html[data-theme=dark] .BrandQuestionPrizes-prizeValue {
    color: #606a80
}

.BrandQuestionPrizes-prizeQuantity {
    font-weight: 700
}

.BrandQuestionPrizes-tips {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 11px;
    line-height: 27px;
    font-size: 15px;
    color: #444
}

.BrandQuestionPrizes-tips a {
    color: #0084ff
}

.BrandQuestionPrizes-tips a.BrandQuestionPrizes-ruleLink,html[data-theme=dark] .BrandQuestionPrizes-tips a.BrandQuestionPrizes-ruleLink {
    color: #175199
}

html[data-theme=dark] .BrandQuestionPrizes-tips a {
    color: #3a76d0
}

html[data-theme=dark] .BrandQuestionPrizes-tips {
    color: gray
}

.BrandQuestionPrizes-tipTitle {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 75px;
    font-weight: 700
}

.BrandQuestionPrizes-tip {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.BrandQuestionPrizes-rule {
    margin-top: 3px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .BrandQuestionPrizes-rule {
    color: #606a80
}

.BrandQuestionPrizes-split {
    margin: 30px auto;
    border: none;
    width: 240px;
    height: 1px;
    background: #d3d3d3
}

html[data-theme=dark] .BrandQuestionPrizes-split {
    background: #2e2e2e
}

.BrandQuestionPrizes-edit {
    margin-top: 4px;
    margin-bottom: -15px;
    border: none;
    padding: 0;
    color: #0084ff
}

html[data-theme=dark] .BrandQuestionPrizes-edit {
    color: #3a76d0
}

.BrandQuestionPrizes.is-mobile {
    width: 100%
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-symbol svg {
    margin-right: 6px
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-desc {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-name {
    max-width: calc(100vw - 121px);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-images {
    margin-left: 4px;
    margin-right: 0
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-images .Icon {
    margin: 0
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-intro {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-prizeInfo {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    line-height: 23px
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-prizeInfo .BrandQuestionPrizes-prizeValue {
    margin-left: 0;
    font-size: 14px
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-prizeInfo .BrandQuestionPrizes-prizeName {
    max-width: calc(100vw - 150px);
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-prizeInfo .BrandQuestionPrizes-prizeQuantity {
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-tips {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 0;
    border-top: 1px solid #ebebeb;
    padding-top: 2px;
    padding-bottom: 10px;
    line-height: 25px
}

html[data-theme=dark] .BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-tips {
    border-top: 1px solid #444
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-tip {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    word-wrap: break-word;
    border-bottom: 1px solid #ebebeb;
    padding: 0 10px;
    padding-bottom: 10px
}

html[data-theme=dark] .BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-tip {
    border-bottom: 1px solid #444
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-tipTitle {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 700
}

.BrandQuestionPrizes.is-mobile .BrandQuestionPrizes-rule {
    margin-top: 10px;
    padding: 0 10px;
    line-height: 22px
}

.BrandQuestionSettingMenu-item {
    height: 40px
}

.QuestionRelatedCard {
    padding: 16px 16px 0;
    background: #f6f6f6;
    border-radius: 6px;
    margin: 12px 0 16px
}

html[data-theme=dark] .QuestionRelatedCard {
    background: #2e2e2e
}

.QuestionRelatedCard-title {
    border-left: 3px solid #0084ff;
    line-height: 16px;
    margin-bottom: 8px;
    padding-left: 8px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .QuestionRelatedCard-title {
    font-weight: 500
}

html[data-android] .QuestionRelatedCard-title {
    font-weight: 700
}

.QuestionRelatedCard-content {
    color: #444
}

.QuestionRelatedCard-content>a {
    color: #999;
    margin-left: 4px
}

.QuestionRelatedCard-content .hash_tag {
    color: #444
}

html[data-theme=dark] .QuestionRelatedCard-content,html[data-theme=dark] .QuestionRelatedCard-content .hash_tag {
    color: gray
}

.QuestionRelatedCard-footer {
    border-top: 1px solid #d3d3d3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 38px;
    margin-top: 12px
}

html[data-theme=dark] .QuestionRelatedCard-footer {
    border-top: 1px solid #2e2e2e
}

.QuestionRelatedCard-from {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .QuestionRelatedCard-from {
    font-weight: 500
}

html[data-android] .QuestionRelatedCard-from {
    font-weight: 700
}

.QuestionRelatedCard-follow {
    padding: 0;
    border: none;
    font-weight: 600;
    font-synthesis: style;
    background: transparent!important;
    text-align: right
}

html[data-ios] .QuestionRelatedCard-follow {
    font-weight: 500
}

html[data-android] .QuestionRelatedCard-follow {
    font-weight: 700
}

.QuestionRelatedCard-follow svg {
    margin-right: 2px
}

.QuestionRelatedCard-follow.Button--grey {
    color: #999
}

html[data-theme=dark] .QuestionRelatedCard-follow.Button--grey {
    color: #646464
}

.OrgQuestionSymbol {
    height: 60px;
    margin-top: 16px;
    margin-bottom: -16px
}

.OrgQuestionSymbol,html[data-theme=dark] .OrgQuestionSymbol {
    border-top: 1px solid rgba(23,81,153,.05)
}

.OrgQuestionSymbol-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 1000px;
    height: 100%;
    padding: 0 16px;
    margin: 0 auto
}

.OrgQuestionSymbol-inner--mobile {
    padding: 0
}

.OrgQuestionSymbol-main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .OrgQuestionSymbol-main {
    color: #606a80
}

.OrgQuestionSymbol-avatar {
    margin-right: 12px
}

.OrgQuestionSymbol-avatar .Avatar,.OrgQuestionSymbol-avatar .Popover,.OrgQuestionSymbol-avatar .UserLink {
    display: block
}

.OrgQuestionSymbol-name {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.OrgQuestionSymbol-name .UserLink {
    font-weight: 600;
    font-synthesis: style;
    color: #1a1a1a
}

html[data-ios] .OrgQuestionSymbol-name .UserLink {
    font-weight: 500
}

html[data-android] .OrgQuestionSymbol-name .UserLink {
    font-weight: 700
}

html[data-theme=dark] .OrgQuestionSymbol-name .UserLink {
    color: #999
}

.QuestionHeader {
    position: relative;
    min-width: 1032px;
    padding: 16px 0;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1)
}

html[data-theme=dark] .QuestionHeader {
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    background: #1a1a1a
}

.QuestionHeader-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 1000px;
    height: 100%;
    padding: 0 16px;
    margin: 0 auto
}

.PageHeader .QuestionHeader-content {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.QuestionHeader-main {
    width: 694px;
    padding-left: 20px;
    box-sizing: border-box
}

.QuestionHeader-side {
    width: 296px;
    padding-right: 20px;
    text-align: right
}

.QuestionHeader-tags,.QuestionHeader-topics {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.QuestionHeader-topics {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: -5px;
    padding: 1px 0
}

.QuestionHeader-topics .QuestionTopic {
    margin: 3px 5px 3px 0;
    vertical-align: middle
}

.QuestionHeader-topics .Button {
    margin-left: 12px;
    vertical-align: middle
}

.QuestionHeader-title {
    margin-top: 12px;
    margin-bottom: 4px;
    font-size: 22px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 32px;
    color: #1a1a1a
}

html[data-ios] .QuestionHeader-title {
    font-weight: 500
}

html[data-android] .QuestionHeader-title {
    font-weight: 700
}

.QuestionHeader-title .Button {
    margin-left: 12px;
    vertical-align: middle
}

html[data-theme=dark] .QuestionHeader-title {
    color: #999
}

.PageHeader .QuestionHeader-title {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer
}

.BrandQuestionPrizes {
    margin-top: 12px
}

.QuestionHeader-lock {
    vertical-align: middle
}

.QuestionHeader-detail {
    min-height: 10px
}

.QuestionHeader-footer {
    padding-bottom: 12px;
    margin-top: 4px;
    margin-bottom: -12px;
    background: #fff
}

.QuestionHeader-footer.is-fixed {
    z-index: 3;
    height: 60px;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
    border-top: 1px solid #ebebeb;
    box-shadow: 0 -1px 3px rgba(23,81,153,.05)
}

html[data-theme=dark] .QuestionHeader-footer.is-fixed {
    border-top: 1px solid #444;
    box-shadow: 0 -1px 3px rgba(23,81,153,.05)
}

html[data-theme=dark] .QuestionHeader-footer {
    background: #1a1a1a
}

.QuestionHeader-footer-inner {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 1000px;
    height: 100%;
    padding: 0 16px;
    margin: 0 auto
}

.QuestionHeader-footer-inner,.QuestionHeader-footer-main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.QuestionHeader-footer-main {
    margin-top: 4px;
    min-width: 694px;
    width: auto
}

.QuestionButtonGroup+.QuestionHeaderActions {
    margin-left: 16px
}

.QuestionButtonGroup+.BrandQuestionSettingMenu {
    margin: 0 16px
}

.QuestionHeader-actions {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: 16px
}

.QuestionHeader-collapse-icon {
    margin-left: 8px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.QuestionHeader-menu-item--commercial {
    position: relative;
    padding-left: 44px;
    width: 148px
}

.QuestionHeader-menu-item--commercial .MenuItem-icon {
    margin-left: -18px
}

.QuestionHeader-menu {
    font-size: 14px
}

.QuestionHeader-menu-item {
    line-height: 40px
}

.QuestionHeader-delete-confirm {
    text-align: center
}

.QuestionPage {
    position: relative
}

.QuestionPage-commercialIsMutedCover {
    position: absolute;
    width: 100%;
    height: 100%;
    background: hsla(0,0%,100%,.8);
    z-index: 3
}

html[data-theme=dark] .QuestionPage-commercialIsMutedCover {
    background: rgba(26,26,26,.8)
}

.Question-main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    margin: 10px auto;
    padding: 0 16px;
    width: 1000px;
    min-height: 100vh
}

.Question-mainColumn {
    width: 694px;
    padding-bottom: 20px
}

.Question-sideColumn {
    width: 296px
}

.Question-sideColumn--sticky .Card:last-of-type {
    margin-bottom: 0
}

.QuestionAnswers-content {
    margin-bottom: 14px
}

.QuestionAnswers-answerTipCard {
    margin-bottom: 10px;
    padding: 16px 24px;
    font-size: 15px;
    color: #8590a6;
    text-align: center
}

.QuestionAnswers-answerTipCard.Card {
    margin-bottom: 10px
}

.QuestionAnswers-answerTipCard a {
    font-size: inherit;
    cursor: pointer;
    color: #175199
}

.QuestionAnswers-answerTipCard a:hover,html[data-theme=dark] .QuestionAnswers-answerTipCard a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .QuestionAnswers-answerTipCard a {
    color: #175199
}

html[data-theme=dark] .QuestionAnswers-answerTipCard {
    color: #606a80
}

.QuestionAnswers-answerList {
    margin-bottom: 10px
}

.QuestionAnswers-answerTip {
    margin: 40px 0;
    font-size: 14px;
    color: #8590a6;
    text-align: center
}

.QuestionAnswers-answerTip.Card {
    margin-bottom: 10px
}

.QuestionAnswers-answerTip .Button {
    color: #175199
}

.QuestionAnswers-answerTip .Button:hover,html[data-theme=dark] .QuestionAnswers-answerTip .Button:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .QuestionAnswers-answerTip .Button {
    color: #175199
}

.QuestionAnswers-answerTip .QuestionAnswers-iconLink:hover {
    border-bottom: none
}

html[data-theme=dark] .QuestionAnswers-answerTip {
    color: #606a80
}

.QuestionAnswers-answerAdd {
    min-height: 282px
}

.QuestionAnswers-answerAdd.Card {
    margin-bottom: 10px
}

.QuestionAnswers-statusWrapper .expand-enter {
    top: 36px;
    z-index: -1;
    transition: opacity .3s ease-out,top .3s ease-out
}

.QuestionAnswers-statusWrapper .expand-enter-active {
    top: 0
}

.QuestionAnswers-statusWrapper .expand-leave {
    position: relative;
    top: 0;
    z-index: -1;
    transition: opacity .3s ease-out,top .3s ease-out
}

.QuestionAnswers-statusWrapper .expand-leave-active {
    top: 36px
}

.QuestionAnswers-answers {
    margin-bottom: 10px
}

.Answers-none {
    padding: 50px 0
}

.QuestionAnswers-navs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.QuestionAnswers-nav {
    display: inline-block;
    height: 50px;
    line-height: 50px
}

.QuestionAnswers-nav:hover {
    cursor: pointer
}

.QuestionAnswers-nav.is--active {
    border-bottom: 3px solid #0084ff
}

html[data-theme=dark] .QuestionAnswers-nav.is--active {
    border-bottom: 3px solid #3a76d0
}

.QuestionAnswers-nav+.QuestionAnswers-nav {
    margin-left: 33px
}

.MoreAnswersCard {
    position: relative;
    margin-top: -10px;
    border-top: none;
    box-shadow: 0 3px 3px -3px rgba(26,26,26,.2)
}

.MoreAnswersCard:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    border-top: 1px solid #f6f6f6;
    margin: 0 16px
}

html[data-theme=dark] .MoreAnswersCard:before {
    border-top: 1px solid #2e2e2e
}

.MoreAnswersCard .QuestionMainAction,html[data-theme=dark] .MoreAnswersCard .QuestionMainAction {
    color: #175199
}

html[data-theme=dark] .MoreAnswersCard {
    box-shadow: 0 3px 3px -3px hsla(0,0%,60%,.2)
}

.QuestionAnswers-answerButton {
    border-color: transparent;
    line-height: 48px;
    font-size: 15px
}

.QuestionAnswers-answerLink,html[data-theme=dark] .QuestionAnswers-answerLink {
    color: #175199
}

.CheckItem {
    position: relative;
    display: block
}

.CheckItem-box {
    position: relative;
    padding: 12px;
    border: 1px solid #f6f6f6;
    border-radius: 3px;
    transition: border-color .2s ease-out
}

html[data-theme=dark] .CheckItem-box {
    border: 1px solid #2e2e2e
}

.CheckItem-input {
    position: absolute;
    z-index: -1;
    opacity: 1
}

.CheckItem-icon {
    position: absolute;
    top: 50%;
    right: 12px;
    fill: #0084ff;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

html[data-theme=dark] .CheckItem-icon {
    fill: #3a76d0
}

.CheckItem-input:checked+.CheckItem-box,.CheckItem:hover .CheckItem-box,html[data-theme=dark] .CheckItem:hover .CheckItem-box {
    border-color: #175199
}

.CheckItem-input:checked+.CheckItem-box .CheckItem-inner {
    max-width: calc(100% - 28px)
}

html[data-theme=dark] .CheckItem-input:checked+.CheckItem-box {
    border-color: #175199
}

.CheckItem-input:not(:checked)+.CheckItem-box .CheckItem-icon {
    opacity: 0;
    transition: opacity .2s
}

.TopicBios-loading {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-height: 400px
}

.TopicBioItem:not(:first-child) {
    margin-top: 16px
}

.TopicBioItem .AuthorInfo {
    color: #646464
}

html[data-theme=dark] .TopicBioItem .AuthorInfo {
    color: #999
}

.TopicBioItem-title {
    margin-bottom: 8px;
    color: #8590a6
}

html[data-theme=dark] .TopicBioItem-title {
    color: #606a80
}

.TopicBioItem-inner {
    padding: 12px;
    margin-bottom: 8px;
    border: 1px solid #175199;
    border-radius: 3px
}

html[data-theme=dark] .TopicBioItem-inner {
    border: 1px solid #175199
}

.TopicBioItem-modifyButton {
    margin-left: 6px;
    font-size: 14px;
    color: #8590a6
}

.TopicBioItem-modifyButton:hover,html[data-theme=dark] .TopicBioItem-modifyButton:hover {
    color: #175199
}

html[data-theme=dark] .TopicBioItem-modifyButton {
    color: #606a80
}

.TopicBioItem-input {
    width: 100%;
    height: auto;
    padding: 0;
    font-size: 14px
}

.TopicBioItem-input,.TopicBioItem-input.is-focus {
    border: none
}

.TopicBioItem-input .Input {
    height: auto;
    color: #646464
}

html[data-theme=dark] .TopicBioItem-input .Input {
    color: #999
}

.TopicBioItem-inputFooter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.TopicBioItem-actions {
    text-align: right
}

.TopicBioItem-actions .Button:not(:first-child) {
    margin-left: 25px
}

.TopicBioItem-addButton {
    height: 48px;
    padding: 0 12px;
    text-align: left;
    border: 1px solid #ebebeb
}

.TopicBioItem-addButton:hover,html[data-theme=dark] .TopicBioItem-addButton:hover {
    border-color: #175199
}

.TopicBioItem-addButton .Icon {
    fill: currentColor
}

html[data-theme=dark] .TopicBioItem-addButton {
    border: 1px solid #444
}

.AnswerAdd-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 16px 20px
}

.AnswerAdd-info {
    overflow: hidden
}

.AnswerAdd-toggleAnonymous {
    margin-left: auto;
    padding-left: 12px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.AnswerAdd-toggleAnonymous:hover,html[data-theme=dark] .AnswerAdd-toggleAnonymous:hover {
    color: gray
}

.AnswerAdd-topicBiosButton {
    font-size: 14px;
    color: #8590a6;
    white-space: nowrap
}

.AnswerAdd-topicBiosButton:hover,html[data-theme=dark] .AnswerAdd-topicBiosButton:hover {
    color: #175199
}

html[data-theme=dark] .AnswerAdd-topicBiosButton {
    color: #606a80
}

.AnswerAdd-bio {
    margin-right: 6px;
    color: #646464;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

html[data-theme=dark] .AnswerAdd-bio {
    color: #999
}

.QuestionMainDivider {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 60px;
    margin: 0 20px;
    color: #8590a6;
    text-align: center
}

.QuestionMainDivider:before {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 20px;
    display: block;
    border-top: 1px solid #ebebeb;
    content: ""
}

html[data-theme=dark] .QuestionMainDivider:before {
    border-top: 1px solid #444
}

.QuestionMainDivider a {
    color: #175199
}

.QuestionMainDivider a:hover,html[data-theme=dark] .QuestionMainDivider a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .QuestionMainDivider a {
    color: #175199
}

html[data-theme=dark] .QuestionMainDivider {
    color: #606a80
}

.QuestionMainDivider-inner {
    position: relative;
    padding: 0 1em;
    background: #fff
}

html[data-theme=dark] .QuestionMainDivider-inner {
    background: #1a1a1a
}

.CollapsedAnswers-bar {
    display: block;
    width: 100%;
    height: 44px;
    font-size: 14px;
    line-height: 44px;
    color: #646464;
    text-align: left;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb
}

.CollapsedAnswers-bar:not(:last-child) {
    margin-bottom: 14px
}

.CollapsedAnswers-bar .Button {
    color: inherit
}

.CollapsedAnswers-bar .Button:hover,html[data-theme=dark] .CollapsedAnswers-bar .Button:hover {
    color: #175199
}

html[data-theme=dark] .CollapsedAnswers-bar {
    color: #999;
    border-top: 1px solid #444;
    border-bottom: 1px solid #444
}

.Banner {
    position: relative;
    overflow: hidden;
    transition: height .3s,margin .3s,opacity .3s
}

.Banner--hidden {
    margin-bottom: 0;
    opacity: 0
}

.Banner-link {
    display: block
}

.Banner-image {
    display: block;
    width: 100%
}

.Banner-adsense {
    display: block;
    width: 300px;
    height: 250px
}

.Banner-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: opacity .3s
}

.Banner-close,.Banner-close:hover {
    background-color: #1a1a1a
}

html[data-theme=dark] .Banner-close:hover {
    background-color: #999
}

.Banner-close .Icon {
    display: block;
    margin: 0 auto;
    fill: #fff
}

html[data-theme=dark] .Banner-close .Icon {
    fill: #1a1a1a
}

html[data-theme=dark] .Banner-close {
    background-color: #999
}

.Banner:not(:hover) .Banner-close {
    opacity: 0
}

.AppBanner-link {
    display: block
}

.AppBanner-layout {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 12px
}

.AppBanner-qrcode {
    width: 50px;
    height: 50px;
    margin-right: 12px
}

.AppBanner-qrcode svg {
    display: block;
    width: 100%;
    height: 100%
}

.AppBanner-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.AppBanner-title {
    font-size: 16px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 20px;
    color: #444
}

html[data-ios] .AppBanner-title {
    font-weight: 500
}

html[data-android] .AppBanner-title {
    font-weight: 700
}

html[data-theme=dark] .AppBanner-title {
    color: gray
}

.AppBanner-description {
    margin-top: 2px;
    font-size: 14px;
    line-height: 20px;
    color: #444
}

html[data-theme=dark] .AppBanner-description {
    color: gray
}

.AppBanner-sticky {
    height: 0;
    opacity: 1;
    visibility: visible;
    transition: opacity .3s,visibility .3s
}

.AppBanner-sticky:not(.is-shown) {
    opacity: 0;
    visibility: hidden
}

.Recommendations-item {
    font-size: 14px;
    line-height: 24px;
    color: #8590a6
}

.Recommendations-item+.Recommendations-item {
    margin-top: 12px
}

.Recommendations-item .Button {
    display: inline;
    color: #175199
}

.Recommendations-item .Button:hover,html[data-theme=dark] .Recommendations-item .Button:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .Recommendations-item .Button {
    color: #175199
}

html[data-theme=dark] .Recommendations-item {
    color: #606a80
}

.SimilarQuestions-item {
    font-size: 14px;
    line-height: 21px;
    color: #8590a6
}

.SimilarQuestions-item+.SimilarQuestions-item {
    margin-top: 10px
}

.SimilarQuestions-item .Button {
    display: inline;
    color: #175199
}

.SimilarQuestions-item .Button:hover,html[data-theme=dark] .SimilarQuestions-item .Button:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .SimilarQuestions-item .Button {
    color: #175199
}

html[data-theme=dark] .SimilarQuestions-item {
    color: #606a80
}

.RelatedCommodities-image {
    width: 80px;
    height: 64px;
    border-radius: 3px;
    margin-right: 8px;
    -o-object-fit: cover;
    object-fit: cover
}

.RelatedCommodities-subject {
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 600;
    font-synthesis: style;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

html[data-ios] .RelatedCommodities-subject {
    font-weight: 500
}

html[data-android] .RelatedCommodities-subject {
    font-weight: 700
}

html[data-theme=dark] .RelatedCommodities-subject {
    color: #999
}

.RelatedCommodities-subject-two {
    max-height: 40px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
}

.RelatedCommodities-item,.RelatedCommodities-scoreWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.RelatedCommodities-item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.RelatedCommodities-item:hover .RelatedCommodities-subject,html[data-theme=dark] .RelatedCommodities-item:hover .RelatedCommodities-subject {
    color: #175199
}

.RelatedCommodities-item:not(:first-child) {
    position: relative;
    margin-top: 10px;
    padding-top: 10px
}

.RelatedCommodities-item:not(:first-child):before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: block;
    content: "";
    border-top: .5px solid #d3d3d3
}

html[data-hairline] .RelatedCommodities-item:not(:first-child):before {
    border-top: 1px solid #d3d3d3;
    -o-border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='0' width='1' height='.5' fill='#d3d3d3'/> </svg>") 1 0 0 0;
    border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='0' width='1' height='.5' fill='#d3d3d3'/> </svg>") 1 0 0 0
}

html[data-theme=dark] html[data-hairline] .RelatedCommodities-item:not(:first-child):before {
    border-top: 1px solid #2e2e2e
}

html[data-theme=dark] .RelatedCommodities-item:not(:first-child):before {
    border-top: .5px solid #2e2e2e
}

.RelatedCommodities-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    text-align: left;
    overflow: hidden
}

.RelatedCommodities-description {
    color: #646464;
    margin-top: 6px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden
}

html[data-theme=dark] .RelatedCommodities-description {
    color: #999
}

.RelatedCommodities-meta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #8590a6;
    margin-top: 4px
}

.RelatedCommodities-meta .Rating {
    display: inline-block;
    margin-right: 4px
}

html[data-theme=dark] .RelatedCommodities-meta {
    color: #606a80
}

.RelatedCommodities-remixListen {
    position: relative;
    background: #fd3;
    color: #b37700;
    padding: 3px 6px 3px 18px;
    line-height: 1;
    border-color: #fd3;
    border-radius: 3px
}

.RelatedCommodities-remixListen:hover {
    background: #fd3
}

.RelatedCommodities-remixListen:before {
    position: absolute;
    left: 6px;
    top: 6px;
    display: block;
    border-width: 4px 8px;
    border-style: solid;
    border-color: transparent;
    border-left-color: #b37700;
    content: ""
}

.RelatedCommodities-bookMeta,.RelatedCommodities-remixMeta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.RelatedCommodities-bookRead {
    padding: 3px 6px 3px 3px;
    border-radius: 3px;
    line-height: 1;
    color: #fff;
    background: #0084ff
}

.RelatedCommodities-bookRead .Zi {
    margin-right: 2px
}

html[data-theme=dark] .RelatedCommodities-bookRead {
    color: #1a1a1a;
    background: #3a76d0
}

.BrandQuestionDesc-header .Card-headerOptions {
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.BrandQuestionDesc-content,.BrandQuestionDesc-header {
    padding-left: 12px;
    padding-right: 12px
}

.BrandQuestionDesc-content {
    font-size: 14px;
    line-height: 24px
}

.BrandQuestionDesc-learnMore {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .BrandQuestionDesc-learnMore {
    color: #606a80
}

.Carousel {
    position: relative;
    width: 100%;
    overflow: hidden
}

.Carousel-scroller,.Carousel-window {
    width: 100%;
    height: 100%
}

.Carousel-window {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    white-space: nowrap;
    @nest .is-vertical & {
        white-space: normal
    }
}

.Carousel-window.is-vertical {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.Carousel-bullets {
    position: absolute;
    z-index: 2;
    left: 50%;
    bottom: 4px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%)
}

.Carousel-bullet {
    margin: 0 4px;
    display: inline-block;
    width: 7px;
    height: 7px;
    opacity: .4;
    cursor: pointer;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 8px 0 rgba(26,26,26,.2)
}

.Carousel-bullet.is-active {
    opacity: 1;
    cursor: default
}

html[data-theme=dark] .Carousel-bullet {
    background: #1a1a1a;
    box-shadow: 0 0 8px 0 hsla(0,0%,60%,.2)
}

.Carousel-leftArrow,.Carousel-rightArrow {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 28px;
    height: 28px;
    box-sizing: border-box;
    background: hsla(0,0%,100%,.5);
    border-radius: 50%;
    transition: background .1s ease-in-out
}

.Carousel-leftArrow:hover,.Carousel-rightArrow:hover {
    background: hsla(0,0%,100%,.9)
}

html[data-theme=dark] .Carousel-leftArrow:hover,html[data-theme=dark] .Carousel-rightArrow:hover {
    background: rgba(26,26,26,.9)
}

.Carousel-leftArrow .Icon--arrow,.Carousel-rightArrow .Icon--arrow {
    width: 6px;
    fill: #444
}

html[data-theme=dark] .Carousel-leftArrow .Icon--arrow,html[data-theme=dark] .Carousel-rightArrow .Icon--arrow {
    fill: gray
}

html[data-theme=dark] .Carousel-leftArrow,html[data-theme=dark] .Carousel-rightArrow {
    background: rgba(26,26,26,.5)
}

.Carousel-leftArrow {
    left: 16px
}

.Carousel-leftArrow .Icon--arrow {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
}

.Carousel-rightArrow {
    right: 16px
}

.Carousel-rightArrow .Icon--arrow {
    -webkit-transform: rotate(-90deg);
    transform: rotate(-90deg)
}

.AdvancedViewer-header {
    padding: 0 16px
}

.AdvancedViewer-imgField {
    background-color: #ebebeb
}

html[data-theme=dark] .AdvancedViewer-imgField {
    background-color: #444
}

.AdvancedViewer-content {
    padding: 0
}

.AdvancedViewer-image {
    width: 100%
}

.AdvancedViewer-image .AdvancedViewer-imgField {
    height: 197.33px
}

.AdvancedViewer-imageText {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.AdvancedViewer-imageText .AdvancedViewer-intro {
    margin: 0 16px;
    border-bottom: 1px solid #ebebeb;
    padding: 13px 0;
    line-height: 23px;
    word-wrap: break-word;
    overflow: hidden
}

html[data-theme=dark] .AdvancedViewer-imageText .AdvancedViewer-intro {
    border-bottom: 1px solid #444
}

.AdvancedViewer-imageText .AdvancedViewer-imgField {
    height: 197.33px
}

.AdvancedViewer-commodityItem {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%
}

.AdvancedViewer-commodityItem[hidden] {
    display: none
}

.AdvancedViewer-commodityItem img {
    height: 197.33px
}

.AdvancedViewer-commodityIntro {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 16px;
    border-bottom: 1px solid #ebebeb;
    line-height: 44px
}

html[data-theme=dark] .AdvancedViewer-commodityIntro {
    border-bottom: 1px solid #444
}

.AdvancedViewer-subTitle {
    color: #8590a6
}

html[data-theme=dark] .AdvancedViewer-subTitle {
    color: #606a80
}

.AdvancedViewer .Carousel-leftArrow,.AdvancedViewer .Carousel-rightArrow {
    top: 98px
}

.AdvancedViewer .Carousel-bullets {
    top: 165px
}

.AdvancedViewer .Carousel-bullet {
    width: 6px;
    height: 6px;
    background: #fff
}

.AdvancedViewer .Carousel-bullet.is-active {
    background: #444
}

html[data-theme=dark] .AdvancedViewer .Carousel-bullet.is-active {
    background: gray
}

html[data-theme=dark] .AdvancedViewer .Carousel-bullet {
    background: #1a1a1a
}

.AdvancedViewer-recommended {
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column
}

.AdvancedViewer-recommended,.AdvancedViewer-recommendedItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal
}

.AdvancedViewer-recommendedItem {
    -webkit-box-orient: horizontal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 0 16px;
    padding: 16px 0;
    box-sizing: border-box
}

.AdvancedViewer-recommendedItem .AdvancedViewer-imgField {
    margin-left: 13px;
    width: 81px;
    height: 65px;
    background-position: 50%;
    background-size: cover
}

.AdvancedViewer-summary {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 1px
}

.AdvancedViewer-summary,.AdvancedViewer-summary .AdvancedViewer-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.AdvancedViewer-summary .AdvancedViewer-wrap {
    height: 44px;
    overflow: hidden
}

.AdvancedViewer-summary .AdvancedViewer-data,.AdvancedViewer-summary .AdvancedViewer-desc,.AdvancedViewer-summary .AdvancedViewer-title {
    line-height: 20px;
    overflow: hidden
}

.AdvancedViewer-summary .AdvancedViewer-title {
    -webkit-line-clamp: 2;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    max-height: 44px;
    font-weight: 500
}

.AdvancedViewer-summary .AdvancedViewer-desc,.AdvancedViewer-summary .AdvancedViewer-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 22px
}

.AdvancedViewer-summary .AdvancedViewer-desc {
    -webkit-line-clamp: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    max-height: 22px;
    font-size: 14px;
    color: #646464
}

html[data-theme=dark] .AdvancedViewer-summary .AdvancedViewer-desc {
    color: #999
}

.AdvancedViewer-summary .AdvancedViewer-data {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .AdvancedViewer-summary .AdvancedViewer-data {
    color: #606a80
}

.AdvancedViewer-recommendedItem .AdvancedViewer-imgField {
    border-radius: 4px
}

.AdvancedViewer-recommendedItem+.AdvancedViewer-recommendedItem {
    border-top: .5px solid #ebebeb
}

html[data-theme=dark] .AdvancedViewer-recommendedItem+.AdvancedViewer-recommendedItem {
    border-top: .5px solid #444
}

.AdvancedViewer-footer {
    padding: 13px 16px;
    box-sizing: border-box
}

.AdvancedViewer-button {
    border-color: #0084ff;
    padding: 0;
    width: 100%;
    color: #0084ff
}

html[data-theme=dark] .AdvancedViewer-button {
    border-color: #3a76d0;
    color: #3a76d0
}

.AdvancedViewer.is-mobile .AdvancedViewer-footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px solid #ebebeb;
    margin: 0 16px;
    padding: 13px 0;
    box-sizing: border-box
}

html[data-theme=dark] .AdvancedViewer.is-mobile .AdvancedViewer-footer {
    border-top: 1px solid #444
}

.AdvancedViewer.is-mobile .AdvancedViewer-brand {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .AdvancedViewer.is-mobile .AdvancedViewer-brand {
    color: #606a80
}

.AdvancedViewer.is-mobile .AdvancedViewer-logo {
    border-radius: 20px;
    width: 20px;
    height: 20px
}

.AdvancedViewer.is-mobile .AdvancedViewer-brandName {
    margin-left: 6px
}

.AdvancedViewer.is-mobile .AdvancedViewer-button {
    border: 1px solid #8590a6;
    border-radius: 5px;
    width: 73px;
    height: 26px;
    line-height: 26px;
    font-size: 13px;
    color: #8590a6
}

html[data-theme=dark] .AdvancedViewer.is-mobile .AdvancedViewer-button {
    border: 1px solid #606a80;
    color: #606a80
}

.AdvancedViewer.is-mobile .AdvancedViewer-imageText {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin: 0 16px;
    padding: 16px 0
}

.AdvancedViewer.is-mobile .AdvancedViewer-imageText .AdvancedViewer-intro {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 0;
    border: none;
    padding: 0;
    height: 80px;
    line-height: 20px;
    font-size: 14px;
    word-wrap: break-word;
    overflow: hidden
}

.AdvancedViewer.is-mobile .AdvancedViewer-imageText .AdvancedViewer-imgField {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: 18px;
    border-radius: 4px;
    width: 108px;
    height: 72px
}

.AdvancedViewer.is-mobile .AdvancedViewer-commodity {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
    box-sizing: border-box
}

.AdvancedViewer.is-mobile .AdvancedViewer-commodityItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: calc((100% - 16px) / 3)
}

.AdvancedViewer.is-mobile .AdvancedViewer-commodityItem img {
    border-radius: 4px;
    width: 100%;
    height: auto
}

.AdvancedViewer.is-mobile .AdvancedViewer-commodityIntro {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 0;
    margin-top: 3.3px;
    border-bottom: none;
    line-height: 20px
}

.AdvancedViewer.is-mobile .AdvancedViewer-header,.AdvancedViewer.is-mobile .AdvancedViewer-recommended {
    border: none
}

.AdvancedViewer.is-mobile .AdvancedViewer-recommendedItem .AdvancedViewer-imgField {
    width: 108px;
    height: 72px
}

.AdvancedViewer.is-mobile .AdvancedViewer-recommendedItem .AdvancedViewer-desc {
    margin-top: 6px;
    line-height: 16px
}

.AdvancedFloatCardViewer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    width: 375px;
    height: 70px;
    background: hsla(0,0%,92%,.92);
    box-sizing: border-box
}

.AdvancedFloatCardViewer-image {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 4px;
    width: 75px;
    height: 50px;
    background-position: 50%;
    background-size: cover;
    background-color: #ebebeb
}

html[data-theme=dark] .AdvancedFloatCardViewer-image {
    background-color: #444
}

.AdvancedFloatCardViewer-intro {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin-left: 8px;
    margin-right: 8px;
    max-height: 40px;
    line-height: 20px;
    color: #646464;
    word-wrap: break-word;
    overflow: hidden
}

html[data-theme=dark] .AdvancedFloatCardViewer-intro {
    color: #999
}

.AdvancedFloatCardViewer-button {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border: none;
    border-radius: 28px;
    padding: 5px 8px;
    height: 28px;
    line-height: 18px;
    color: #fff;
    background: #646464;
    box-sizing: border-box
}

.AdvancedFloatCardViewer-button:hover {
    background: #646464
}

html[data-theme=dark] .AdvancedFloatCardViewer-button:hover {
    background: #999
}

html[data-theme=dark] .AdvancedFloatCardViewer-button {
    color: #1a1a1a;
    background: #999
}

html[data-theme=dark] .AdvancedFloatCardViewer {
    background: rgba(68,68,68,.92)
}

.AdvancedViewer.is-mobile+.ViewAllInappCard {
    margin-top: 0
}

.BrandQuestionAuthor {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row
}

.BrandQuestionAuthor.is-clickable {
    cursor: pointer
}

.BrandQuestionAuthor-header {
    padding-left: 12px;
    padding-right: 12px
}

.BrandQuestionAuthor-icon {
    width: 60px;
    height: 60px;
    border: 1px solid #f6f6f6;
    border-radius: 4px;
    box-sizing: border-box
}

html[data-theme=dark] .BrandQuestionAuthor-icon {
    border: 1px solid #2e2e2e
}

.BrandQuestionAuthor-content {
    width: calc(100% - 72px);
    margin-left: 12px;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-sizing: border-box
}

.BrandQuestionAuthor-content,.BrandQuestionAuthor-name {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal
}

.BrandQuestionAuthor-name {
    -webkit-box-orient: horizontal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 20px;
    line-height: 20px;
    color: #1a1a1a
}

html[data-theme=dark] .BrandQuestionAuthor-name {
    color: #999
}

.BrandQuestionAuthor-badge {
    margin-left: 3px;
    vertical-align: baseline
}

.BrandQuestionAuthor-intro {
    width: 100%;
    margin-top: 10px;
    overflow: hidden;
    font-size: 14px;
    line-height: 14px;
    color: #1a1a1a;
    text-overflow: ellipsis;
    white-space: nowrap
}

html[data-theme=dark] .BrandQuestionAuthor-intro {
    color: #999
}

.BrandQuestionAuthor-buttons {
    margin: 0 20px;
    padding-top: 16px;
    padding-bottom: 16px
}

.BrandQuestionAuthor-buttons .Button {
    width: 119px
}

.MobileBrandQuestionAuthor .BrandQuestionAuthor-header {
    position: relative;
    height: 44px;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    border-bottom: 0
}

.MobileBrandQuestionAuthor .BrandQuestionAuthor-header:after {
    content: "";
    display: block;
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    margin: 0 20px;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .MobileBrandQuestionAuthor .BrandQuestionAuthor-header:after {
    border-bottom: 1px solid #444
}

.MobileBrandQuestionAuthor .BrandQuestionAuthor-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.MobileBrandQuestionAuthor .BrandQuestionAuthor-headerText {
    position: relative;
    z-index: 1;
    padding: 0 20px;
    background: #fff
}

html[data-theme=dark] .MobileBrandQuestionAuthor .BrandQuestionAuthor-headerText {
    background: #1a1a1a
}

.Mobile-body .BrandQuestionAuthor-buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.Mobile-body .BrandQuestionAuthor-buttons .Button {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.Mobile-body .BrandQuestionAuthor-buttons .Button+.Mobile-body .BrandQuestionAuthor-buttons .Button {
    margin-left: 16px
}

.ImageAlias {
    -o-object-fit: cover;
    object-fit: cover;
    vertical-align: top;
    border-radius: 3px;
    filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.96" /><feFuncG type="linear" slope="0.96" /><feFuncB type="linear" slope="0.96" /></feComponentTransfer></filter></svg>#filter');
    -webkit-filter: brightness(.96);
    filter: brightness(.96)
}

.QuestionTopicMeta {
    margin-bottom: 10px
}

.QuestionTopicMeta-cardMain {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 16px 20px 12px
}

.QuestionTopicMeta-cardImage {
    width: 50px;
    height: 70px;
    border-radius: 3px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.QuestionTopicMeta-cardContent {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 12px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    overflow: hidden
}

.QuestionTopicMeta-cardTitle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .QuestionTopicMeta-cardTitle {
    font-weight: 500
}

html[data-android] .QuestionTopicMeta-cardTitle {
    font-weight: 700
}

.QuestionTopicMeta-cardDesc {
    font-size: 14px;
    margin-bottom: 4px;
    color: #646464;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

html[data-theme=dark] .QuestionTopicMeta-cardDesc {
    color: #999
}

.QuestionTopicMeta-cardScore {
    font-size: 14px;
    color: #646464
}

.QuestionTopicMeta-cardScore:not(:last-child) {
    margin-right: 8px
}

.QuestionTopicMeta-cardScore strong {
    color: #ff9607;
    margin-left: 2px
}

html[data-theme=dark] .QuestionTopicMeta-cardScore strong {
    color: #ff9607
}

html[data-theme=dark] .QuestionTopicMeta-cardScore {
    color: #999
}

.QuestionTopicMeta-cardMore {
    padding: 12px 20px 16px;
    border-top: 1px solid #ebebeb;
    color: #8590a6;
    font-size: 14px
}

html[data-theme=dark] .QuestionTopicMeta-cardMore {
    border-top: 1px solid #444;
    color: #606a80
}

.QuestionTopicMeta-cardMoreInner {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.6;
    overflow: hidden;
    margin-bottom: 8px;
    max-height: 42px
}

.QuestionTopicMeta-cardMoreInner.RichText p {
    margin-bottom: 0
}

.QuestionTopicMeta-cardLink,html[data-theme=dark] .QuestionTopicMeta-cardLink {
    color: #175199
}

.QuestionAnswer-content {
    padding: 16px 20px
}

.MoreAnswers .List-header {
    position: relative;
    height: 44px;
    margin: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    border-bottom: 0
}

.MoreAnswers .List-header:after {
    position: absolute;
    content: "";
    display: block;
    top: 30px;
    left: 0;
    right: 0;
    margin: 0 20px;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .MoreAnswers .List-header:after {
    border-bottom: 1px solid #444
}

.MoreAnswers .List-headerText {
    position: relative;
    z-index: 1;
    padding: 0 20px;
    background: #fff;
    top: -3px;
    color: #8590a6;
    font-weight: 400
}

html[data-theme=dark] .MoreAnswers .List-headerText {
    background: #1a1a1a;
    color: #606a80
}

.AnswerAuthor .Card-section:empty {
    display: none
}

.AnswerAuthor-user {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.AnswerAuthor-user-avatar {
    margin-right: 12px
}

.AnswerAuthor-user-avatar .Avatar,.AnswerAuthor-user-avatar .Popover,.AnswerAuthor-user-avatar .UserLink {
    display: block
}

.AnswerAuthor-user-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden
}

.AnswerAuthor-user-headline,.AnswerAuthor-user-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.AnswerAuthor-user-name {
    font-size: 20px;
    font-weight: 600;
    font-synthesis: style;
    line-height: 30px;
    color: #1a1a1a
}

html[data-ios] .AnswerAuthor-user-name {
    font-weight: 500
}

html[data-android] .AnswerAuthor-user-name {
    font-weight: 700
}

html[data-theme=dark] .AnswerAuthor-user-name {
    color: #999
}

.AnswerAuthor-user-headline {
    font-size: 14px;
    line-height: 20px
}

.AnswerAuthor-user-headline .RichText {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.AnswerAuthor-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    line-height: 24px
}

.AnswerAuthor-item+.AnswerAuthor-item {
    margin-top: 12px
}

.AnswerAuthor-item-icon {
    display: inline-block;
    width: 16px;
    margin-right: 8px;
    text-align: center;
    color: #8590a6
}

html[data-theme=dark] .AnswerAuthor-item-icon {
    color: #606a80
}

.AnswerAuthor-item-value {
    font-size: 14px;
    line-height: 24px;
    color: #8590a6
}

html[data-theme=dark] .AnswerAuthor-item-value {
    color: #606a80
}

.AnswerAuthor-counts {
    font-size: 14px;
    text-align: center
}

.AnswerAuthor-buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 16px
}

.AnswerAuthor-buttons .Button {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.AnswerFavlists {
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.AnswerFavlists,.AnswerFavlists-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.AnswerFavlists-header {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 57px;
    padding: 0 20px;
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .AnswerFavlists-header {
    border-bottom: 1px solid #2e2e2e
}

.AnswerFavlists-title {
    font-size: 16px;
    font-weight: 600;
    font-synthesis: style;
    color: #1a1a1a
}

html[data-ios] .AnswerFavlists-title {
    font-weight: 500
}

html[data-android] .AnswerFavlists-title {
    font-weight: 700
}

html[data-theme=dark] .AnswerFavlists-title {
    color: #999
}

.AnswerFavlists-list {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto
}

.AnswerCopyrightApplicants {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.AnswerCopyrightApplicants-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 57px;
    padding: 0 20px;
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .AnswerCopyrightApplicants-header {
    border-bottom: 1px solid #2e2e2e
}

.AnswerCopyrightApplicants-title {
    font-size: 16px;
    font-weight: 600;
    font-synthesis: style;
    color: #1a1a1a
}

html[data-ios] .AnswerCopyrightApplicants-title {
    font-weight: 500
}

html[data-android] .AnswerCopyrightApplicants-title {
    font-weight: 700
}

html[data-theme=dark] .AnswerCopyrightApplicants-title {
    color: #999
}

.AnswerCopyrightApplicants-list {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto
}

.AnswerCopyrightApplicants-item {
    padding: 16px 0;
    margin: 0 24px;
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .AnswerCopyrightApplicants-item {
    border-bottom: 1px solid #2e2e2e
}

.AnswerCopyrightApplicants-time {
    -ms-flex-item-align: start;
    align-self: flex-start;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .AnswerCopyrightApplicants-time {
    color: #606a80
}

.AnswerInfo-title .Button {
    font-size: inherit;
    color: #175199
}

.AnswerInfo-title .Button:hover,html[data-theme=dark] .AnswerInfo-title .Button:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerInfo-title .Button {
    color: #175199
}

.AnswerInfo-copyright-applicants {
    padding: 16px;
    margin: 0
}

.AnswerInfo-copyright-applicant {
    font-size: 14px;
    line-height: 24px;
    color: #8590a6
}

.AnswerInfo-copyright-applicant+.AnswerInfo-copyright-applicant {
    margin-top: 12px
}

.AnswerInfo-copyright-applicant .UserLink a {
    color: #175199
}

.AnswerInfo-copyright-applicant .UserLink a:hover,html[data-theme=dark] .AnswerInfo-copyright-applicant .UserLink a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerInfo-copyright-applicant .UserLink a {
    color: #175199
}

html[data-theme=dark] .AnswerInfo-copyright-applicant {
    color: #606a80
}

.AnswerInfo-favlists {
    padding: 4px 20px;
    margin: 0
}

.AnswerInfo-favlist {
    position: relative;
    padding: 12px 0;
    font-size: 14px;
    line-height: 24px;
    color: #8590a6
}

.AnswerInfo-favlist:not(:first-child) {
    border-top: 1px solid #f6f6f6
}

html[data-theme=dark] .AnswerInfo-favlist:not(:first-child) {
    border-top: 1px solid #2e2e2e
}

.AnswerInfo-favlist a {
    display: inline;
    color: #175199
}

.AnswerInfo-favlist a:hover,html[data-theme=dark] .AnswerInfo-favlist a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .AnswerInfo-favlist a {
    color: #175199
}

html[data-theme=dark] .AnswerInfo-favlist {
    color: #606a80
}

.AnswerInfo-title {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .AnswerInfo-title {
    font-weight: 500
}

html[data-android] .AnswerInfo-title {
    font-weight: 700
}

.AnswerInfo-favlist-title {
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.AnswerInfo-favlist-followers {
    position: absolute;
    top: 12px;
    right: 0
}

.ViewAll--bottom {
    margin-top: -10px;
    position: relative;
    box-shadow: 0 3px 3px -3px rgba(26,26,26,.2)
}

.ViewAll--bottom:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 16px;
    border-top: 1px solid #f6f6f6
}

html[data-theme=dark] .ViewAll--bottom:before {
    border-top: 1px solid #2e2e2e
}

html[data-theme=dark] .ViewAll--bottom {
    box-shadow: 0 3px 3px -3px hsla(0,0%,60%,.2)
}

.AdvancedViewer.is-mobile+.ViewAll--bottom {
    margin-top: 0
}

.AdvancedViewer.is-mobile+.ViewAll--bottom:before {
    margin: 0
}

.SearchItem-authorName {
    font-weight: 600;
    font-synthesis: style;
    font-size: 15px
}

html[data-ios] .SearchItem-authorName {
    font-weight: 500
}

html[data-android] .SearchItem-authorName {
    font-weight: 700
}

.Search-statusLink {
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .Search-statusLink {
    color: #606a80
}

.SearchItem-meta {
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.SearchItem-meta .SearchItem-description {
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.SearchItem-meta.SearchItem-authorInfo {
    margin: 12px 0
}

.SearchItem-userTitle,.SearchItem-userTitle .UserLink-badge {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.SearchItem-userTitle .UserLink-badge {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.SearchItem-albumStatus,.SearchItem-ebookStatus,.SearchItem-liveStatus {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 6px
}

.Search-albumStatusLastLink,.Search-albumStatusLink,.Search-ebookStatusLink,.Search-liveStatusLink {
    font-size: 14px;
    color: #8590a6;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    padding-right: 8px
}

html[data-theme=dark] .Search-albumStatusLastLink,html[data-theme=dark] .Search-albumStatusLink,html[data-theme=dark] .Search-ebookStatusLink,html[data-theme=dark] .Search-liveStatusLink {
    color: #606a80
}

.SearchItem-albumStatus .Search-albumStatusLink:not(:first-child):before,.SearchItem-ebookStatus .Search-ebookStatusLink:not(:first-child):before,.SearchItem-liveStatus .Search-liveStatusLink:not(:first-child):before {
    width: 8px;
    height: 16px;
    margin: 2px 0;
    border-left: 1px solid #ebebeb;
    content: ""
}

html[data-theme=dark] .SearchItem-albumStatus .Search-albumStatusLink:not(:first-child):before,html[data-theme=dark] .SearchItem-ebookStatus .Search-ebookStatusLink:not(:first-child):before,html[data-theme=dark] .SearchItem-liveStatus .Search-liveStatusLink:not(:first-child):before {
    border-left: 1px solid #444
}

.Search-albumStatusLastLink:before,.SearchItem-roundDivider .SearchItem-roundDivider:not(:first-child):before {
    width: 8px;
    height: 16px;
    margin: 2px 0;
    content: "\B7"
}

.SearchItem-ebookAvatarWrapper {
    width: 72px;
    height: 96px;
    border-radius: 4px;
    overflow: hidden
}

.SearchItem-ebookAvatarImg {
    width: 72px;
    border-radius: 4px
}

.SearchItem-albumImg {
    width: 60px;
    border-radius: 4px
}

.SearchItem-promotion img {
    max-width: 100%
}

.Search-questionFollowButton {
    min-width: auto;
    padding: 10px
}

.SearchAlbum-playButton {
    min-width: 96px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.SearchAlbum-playButton svg {
    margin-right: 5px
}

.SearchAlbumModal-openInAppWrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.SearchAlbumModal-subtitle {
    margin-bottom: 20px;
    text-align: center
}

.SearchAlbumModal-button {
    width: 220px;
    margin-top: 20px;
    box-sizing: border-box
}

.SearchAlbumModal-qrcode {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 auto
}

.SearchNoContent-wrapper {
    width: 100%;
    height: 400px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.SearchNoContent-content,.SearchNoContent-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.SearchNoContent-content {
    width: 500px;
    height: 200px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.SearchNoContent-title {
    font-size: 24px;
    margin-bottom: 32px
}

.SearchNoContent-input {
    width: 488px;
    height: 40px;
    background-color: #f6f6f6;
    margin-bottom: 32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.SearchNoContent-input .SearchNoContent-focusedInput {
    background-color: #fff
}

html[data-theme=dark] .SearchNoContent-input .SearchNoContent-focusedInput {
    background-color: #1a1a1a
}

html[data-theme=dark] .SearchNoContent-input {
    background-color: #2e2e2e
}

.SearchNoContent-button {
    width: 220px;
    height: 36px
}

.SearchNoContent-description {
    font-size: 15px;
    color: #8590a6;
    margin-top: 10px
}

html[data-theme=dark] .SearchNoContent-description {
    color: #606a80
}

.SearchCorrection {
    width: 694px;
    line-height: 23px;
    padding: 16px 20px
}

.SearchCorrection-correctionQueryString {
    color: #f1403c
}

html[data-theme=dark] .SearchCorrection-correctionQueryString {
    color: #b7302d
}

.SearchMain {
    width: 694px;
    margin-right: 10px
}

.SearchSections {
    width: 694px
}

.SearchSections .List-item {
    padding: 0
}

.SearchSections .ContentItem {
    padding: 20px
}

.SearchSections .ContentItem:not(:last-child) {
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .SearchSections .ContentItem:not(:last-child) {
    border-bottom: 1px solid #2e2e2e
}

.SearchSections .ContentItem-title>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.SearchSections .SearchItem-type {
    margin-left: 8px
}

.Search-more {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 5px;
    font-size: 14px
}

.Search-more,html[data-theme=dark] .Search-more {
    color: #175199
}

.TopSearch.Card:last-of-type {
    margin-bottom: 0
}

.TopSearch-title {
    font-size: 15px;
    font-weight: 600;
    font-synthesis: style;
    padding: 13px 16px;
    border-bottom: 1px solid #f6f6f6
}

html[data-ios] .TopSearch-title {
    font-weight: 500
}

html[data-android] .TopSearch-title {
    font-weight: 700
}

html[data-theme=dark] .TopSearch-title {
    border-bottom: 1px solid #2e2e2e
}

.TopSearch-items {
    padding: 8px 16px
}

.TopSearch-item {
    margin: 6px 0;
    overflow: hidden
}

.TopSearch-itemLink {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    color: #1a1a1a;
    line-height: 21px;
    width: 100%;
    overflow: hidden
}

.TopSearch-itemLink:hover,html[data-theme=dark] .TopSearch-itemLink:hover {
    color: #175199
}

html[data-theme=dark] .TopSearch-itemLink {
    color: #999
}

.TopSearch-itemText {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.TopSearch-hot {
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.TopSearch-items--spread {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    font-size: 15px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.TopSearch-items--spread .TopSearch-item {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%
}

.TopSearch-items--spread .TopSearch-itemLink {
    color: #175199;
    width: auto;
    max-width: 100%;
    overflow: hidden
}

html[data-theme=dark] .TopSearch-items--spread .TopSearch-itemLink {
    color: #175199
}

.TopSearch-hot {
    padding-left: 5px
}

.SearchRecommendationItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: self-start;
    -ms-flex-align: self-start;
    align-items: self-start;
    padding: 16px
}

.SearchRecommendationItem>img {
    width: 40px;
    margin-right: 8px;
    border-radius: 4px
}

.SearchRecommendationItem:not(:last-child) {
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .SearchRecommendationItem:not(:last-child) {
    border-bottom: 1px solid #2e2e2e
}

.SearchRecommendationItem-status {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    margin-top: 3px;
    color: #8590a6
}

html[data-theme=dark] .SearchRecommendationItem-status {
    color: #606a80
}

.SearchRecommendationItem-title {
    display: inline-block;
    font-weight: 600;
    font-synthesis: style;
    margin-right: 8px;
    max-width: 142px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    vertical-align: middle
}

html[data-ios] .SearchRecommendationItem-title {
    font-weight: 500
}

html[data-android] .SearchRecommendationItem-title {
    font-weight: 700
}

.SearchRecommendationItem-title+span {
    vertical-align: middle
}

.SearchRecommendationItem-title:hover,.SearchRecommendationItem-title:hover em,html[data-theme=dark] .SearchRecommendationItem-title:hover,html[data-theme=dark] .SearchRecommendationItem-title:hover em {
    color: #175199
}

.SearchRecommendationItem-authorName {
    max-width: 60px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.SearchRecommendations-title {
    padding: 13px 16px;
    font-size: 16px;
    font-weight: 600;
    font-synthesis: style;
    border-bottom: 1px solid #f6f6f6
}

html[data-ios] .SearchRecommendations-title {
    font-weight: 500
}

html[data-android] .SearchRecommendations-title {
    font-weight: 700
}

html[data-theme=dark] .SearchRecommendations-title {
    border-bottom: 1px solid #2e2e2e
}

.SearchSideBar {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.SearchTabs {
    width: 100%;
    background-color: #fff;
    padding-top: 2px
}

.SearchTabs.SearchTab-bottomShadow {
    box-shadow: 0 1px 3px rgba(26,26,26,.1)
}

html[data-theme=dark] .SearchTabs.SearchTab-bottomShadow {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

html[data-theme=dark] .SearchTabs {
    background-color: #1a1a1a
}

.SearchTabs-inner {
    margin: 0 auto;
    width: 1000px
}

.SearchTabs-actions,.SearchTabs-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.SearchTabs-actions {
    width: 694px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.SearchTabs-actions .Tabs {
    border-bottom: 0
}

.SearchTabs-selectList {
    width: 104px
}

.Search-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    position: relative;
    width: 1000px;
    min-height: 100vh;
    padding: 0 16px;
    margin: 10px auto;
    color: #1a1a1a
}

.Search-container .ContentItem-title {
    font-size: 16px
}

.Search-container .SearchItem-meta {
    font-size: 14px;
    color: #1a1a1a
}

html[data-theme=dark] .Search-container .SearchItem-meta {
    color: #999
}

.Search-container .LikeButton,.Search-container .VoteButton {
    line-height: 26px;
    padding: 0 10px
}

.Search-container .QuestionFollowButton {
    line-height: 26px;
    padding: 0 10px;
    width: auto
}

.Search-container .RichContent .RichContent-inner {
    margin-top: 5px
}

.Search-container .RichContent.is-collapsed .RichContent-inner {
    font-size: 14px
}

.Search-container .ContentItem-actions {
    height: 40px;
    padding-bottom: 6px
}

.Search-container .ContentItem-actions.is-fixed {
    height: 52px
}

.Search-container .ContentItem-action:not(:first-child) {
    margin-left: 16px
}

.Search-container .ContentItem-action.ContentItem-rightButton {
    margin-left: auto
}

.Search-container .ContentItem-extra {
    -ms-flex-item-align: auto;
    -ms-grid-row-align: auto;
    align-self: auto;
    margin-top: 14px
}

.Search-container .ContentItem-title {
    margin-top: 0
}

.Search-container .RichText b {
    font-weight: 600!important
}

html[data-theme=dark] .Search-container {
    color: #999
}

.Highlight em {
    font-style: normal;
    color: #f1403c
}

html[data-theme=dark] .Highlight em {
    color: #b7302d
}

.SearchItem-type {
    display: inline-block;
    white-space: nowrap;
    padding: 1px 4px;
    background: #ebebeb;
    color: #8590a6;
    font-size: 13px;
    font-weight: 400;
    border-radius: 4px
}

html[data-theme=dark] .SearchItem-type {
    background: #444;
    color: #606a80
}

.ContentLayout {
    width: 1000px;
    margin: 10px auto;
    padding: 0 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.ContentLayout-mainColumn {
    margin-right: 10px;
    width: 694px
}

.ContentLayout-sideColumn {
    width: 296px;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.ModifyField-input {
    width: 100%
}

.ModifyField-modifyButton:not(:first-child) {
    margin-left: 8px
}

.ModifyField-actionBar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 16px 0
}

.ModifyField-buttonGroup .Button:not(:last-child) {
    margin-right: 12px
}

.TopicCreateMeta {
    text-align: center
}

.TopicCreateMeta-submit {
    margin-top: 10px;
    width: 200px
}

.TopicActions {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.TopicActions>* {
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.TopicActions-link {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 4px 10px!important
}

.TopicActions-followButton {
    margin-right: 12px
}

.TopicActions-shareMenu {
    margin-left: 12px
}

.TopicCard .UserAvatarEditor-maskInnerText {
    display: none
}

.TopicCard .UserAvatar,.TopicCard .UserAvatarEditor-maskInner {
    border-radius: 4px;
    border: 0
}

.TopicCard .UserAvatarEditor-cameraIcon {
    margin-bottom: 0
}

.TopicCard .Avatar {
    max-width: 100px;
    max-height: 100px
}

.TopicCard-icon {
    margin-left: 2px
}

.TopicCard-content {
    padding: 16px 20px
}

.TopicCard-title {
    font-weight: 400;
    margin-top: 4px;
    margin-bottom: 12px
}

.TopicCard-titleText {
    display: inline;
    font-size: 22px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicCard-titleText {
    font-weight: 500
}

html[data-android] .TopicCard-titleText {
    font-weight: 700
}

.TopicCard-image {
    width: 100px;
    height: 100px;
    border-radius: 4px
}

.TopicCard-description {
    line-height: 26px
}

.TopicCard-collapseButton {
    margin-left: 8px
}

.TopicCard-actions {
    padding: 12px 20px;
    border-top: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

html[data-theme=dark] .TopicCard-actions {
    border-top: 1px solid #444
}

.Badge {
    display: inline-block;
    padding: 1px 6px;
    font-size: 12px;
    font-weight: 400;
    color: #8590a6;
    vertical-align: 1px;
    background-color: #f6f6f6;
    border-radius: 3px;
    line-height: 18px
}

html[data-theme=dark] .Badge {
    color: #606a80;
    background-color: #2e2e2e
}

.TopicMetaCard {
    padding: 16px 20px
}

.TopicMetaCard--rectangleImage .TopicMetaCard-image {
    height: 186px
}

.TopicMetaCard--rectangleImage .TopicMetaCard-content {
    min-height: 110px
}

.TopicMetaCard--squareImage .TopicMetaCard-image {
    height: 125px
}

.TopicMetaCard--squareImage .TopicMetaCard-content {
    min-height: 50px
}

.TopicMetaCard-item {
    position: relative
}

.TopicMetaCard-image {
    width: 125px;
    height: 186px
}

.TopicMetaCard-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 22px
}

.TopicMetaCard-label {
    margin-bottom: 10px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .TopicMetaCard-label {
    color: #606a80
}

.TopicMetaCard-badgeScore {
    margin-right: 4px;
    color: #ff9607
}

html[data-theme=dark] .TopicMetaCard-badgeScore {
    color: #ff9607
}

.TopicMetaCard-badges {
    margin-bottom: 8px
}

.TopicMetaCard-badge {
    margin-right: 12px
}

.TopicMetaCard-badge .Badge {
    font-size: 14px;
    padding: 3px 6px
}

.TopicMetaCard-description {
    line-height: 26px;
    font-size: 14px
}

.TopicMetaCard-actions {
    margin-top: 8px
}

.TopicMetaCard-content {
    min-height: 110px
}

.TopicNumberBoard-item {
    padding: 16px 0
}

.TopicTopWriterBoard-section {
    padding: 0 20px
}

.TopicTopWriterBoard-author {
    padding: 12px 0
}

.TopicTopWriterBoard-author:not(:last-child) {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .TopicTopWriterBoard-author:not(:last-child) {
    border-bottom: 1px solid #444
}

.TopicTopWriterBoard-author .AuthorInfo-content {
    margin-right: 12px
}

.TopicTopWriterBoard-authorDesc {
    color: #8590a6
}

html[data-theme=dark] .TopicTopWriterBoard-authorDesc {
    color: #606a80
}

.TopicTopWriterBoard-link:hover,html[data-theme=dark] .TopicTopWriterBoard-link:hover {
    color: #175199
}

.TopicTag {
    display: inline-block
}

.TopicTag .Tag {
    max-width: 256px;
    box-sizing: border-box;
    vertical-align: baseline;
    vertical-align: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.TopicTagsContainer .TopicTag {
    margin: 0 8px 8px 0
}

.TopicRelativeBoard-item:not(:first-child) {
    margin-top: 16px
}

.TopicRelativeBoard-title {
    font-weight: 600;
    font-synthesis: style;
    margin-bottom: 12px
}

html[data-ios] .TopicRelativeBoard-title {
    font-weight: 500
}

html[data-android] .TopicRelativeBoard-title {
    font-weight: 700
}

.TopicRelativeBoard-tag {
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 8px
}

.TopicRelativeBoard-link {
    display: inline-block;
    padding-top: 4px;
    font-size: 14px;
    color: #8590a6
}

.TopicRelativeBoard-link:hover,html[data-theme=dark] .TopicRelativeBoard-link:hover {
    color: #175199
}

html[data-theme=dark] .TopicRelativeBoard-link {
    color: #606a80
}

#TopicMain {
    min-height: 100vh
}

.Topic-pageHeader {
    width: 1000px;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 auto
}

.Topic-pageHeader .Topic-tabs {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.Topic-bar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.Topic-bar--borderTop {
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .Topic-bar--borderTop {
    border-top: 1px solid #444
}

.Topic-bar--borderBottom {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .Topic-bar--borderBottom {
    border-bottom: 1px solid #444
}

html[data-theme=dark] .Topic-bar {
    background-color: #1a1a1a
}

.Topic-barWrapper {
    background: #fff;
    overflow: hidden;
    border-radius: 2px 2px 0 0;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-sizing: border-box
}

html[data-theme=dark] .Topic-barWrapper {
    box-shadow: 0 1px 3px rgba(0,0,0,.3)
}

.Topic-barWrapper+.Card {
    border-radius: 0 0 2px 2px
}

html[data-theme=dark] .Topic-barWrapper {
    background: #1a1a1a
}

.Topic-headerLink.Button {
    padding-right: 20px
}

.Topic-pageHeaderMain {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 694px
}

.Topic-tabs {
    border-bottom: 0
}

.TopicIndexModule {
    padding: 0 20px 16px
}

.TopicIndex-mobileContent .TopicIndexModule-item a,html[data-theme=dark] .TopicIndex-mobileContent .TopicIndexModule-item a {
    color: #175199
}

.TopicIndexModule-title {
    border-top: 52px solid transparent;
    margin-top: -52px;
    padding: 16px 0;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicIndexModule-title {
    font-weight: 500
}

html[data-android] .TopicIndexModule-title {
    font-weight: 700
}

html[data-theme=dark] .TopicIndexModule-title {
    border-bottom: 1px solid #444
}

.TopicIndexModule-item {
    padding: 8px 0
}

.TopicIndexModule-item a:hover,html[data-theme=dark] .TopicIndexModule-item a:hover {
    color: #175199
}

.TopicIndexModule-topics {
    margin-top: 8px
}

.TopicIndexModule-topicsTitle {
    display: inline-block;
    margin-right: 8px;
    overflow: hidden;
    line-height: 30px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicIndexModule-topicsTitle {
    font-weight: 500
}

html[data-android] .TopicIndexModule-topicsTitle {
    font-weight: 700
}

.TopicIndexCatalog {
    position: relative;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 20px solid transparent;
    text-align: right
}

.TopicIndexCatalog-item:before,.TopicIndexCatalog:before {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 4px;
    height: 100%;
    content: "";
    background-color: #ebebeb;
    border-radius: 2px
}

html[data-theme=dark] .TopicIndexCatalog-item:before,html[data-theme=dark] .TopicIndexCatalog:before {
    background-color: #444
}

.TopicIndexCatalog-item {
    position: relative;
    color: #8590a6
}

.TopicIndexCatalog-item a {
    display: inline-block;
    padding: 4px 8px;
    border-right: 4px solid transparent
}

.TopicIndexCatalog-item.is-active {
    color: #1a1a1a
}

.TopicIndexCatalog-item.is-active:before {
    background-color: #0084ff
}

html[data-theme=dark] .TopicIndexCatalog-item.is-active:before {
    background-color: #3a76d0
}

html[data-theme=dark] .TopicIndexCatalog-item.is-active {
    color: #999
}

html[data-theme=dark] .TopicIndexCatalog-item {
    color: #606a80
}

.TopicIndex-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: unset
}

.TopicIndex-contentSide {
    position: relative;
    width: 180px
}

.TopicIntroSection {
    margin: 20px
}

.TopicIntroSection:not(:last-child) {
    padding-bottom: 20px;
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .TopicIntroSection:not(:last-child) {
    border-bottom: 1px solid #444
}

.TopicIntroSection .OldTopicIntro-intro {
    font-size: 15px;
    line-height: 24px;
    color: #646464
}

html[data-theme=dark] .TopicIntroSection .OldTopicIntro-intro {
    color: #999
}

.TopicIntroSection .OldTopicIntro-source {
    color: #8590a6;
    line-height: 24px
}

html[data-theme=dark] .TopicIntroSection .OldTopicIntro-source {
    color: #606a80
}

.TopicIntroSection-title {
    height: 26px;
    line-height: 26px;
    margin-bottom: 16px;
    font-size: 18px;
    color: #1a1a1a;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicIntroSection-title {
    font-weight: 500
}

html[data-android] .TopicIntroSection-title {
    font-weight: 700
}

html[data-theme=dark] .TopicIntroSection-title {
    color: #999
}

.TopicContentAbbr {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis
}

.TopicContentAbbr-abbr {
    position: relative
}

.TopicContentAbbr-mask {
    position: absolute;
    top: 66px;
    right: 0;
    width: 6em;
    height: 22px;
    text-align: right
}

.TopicContentAbbr-mask span:first-child {
    position: absolute;
    left: 0;
    right: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: max-height .32s cubic-bezier(.95,.05,.795,.035),-webkit-mask-size .22s cubic-bezier(.95,.05,.795,.035);
    transition: mask-size .22s cubic-bezier(.95,.05,.795,.035),max-height .32s cubic-bezier(.95,.05,.795,.035);
    transition: mask-size .22s cubic-bezier(.95,.05,.795,.035),max-height .32s cubic-bezier(.95,.05,.795,.035),-webkit-mask-size .22s cubic-bezier(.95,.05,.795,.035);
    -webkit-mask-image: linear-gradient(270deg,#1a1a1a calc(100% - 2em),transparent);
    mask-image: linear-gradient(270deg,#1a1a1a calc(100% - 2em),transparent);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%
}

html[data-theme=dark] .TopicContentAbbr-mask span:first-child {
    background: #1a1a1a;
    -webkit-mask-image: linear-gradient(270deg,#999 calc(100% - 2em),transparent);
    mask-image: linear-gradient(270deg,#999 calc(100% - 2em),transparent)
}

.TopicContentAbbr-mask span:last-child {
    position: absolute;
    right: 2px;
    bottom: 0;
    z-index: 2;
    color: #175199
}

html[data-theme=dark] .TopicContentAbbr-mask span:last-child {
    color: #175199
}

.TopicRelated {
    padding: 15px 0
}

.TopicRelated img {
    width: 40px;
    height: 40px;
    border-radius: 4px
}

.TopicRelated:not(:last-child) {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .TopicRelated:not(:last-child) {
    border-bottom: 1px solid #444
}

.TopicRelated-header {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 18px;
    margin-bottom: 15px
}

.TopicRelated-content,.TopicRelated-header,.TopicRelated-header>div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopicRelated-content {
    height: 40px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #999;
    margin-left: 15px
}

.TopicRelated-content span {
    font-size: 15px;
    color: #1a1a1a;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicRelated-content span {
    font-weight: 500
}

html[data-android] .TopicRelated-content span {
    font-weight: 700
}

html[data-theme=dark] .TopicRelated-content span {
    color: #999
}

html[data-theme=dark] .TopicRelated-content {
    color: #646464
}

.TopicRelated-followButton {
    width: 70px;
    min-width: 70px;
    padding: 0;
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px
}

.TopicRelated-followIcon {
    margin: 0 6px 2px 0
}

.SquareGrid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.ImageViewAlias {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100
}

.ImageViewAlias .ImageViewAlias-controls,.ImageViewAlias .ImageViewAlias-mask,.ImageViewAlias .ImageViewAlias-viewPort {
    transition: opacity .15s ease-in-out;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.ImageViewAlias-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(26,26,26,.65);
    z-index: -1
}

html[data-theme=dark] .ImageViewAlias-mask {
    background: hsla(0,0%,60%,.65)
}

.ImageViewAlias-controlsClose,.ImageViewAlias-controlsLeft,.ImageViewAlias-controlsRight {
    position: fixed;
    z-index: 1;
    width: 72px;
    height: 72px;
    border-radius: 50%
}

.ImageViewAlias-controlsClose.Button,.ImageViewAlias-controlsLeft.Button,.ImageViewAlias-controlsRight.Button {
    background: hsla(0,0%,100%,.1)
}

@media (max-width: 690px) {
    .ImageViewAlias-controlsClose,.ImageViewAlias-controlsLeft,.ImageViewAlias-controlsRight {
        width:48px;
        height: 48px
    }

    .ImageViewAlias-controlsClose.Button,.ImageViewAlias-controlsLeft.Button,.ImageViewAlias-controlsRight.Button {
        background: none
    }
}

.ImageViewAlias-controlsLeft,.ImageViewAlias-controlsRight {
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%)
}

.ImageViewAlias-controlsLeft {
    left: calc(50% - 508px)
}

@media (max-width: 690px) {
    .ImageViewAlias-controlsLeft {
        left:0
    }
}

.ImageViewAlias-controlsRight {
    right: calc(50% - 508px)
}

@media (max-width: 690px) {
    .ImageViewAlias-controlsRight {
        right:0
    }
}

.ImageViewAlias-controlsClose {
    top: calc(50% - 300px);
    right: calc(50% - 508px)
}

@media (max-width: 690px) {
    .ImageViewAlias-controlsClose {
        top:0;
        right: 0
    }
}

.ImageViewAlias-viewPort {
    width: 100%;
    box-sizing: border-box;
    min-height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.ImageViewAlias-image {
    max-width: 100%
}

.ThumbnailAlias {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    overflow: hidden
}

.ThumbnailAlias-image {
    max-width: 100%;
    min-height: 100%;
    position: absolute;
    -o-object-fit: cover;
    object-fit: cover;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.ThumbnailAlias-image--zoomIn {
    cursor: zoom-in
}

.ThumbnailAlias-image--pointer {
    cursor: pointer
}

.ThumbnailAlias-surplus {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-style: normal;
    font-size: 18px;
    color: #fff;
    z-index: 1;
    background: rgba(26,26,26,.3);
    text-align: center;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .ThumbnailAlias-surplus {
    font-weight: 500
}

html[data-android] .ThumbnailAlias-surplus {
    font-weight: 700
}

.TopicMovieIntro-celebrityItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.TopicMovieIntro-celebrityItemAvatar {
    margin-right: 12px
}

.TopicMovieIntro-celebrityDefaultAvatar {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 12px;
    background: #ebebeb
}

html[data-theme=dark] .TopicMovieIntro-celebrityDefaultAvatar {
    background: #000
}

.TopicMovieIntro-celebrityDefaultAvatar--icon {
    fill: #d3d3d3
}

html[data-theme=dark] .TopicMovieIntro-celebrityDefaultAvatar--icon {
    fill: #2e2e2e
}

.TopicMovieIntro-celebrityItemContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 52px
}

.TopicMovieIntro-celebrityItem:not(:last-child) .TopicMovieIntro-celebrityItemContent {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .TopicMovieIntro-celebrityItem:not(:last-child) .TopicMovieIntro-celebrityItemContent {
    border-bottom: 1px solid #444
}

.TopicMovieIntro-celebrityItemContent .TopicMovieIntro-celebrityItemName {
    width: 212px
}

.TopicMovieIntro-celebrityItemContent .TopicMovieIntro-celebrityItemPlay {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #646464
}

html[data-theme=dark] .TopicMovieIntro-celebrityItemContent .TopicMovieIntro-celebrityItemPlay {
    color: #999
}

.TopicMovieIntro-awardItem:last-child {
    margin-bottom: 20px
}

.TopicMovieIntro-awardItem a {
    color: #175199
}

.TopicMovieIntro-awardItem a:hover,html[data-theme=dark] .TopicMovieIntro-awardItem a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .TopicMovieIntro-awardItem a {
    color: #175199
}

.TopicMovieIntro-awardItemTitle {
    height: 52px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicMovieIntro-awardItemTitle {
    font-weight: 500
}

html[data-android] .TopicMovieIntro-awardItemTitle {
    font-weight: 700
}

.TopicMovieIntro-awardItemTitle .Avatar {
    width: 36px;
    height: 36px;
    margin-right: 12px
}

.TopicMovieIntro-awardContent {
    line-height: 24px;
    height: 24px;
    color: #646464
}

html[data-theme=dark] .TopicMovieIntro-awardContent {
    color: #999
}

.TopicMovieIntro-celebrityMore {
    padding-top: 12px
}

.TopicMovieIntro-celebrityMore span {
    margin-left: 4px
}

.TopicMovieIntro-celebrityMoreIcon {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.TopicMovieIntro-moreInfoItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    line-height: 36px
}

.TopicMovieIntro-moreInfoItemTitle {
    width: 120px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    line-height: 36px;
    margin-bottom: 8px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicMovieIntro-moreInfoItemTitle {
    font-weight: 500
}

html[data-android] .TopicMovieIntro-moreInfoItemTitle {
    font-weight: 700
}

.TopicMovieIntro-score {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.TopicIntro-moreInfoItemLabel {
    display: inline-block;
    width: 100px;
    line-height: 26px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicIntro-moreInfoItemLabel {
    font-weight: 500
}

html[data-android] .TopicIntro-moreInfoItemLabel {
    font-weight: 700
}

.TopicIntro-moreInfoItemValue {
    line-height: 26px
}

.TopicColumnMeta {
    box-sizing: border-box
}

.TopicColumnMeta-line {
    font-size: 15px
}

.TopicColumnMeta-avatar {
    margin-right: 12px
}

.TopicColumnMeta-topic {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopicColumnMeta-name {
    font-weight: 600;
    font-synthesis: style;
    color: #1a1a1a;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

html[data-ios] .TopicColumnMeta-name {
    font-weight: 500
}

html[data-android] .TopicColumnMeta-name {
    font-weight: 700
}

html[data-theme=dark] .TopicColumnMeta-name {
    color: #999
}

.TopicColumnMeta-remark {
    color: #646464;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

html[data-theme=dark] .TopicColumnMeta-remark {
    color: #999
}

.TopicColumnMeta-more {
    padding-top: 12px
}

.TopicColumnMeta-more span {
    margin-left: 4px
}

.TopicColumnMeta-singleLine {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 52px
}

.TopicColumnMeta-singleLine:not(:last-child) .TopicColumnMeta-topic {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .TopicColumnMeta-singleLine:not(:last-child) .TopicColumnMeta-topic {
    border-bottom: 1px solid #444
}

.TopicColumnMeta-singleLine .TopicColumnMeta-avatar {
    margin: 8px 12px 8px 0
}

.TopicColumnMeta-singleLine .TopicColumnMeta-topic {
    width: 606px;
    line-height: 52px
}

.TopicColumnMeta-singleLine .TopicColumnMeta-name {
    width: 212px
}

.TopicColumnMeta-singleLine .TopicColumnMeta-remark {
    padding-left: 16px;
    width: 378px
}

.TopicColumnMeta-doubleLine {
    height: 78px
}

.TopicColumnMeta-doubleLine .TopicColumnMeta-topic {
    padding: 8px 0
}

.TopicColumnMeta-doubleLine .TopicColumnMeta-name {
    height: 36px;
    line-height: 36px
}

.TopicColumnMeta-doubleLine .TopicColumnMeta-remark {
    height: 24px;
    line-height: 24px;
    margin-top: 2px
}

.TopicCommonField-topicText {
    line-height: 36px
}

.TopicCommonField-topicText:not(:last-child):after {
    content: "/";
    margin-left: 5px;
    margin-right: 5px
}

.TopicCommonField-topicAvatar {
    margin-right: 12px;
    vertical-align: top
}

.TopicCommonField-topicText {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.TopicCommonField-wrappedTopic {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.TopicCommonField-wrappedTopicRemark {
    margin-left: 8px
}

.TopicCommonField-text {
    line-height: 24px;
    font-size: 15px;
    color: #646464
}

:not(.TopicCommonIntroTable-value) .TopicCommonField-text li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 654px;
    margin-bottom: 6px
}

:not(.TopicCommonIntroTable-value) .TopicCommonField-text li h4 {
    margin: 0;
    width: 168px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] :not(.TopicCommonIntroTable-value) .TopicCommonField-text li h4 {
    font-weight: 500
}

html[data-android] :not(.TopicCommonIntroTable-value) .TopicCommonField-text li h4 {
    font-weight: 700
}

:not(.TopicCommonIntroTable-value) .TopicCommonField-text li p {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

html[data-theme=dark] .TopicCommonField-text {
    color: #999
}

.TopicCommonArray {
    width: 100%
}

.TopicCommonIntroTable-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopicCommonIntroTable-name {
    width: 120px;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    line-height: 36px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicCommonIntroTable-name {
    font-weight: 500
}

html[data-android] .TopicCommonIntroTable-name {
    font-weight: 700
}

.TopicCommonIntroTable-value {
    font-size: 15px;
    color: #646464
}

html[data-theme=dark] .TopicCommonIntroTable-value {
    color: #999
}

.TopicCommonIntroTable-value .TopicCommonField-text {
    line-height: 36px
}

.CopyRightMeta {
    margin: 20px;
    line-height: 24px;
    height: 24px;
    font-size: 15px;
    color: #8590a6
}

html[data-theme=dark] .CopyRightMeta {
    color: #606a80
}

.TopicFeedItem .Button:not(.Button--plain):not(.Button--link) {
    line-height: 30px
}

.TopicFeedItem .ArticleItem-extraInfo {
    margin-top: 9px
}

.TopicFeedItem .ArticleItem-authorInfo {
    margin-top: 12px
}

.TopicFeedItem .RichContent-cover {
    margin-bottom: 0
}

.TopicFeedItem .RichContent-inner {
    margin-top: 6px
}

.TopicFeedItem .RichContent-cover+.RichContent-inner {
    margin-top: 14px
}

.TopicFeedList-empty {
    padding: 120px 0
}

.TopicFeedList-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 13px 0;
    margin: 0 16px;
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .TopicFeedList-header {
    border-bottom: 1px solid #2e2e2e
}

.TopicFeedList-sort {
    font-size: 16px;
    color: #1a1a1a;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicFeedList-sort {
    font-weight: 500
}

html[data-android] .TopicFeedList-sort {
    font-weight: 700
}

html[data-theme=dark] .TopicFeedList-sort {
    color: #999
}

.TopicFeedList-sortSwitch {
    color: #8590a6;
    font-size: 14px
}

html[data-theme=dark] .TopicFeedList-sortSwitch {
    color: #606a80
}

.TopicQuestion-source {
    color: #8590a6;
    margin-bottom: 10px
}

html[data-theme=dark] .TopicQuestion-source {
    color: #606a80
}

.TopicCreatorModule-more {
    width: 100%;
    border: none;
    border-top: 1px solid #ebebeb;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    border-radius: 0;
    line-height: 44px
}

html[data-theme=dark] .TopicCreatorModule-more {
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    border-top: 1px solid #444
}

.TopicHotIntroItem-item:not(:first-child) {
    padding-top: 16px
}

.TopicHotIntroItem-item:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .TopicHotIntroItem-item:not(:last-child) {
    border-bottom: 1px solid #2e2e2e
}

.TopicHotIntroItem-images {
    margin-top: 8px
}

.TopicHotIntroItem-imagesLength {
    color: #8590a6;
    font-size: 15px;
    margin-left: 10px
}

html[data-theme=dark] .TopicHotIntroItem-imagesLength {
    color: #606a80
}

.TopicHot-introItem {
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.6
}

.TopicHot-introItem:last-of-type {
    -webkit-line-clamp: 1
}

.ImageUploader {
    position: relative;
    color: #fff
}

.ImageUploader-main {
    position: absolute;
    top: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: rgba(133,144,166,.2);
    width: 100%;
    height: 100%;
    background-color: rgba(133,144,166,.1);
    opacity: 0;
    cursor: pointer;
    transition: opacity .2s
}

.ImageUploader-main.is-masked,.ImageUploader-main:hover {
    opacity: 1
}

html[data-theme=dark] .ImageUploader-main {
    background: rgba(96,106,128,.2);
    background-color: rgba(96,106,128,.1)
}

.ImageUploader-placeholder {
    margin-top: 8px
}

.ImageUploader--spread,.ImageUploader-image {
    width: 100%;
    height: 100%
}

.ImageUploader-image {
    position: absolute
}

.TopicEditFieldImage {
    width: 100%;
    padding-bottom: 56%;
    border-radius: 4px;
    color: #0084ff;
    overflow: hidden
}

html[data-theme=dark] .TopicEditFieldImage {
    color: #3a76d0
}

.TopicEditFieldImage--isArray {
    width: 100%;
    padding-bottom: 100%
}

.TopicEditArray {
    font-size: 15px;
    color: #1a1a1a;
    line-height: normal
}

html[data-theme=dark] .TopicEditArray {
    color: #999
}

.TopicEditArray-item {
    position: relative
}

.TopicEditArray-item--line {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-radius: 4px;
    margin-top: 16px
}

.TopicEditArray-item--line:hover {
    background-color: #f6f6f6
}

.TopicEditArray-item--line:hover .TopicEditArray-closeButton .Zi {
    fill: #646464
}

html[data-theme=dark] .TopicEditArray-item--line:hover .TopicEditArray-closeButton .Zi {
    fill: #999
}

html[data-theme=dark] .TopicEditArray-item--line:hover {
    background-color: #2e2e2e
}

.TopicEditArray-item--line+.TopicEditArray-item--line {
    margin-top: 0
}

.TopicEditArray-item--block {
    position: relative;
    border-radius: 4px;
    overflow: hidden
}

.TopicEditArray-item--block:after {
    content: "";
    background-color: rgba(26,26,26,.3);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0
}

html[data-theme=dark] .TopicEditArray-item--block:after {
    background-color: hsla(0,0%,60%,.3)
}

.TopicEditArray-item--block .TopicEditArray-closeButton {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1
}

.TopicEditArray-item--block .TopicEditArray-closeButton .Zi {
    fill: #fff
}

.TopicEditArray-item--block .TopicEditArray-closeButton,.TopicEditArray-item--block:after {
    opacity: 0;
    transition: opacity .2s
}

.TopicEditArray-item--block:hover .TopicEditArray-closeButton,.TopicEditArray-item--block:hover:after {
    opacity: 1
}

.TopicEditArray-closeButton {
    padding: 8px
}

.TopicEditArray-input {
    padding: 0 10px
}

.TopicEditArray-input .Popover {
    width: 100%
}

.TopicEditItem-formActions {
    margin-top: 16px
}

.TopicEditItem-formActions .Button+.Button {
    margin-left: 16px
}

.TopicEditItem-displayActions {
    display: inline-block;
    margin-left: 8px
}

.TopicCommonArray+.TopicEditItem-displayActions {
    margin-left: 0
}

.TopicCommonArray--image+.TopicEditItem-displayActions {
    margin-top: 16px
}

.TopicEditTable-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopicEditTable-item:not(:last-child) .TopicEditTable-value {
    border-bottom: .5px solid #d3d3d3
}

html[data-hairline] .TopicEditTable-item:not(:last-child) .TopicEditTable-value {
    border-bottom: 1px solid #d3d3d3;
    -o-border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='.5' width='1' height='.5' fill='#d3d3d3'/> </svg>") 0 0 1 0;
    border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='.5' width='1' height='.5' fill='#d3d3d3'/> </svg>") 0 0 1 0
}

html[data-theme=dark] html[data-hairline] .TopicEditTable-item:not(:last-child) .TopicEditTable-value {
    border-bottom: 1px solid #2e2e2e
}

html[data-theme=dark] .TopicEditTable-item:not(:last-child) .TopicEditTable-value {
    border-bottom: .5px solid #2e2e2e
}

.TopicEditTable-name {
    padding: 16px 0;
    min-width: 140px;
    line-height: 36px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicEditTable-name {
    font-weight: 500
}

html[data-android] .TopicEditTable-name {
    font-weight: 700
}

.TopicEditTable-value {
    padding: 16px 0;
    line-height: 36px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.TopicEditTable-value .TopicCommonArray--topic,.TopicEditTable-value .TopicEditArray--topic {
    margin: 0 -10px
}

.TopicEditTable-value .TopicCommonField-topic {
    padding: 0 10px
}

.TopicEditModuleUI {
    padding-top: 8px;
    padding-bottom: 24px
}

.TopicEditModuleUI:not(:last-child) {
    border-bottom: .5px solid #d3d3d3
}

html[data-hairline] .TopicEditModuleUI:not(:last-child) {
    border-bottom: 1px solid #d3d3d3;
    -o-border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='.5' width='1' height='.5' fill='#d3d3d3'/> </svg>") 0 0 1 0;
    border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='.5' width='1' height='.5' fill='#d3d3d3'/> </svg>") 0 0 1 0
}

html[data-theme=dark] html[data-hairline] .TopicEditModuleUI:not(:last-child) {
    border-bottom: 1px solid #2e2e2e
}

html[data-theme=dark] .TopicEditModuleUI:not(:last-child) {
    border-bottom: .5px solid #2e2e2e
}

.TopicEditModuleUI-title {
    font-size: 16px;
    font-weight: 600;
    padding: 16px 0
}

.TopicEditAvatar {
    border-radius: 4px;
    overflow: hidden
}

.TopicEditAvatar,.TopicEditAvatar--rectangle {
    width: 180px;
    height: 270px
}

.TopicEditAvatar--square {
    width: 180px;
    height: 180px
}

.TopicEdit {
    max-width: 1000px;
    margin: 10px auto 40px;
    padding: 24px 40px;
    margin-bottom: 40px!important
}

.TopicEdit-header {
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    padding: 16px 0
}

.TopicEdit-header,.TopicEdit-main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopicEdit-side {
    padding-top: 24px
}

.TopicEdit-modules {
    border-top: .5px solid #d3d3d3;
    width: 690px;
    margin-right: 50px
}

html[data-hairline] .TopicEdit-modules {
    border-top: 1px solid #d3d3d3;
    -o-border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='0' width='1' height='.5' fill='#d3d3d3'/> </svg>") 1 0 0 0;
    border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='0' width='1' height='.5' fill='#d3d3d3'/> </svg>") 1 0 0 0
}

html[data-theme=dark] html[data-hairline] .TopicEdit-modules {
    border-top: 1px solid #2e2e2e
}

html[data-theme=dark] .TopicEdit-modules {
    border-top: .5px solid #2e2e2e
}

.TopicEdit-headerTitle {
    margin-right: 24px;
    font-size: 26px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicEdit-headerTitle {
    font-weight: 500
}

html[data-android] .TopicEdit-headerTitle {
    font-weight: 700
}

.TopicEdit-submit {
    width: 120px;
    letter-spacing: 4px
}

.TopicImage-container {
    width: 1000px;
    margin: 10px auto 0;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.TopicImage-container,.TopicImageMain-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopicImageMain-container {
    width: 694px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.TopicImageMain-backBar {
    line-height: 50px;
    color: #8590a6;
    text-align: center
}

.TopicImageMain-backBar:hover,html[data-theme=dark] .TopicImageMain-backBar:hover {
    color: #175199
}

html[data-theme=dark] .TopicImageMain-backBar {
    color: #606a80
}

.TopicImageMain-imageListWrapper {
    padding: 20px
}

.TopicImageMain-imageListLength {
    color: #8590a6;
    font-size: 15px;
    margin-left: 10px
}

html[data-theme=dark] .TopicImageMain-imageListLength {
    color: #606a80
}

.TopicImageMain-imageList {
    margin-top: 20px
}

.TopicImageSidebar-container {
    width: 296px
}

.TopicImageSidebar-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 78px;
    padding: 16px;
    box-sizing: border-box
}

.TopicImageSidebar-content>img {
    width: 40px;
    margin-right: 8px;
    border-radius: 4px
}

.TopicImageSidebar-content:not(:last-child) {
    border-bottom: 1px solid #f6f6f6
}

html[data-theme=dark] .TopicImageSidebar-content:not(:last-child) {
    border-bottom: 1px solid #2e2e2e
}

.TopicImageSidebar-contentTitle {
    font-size: 15px;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopicImageSidebar-contentTitle {
    font-weight: 500
}

html[data-android] .TopicImageSidebar-contentTitle {
    font-weight: 700
}

.TopicImageSidebar-contentStatus {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    margin-top: 3px;
    color: #8590a6
}

html[data-theme=dark] .TopicImageSidebar-contentStatus {
    color: #606a80
}

.SettingsFooter {
    color: #8590a6;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 13px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 24px;
    padding: 8px 8px 0 4px;
    width: 724px
}

html[data-theme=dark] .SettingsFooter {
    color: #606a80
}

.SettingsFooter-dot {
    margin: 0 2px
}

.SettingsNav {
    height: 100%;
    width: 162px
}

.SettingsNav-link {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8590a6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 50px;
    overflow: hidden;
    padding-left: 28px
}

.SettingsNav-link:hover {
    background: rgba(133,144,166,.08)
}

.SettingsNav-link:hover svg {
    fill: #8590a6
}

html[data-theme=dark] .SettingsNav-link:hover svg {
    fill: #606a80
}

html[data-theme=dark] .SettingsNav-link:hover {
    background: rgba(96,106,128,.08)
}

.SettingsNav-link.is-active {
    background: rgba(133,144,166,.08);
    color: #444;
    font-weight: 600
}

.SettingsNav-link.is-active svg {
    fill: #444
}

html[data-theme=dark] .SettingsNav-link.is-active svg {
    fill: gray
}

html[data-theme=dark] .SettingsNav-link.is-active {
    background: rgba(96,106,128,.08);
    color: gray
}

html[data-theme=dark] .SettingsNav-link {
    color: #606a80
}

.SettingsNav-linkTxt {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 12px
}

.SettingsQA {
    font-size: 14px;
    margin: 0;
    padding: 10px 20px
}

.SettingsQA.is-expanded {
    background: rgba(133,144,166,.08)
}

html[data-theme=dark] .SettingsQA.is-expanded {
    background: rgba(96,106,128,.08)
}

.SettingsQA dt {
    color: #8590a6;
    cursor: pointer;
    line-height: 1.5;
    font-weight: 400
}

.SettingsQA dt:hover {
    color: #0084ff
}

html[data-theme=dark] .SettingsQA dt:hover {
    color: #3a76d0
}

html[data-theme=dark] .SettingsQA dt {
    color: #606a80
}

.SettingsQA dd {
    line-height: 1.7
}

.SettingsQA a {
    color: #175199;
    cursor: pointer;
    padding-left: 6px
}

html[data-theme=dark] .SettingsQA a {
    color: #175199
}

@-webkit-keyframes blinkSettingsQAColor {
    0% {
        color: #0084ff
    }

    html[data-theme=dark] 0% {
        color: #3a76d0
    }

    25% {
        color: #8590a6
    }

    html[data-theme=dark] 25% {
        color: #606a80
    }

    50% {
        color: #0084ff
    }

    html[data-theme=dark] 50% {
        color: #3a76d0
    }

    75% {
        color: #8590a6
    }

    html[data-theme=dark] 75% {
        color: #606a80
    }

    to {
        color: #0084ff
    }

    html[data-theme=dark] to {
        color: #3a76d0
    }
}

@keyframes blinkSettingsQAColor {
    0% {
        color: #0084ff
    }

    html[data-theme=dark] 0% {
        color: #3a76d0
    }

    25% {
        color: #8590a6
    }

    html[data-theme=dark] 25% {
        color: #606a80
    }

    50% {
        color: #0084ff
    }

    html[data-theme=dark] 50% {
        color: #3a76d0
    }

    75% {
        color: #8590a6
    }

    html[data-theme=dark] 75% {
        color: #606a80
    }

    to {
        color: #0084ff
    }

    html[data-theme=dark] to {
        color: #3a76d0
    }
}

.SettingsQA--blink dt {
    color: #0084ff;
    -webkit-animation: blinkSettingsQAColor 1s ease-in .4s;
    animation: blinkSettingsQAColor 1s ease-in .4s
}

html[data-theme=dark] .SettingsQA--blink dt {
    color: #3a76d0
}

.SettingsQA-answer {
    color: #646464;
    display: none;
    margin-left: 0;
    padding: 10px 0
}

.SettingsQA-answer.is-expanded {
    display: block
}

.SettingsQA-answer .faq-dot {
    background: #d3d3d3;
    border-radius: 50%;
    display: inline-block;
    height: 6px;
    position: relative;
    top: -2px;
    width: 6px
}

html[data-theme=dark] .SettingsQA-answer .faq-dot {
    background: #2e2e2e
}

html[data-theme=dark] .SettingsQA-answer {
    color: #999
}

.SettingsFAQ {
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 2px;
    box-shadow: 0 0 4px rgba(3,4,18,.08);
    padding: 20px 0;
    width: 264px
}

html[data-theme=dark] .SettingsFAQ {
    background: #1a1a1a;
    border: 1px solid #444
}

.SettingsFAQ-pageTitle {
    color: #1a1a1a;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 19px;
    font-weight: 600;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 26px;
    line-height: 26px;
    padding-left: 20px
}

html[data-theme=dark] .SettingsFAQ-pageTitle {
    color: #999
}

.SettingsFAQ-toggle {
    height: 16px;
    margin: 2px 20px 0 0
}

.SettingsFAQ-section {
    overflow: hidden
}

.SettingsFAQ-faqTitle {
    color: #444;
    font-size: 15px;
    font-weight: 600;
    height: 16px;
    line-height: 16px;
    margin: 10px 0;
    padding-left: 20px
}

html[data-theme=dark] .SettingsFAQ-faqTitle {
    color: gray
}

.SettingsFAQ-sectionWrap {
    padding: 10px 0
}

.SettingsFAQ-sectionWrap.is-fixed {
    height: 284px;
    overflow-y: auto
}

.SettingsFAQ-sectionWrap.is-collapsed {
    display: none
}

.SettingsMain {
    margin: 12px auto;
    width: 1000px
}

@media only screen and (min-device-width: 768px) and (max-device-width:1024px) and (orientation:portrait) {
    .SettingsMain {
        overflow-x:hidden;
        width: 724px
    }
}

.SettingsMain-layout {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start
}

.SettingsMain-layout,.SettingsMain-mainColumn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.SettingsMain-mainColumn {
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-shadow: 0 0 4px rgba(6,10,29,.04);
    margin-right: 12px;
    width: 724px
}

html[data-theme=dark] .SettingsMain-mainColumn {
    background: #1a1a1a;
    border: 1px solid #444
}

.SettingsMain-sideColumn {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

@media only screen and (min-device-width: 768px) and (max-device-width:1024px) and (orientation:portrait) {
    .SettingsMain-sideColumn {
        -webkit-box-flex:0;
        -ms-flex: none;
        flex: none;
        bottom: 0;
        position: fixed;
        right: 26px;
        z-index: 10
    }
}

.SettingsMain-page {
    border-left: 1px solid #ebebeb;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

html[data-theme=dark] .SettingsMain-page {
    border-left: 1px solid #444
}

.SettingsAlert {
    color: #1a1a1a;
    font-size: 14px;
    line-height: 1.5;
    text-align: center
}

.SettingsAlert h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 16px auto 24px
}

html[data-theme=dark] .SettingsAlert {
    color: #999
}

@media only screen and (min-device-width: 768px) and (max-device-width:1024px) and (orientation:portrait) {
    .AppHeader {
        min-width:auto
    }

    .AppHeader-inner {
        background: #fff;
        box-sizing: border-box;
        overflow-x: hidden;
        padding: 0 8px;
        width: 768px
    }

    html[data-theme=dark] .AppHeader-inner {
        background: #1a1a1a
    }

    .SearchBar-input,.SearchBar-toolWrapper {
        width: auto
    }
}

.SettingsTitle {
    overflow: hidden;
    padding: 20px 18px
}

.SettingsTitle-title {
    color: #1a1a1a;
    font-size: 19px;
    font-weight: 600;
    height: 26px;
    line-height: 26px;
    margin-bottom: 9px
}

html[data-theme=dark] .SettingsTitle-title {
    color: #999
}

.SettingsTitle-subTitle {
    color: #1a1a1a;
    font-size: 15px;
    font-weight: 600;
    height: 21px;
    line-height: 21px;
    margin: 0 0 5px
}

html[data-theme=dark] .SettingsTitle-subTitle {
    color: #999
}

.SettingsTitle-descr {
    color: #8590a6;
    font-size: 14px;
    line-height: 1.5
}

html[data-theme=dark] .SettingsTitle-descr {
    color: #606a80
}

.ExpandableField {
    background: #fff
}

.ExpandableField.is-expanded {
    background: rgba(133,144,166,.08)
}

html[data-theme=dark] .ExpandableField.is-expanded {
    background: rgba(96,106,128,.08)
}

html[data-theme=dark] .ExpandableField {
    background: #1a1a1a
}

.ExpandableField--default {
    padding-left: 18px
}

.ExpandableField--narrow {
    padding-left: 38px
}

.ExpandableField--narrow .ExpandableField-titleView {
    padding: 10px 0
}

.ExpandableField--narrow .ExpandableField-title {
    font-weight: 400
}

.ExpandableField-titleView {
    overflow: hidden;
    padding: 20px 0;
    position: relative
}

.ExpandableField-titleView--bordered {
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .ExpandableField-titleView--bordered {
    border-top: 1px solid #444
}

.ExpandableField-title {
    color: #1a1a1a;
    font-size: 15px;
    height: 21px;
    line-height: 21px;
    margin: 0;
    padding-bottom: 4px
}

html[data-theme=dark] .ExpandableField-title {
    color: #999
}

.ExpandableField-descr {
    color: #8590a6;
    font-size: 14px;
    line-height: 1.5
}

.ExpandableField-descr>div {
    padding-top: 4px
}

html[data-theme=dark] .ExpandableField-descr {
    color: #606a80
}

.ExpandableField-edit {
    color: #0084ff;
    display: inline-block;
    font-size: 15px;
    height: 21px;
    line-height: 21px;
    text-decoration: none;
    position: absolute;
    right: 20px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 1
}

.ExpandableField-edit:disabled,.ExpandableField-edit:hover:disabled {
    cursor: not-allowed;
    color: #0084ff
}

html[data-theme=dark] .ExpandableField-edit,html[data-theme=dark] .ExpandableField-edit:disabled,html[data-theme=dark] .ExpandableField-edit:hover:disabled {
    color: #3a76d0
}

.ExpandableField-content {
    border-top: 1px solid #ebebeb;
    display: none;
    padding: 10px 0
}

.ExpandableField-content.is-expanded {
    display: block
}

html[data-theme=dark] .ExpandableField-content {
    border-top: 1px solid #444
}

.AccountPassword {
    overflow: hidden;
    padding-bottom: 10px
}

.AccountPassword-inputWrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.AccountPassword-input,.AccountPassword-submit {
    height: 40px;
    width: 300px
}

.AccountPassword-input {
    margin-bottom: 12px
}

.AccountPassword-input .Input {
    height: 32px;
    line-height: 32px
}

.AccountPassword-input .Input--validationError {
    color: #f1403c
}

html[data-theme=dark] .AccountPassword-input .Input--validationError {
    color: #b7302d
}

.AccountPassword-hint {
    color: #999;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    padding: 10px 10px 0
}

html[data-theme=dark] .AccountPassword-hint {
    color: #646464
}

.AccountPhone {
    overflow: hidden;
    padding-bottom: 10px
}

.AccountPhone-inputWrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.AccountPhone-btnCode,.AccountPhone-input,.AccountPhone-submit {
    height: 40px
}

.AccountPhone-input {
    margin-bottom: 12px
}

.AccountPhone-input .Input {
    height: 32px;
    line-height: 32px
}

.AccountPhone-input .Input--validationError {
    color: #f1403c
}

html[data-theme=dark] .AccountPhone-input .Input--validationError {
    color: #b7302d
}

.AccountPhone-inputPhone {
    width: 230px
}

.AccountPhone-inputCode {
    margin-right: 10px;
    width: 182px
}

.AccountPhone-btnCode {
    background: rgba(0,132,255,.08);
    border: 0 none;
    color: #0084ff;
    padding-left: 0;
    padding-right: 0;
    width: 106px
}

html[data-theme=dark] .AccountPhone-btnCode {
    background: rgba(58,118,208,.08);
    color: #3a76d0
}

.AccountPhone-hint {
    color: #999;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    padding: 10px 10px 0
}

html[data-theme=dark] .AccountPhone-hint {
    color: #646464
}

.AccountPhone-submit {
    width: 300px
}

.AccountPhone-selectWrap {
    background: #fff;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-sizing: border-box;
    color: #444;
    height: 40px;
    margin-right: 10px;
    width: 60px
}

.AccountPhone-selectWrap .Select-button {
    text-align: center
}

html[data-theme=dark] .AccountPhone-selectWrap {
    background: #1a1a1a;
    border: 1px solid #444;
    color: gray
}

.AccountPhone-supportedCountriesList {
    z-index: 99
}

.AccountPhone-supportedCountriesList .Select-option {
    color: #8590a6
}

html[data-theme=dark] .AccountPhone-supportedCountriesList .Select-option {
    color: #606a80
}

.AccountEmail {
    overflow: hidden;
    padding-bottom: 10px
}

.AccountEmail-inputWrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 12px
}

.AccountEmail-label {
    color: #444;
    font-size: 15px;
    padding-right: 6px
}

html[data-theme=dark] .AccountEmail-label {
    color: gray
}

.AccountEmail-btn,.AccountEmail-submit {
    padding: 0
}

.AccountEmail-btn {
    background: rgba(0,132,255,.08);
    border: 0 none;
    color: #0084ff;
    height: 34px;
    line-height: 34px;
    margin-left: 10px;
    width: 106px
}

.AccountEmail-btn--large {
    height: 40px;
    line-height: 40px
}

html[data-theme=dark] .AccountEmail-btn {
    background: rgba(58,118,208,.08);
    color: #3a76d0
}

.AccountEmail-btnActive {
    box-sizing: border-box;
    margin-left: 10px;
    min-width: 58px;
    padding: 0 4px
}

.AccountEmail-btnActive.is-counting {
    color: #fff
}

html[data-theme=dark] .AccountEmail-btnActive.is-counting {
    color: #1a1a1a
}

.AccountEmail-submit {
    height: 40px;
    line-height: 40px;
    width: 300px
}

.AccountEmail-input {
    height: 40px;
    padding-top: 7px;
    padding-bottom: 7px;
    width: 300px
}

.AccountEmail-input .Input--validationError {
    color: #f1403c
}

html[data-theme=dark] .AccountEmail-input .Input--validationError {
    color: #b7302d
}

.AccountEmail-vcodeInput {
    width: 184px
}

.AccountSocial {
    border-top: 1px solid #ebebeb;
    margin-left: 38px;
    padding: 16px 0 18px
}

.AccountSocial>h4 {
    color: #444;
    font-weight: 400;
    height: 21px;
    line-height: 21px;
    margin: 0
}

html[data-theme=dark] .AccountSocial>h4 {
    color: gray
}

html[data-theme=dark] .AccountSocial {
    border-top: 1px solid #444
}

.AccountSocial-wrap {
    padding-top: 14px
}

.AccountSocial-account,.AccountSocial-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.AccountSocial-account {
    padding-right: 18px;
    font-size: 15px
}

.AccountSocial-account a {
    cursor: pointer
}

.AccountSocial-ico {
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 26px;
    line-height: 26px;
    text-align: center;
    width: 26px
}

.AccountSocial-icoWeChat {
    background: #6cda49
}

.AccountSocial-icoWeibo {
    background: #ff6d4a
}

.AccountSocial-icoWeibo path {
    fill: #fff
}

html[data-theme=dark] .AccountSocial-icoWeibo path {
    fill: #1a1a1a
}

.AccountSocial-icoQQ {
    background: #50c8fd
}

.AccountSocial-bind,.AccountSocial-unbind {
    font-size: 15px
}

.AccountSocial-name {
    box-sizing: border-box;
    color: #444;
    height: 21px;
    line-height: 21px;
    overflow: hidden;
    padding-left: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 130px
}

html[data-theme=dark] .AccountSocial-name {
    color: gray
}

.AccountSocial-unbind {
    color: #8590a6;
    text-align: left
}

html[data-theme=dark] .AccountSocial-unbind {
    color: #606a80
}

.AccountSocial-bind {
    color: #0084ff;
    padding: 0 16px 0 6px
}

html[data-theme=dark] .AccountSocial-bind {
    color: #3a76d0
}

.AccountSocial-deletionNotices {
    list-style-type: disc;
    margin-left: 40px;
    padding: 4px 0;
    text-align: left
}

.PersonalUrl-form {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

.PersonalUrl-label {
    color: #8590a6;
    font-size: 14px
}

html[data-theme=dark] .PersonalUrl-label {
    color: #606a80
}

.PersonalUrl-button,.PersonalUrl-input {
    height: 40px
}

.PersonalUrl-input {
    margin: 0 14px 0 12px;
    width: 195px
}

.PersonalUrl-input input.Input {
    height: 32px;
    line-height: 32px
}

.PersonalUrl-button {
    width: 70px
}

.PersonalUrl-lockedView {
    color: #8590a6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    padding: 18px 0
}

html[data-theme=dark] .PersonalUrl-lockedView {
    color: #606a80
}

.PersonalUrl-disableEdit {
    color: #999;
    height: 20px;
    line-height: 20px;
    padding-left: 14px
}

html[data-theme=dark] .PersonalUrl-disableEdit {
    color: #646464
}

.SettingsAccount {
    padding-bottom: 40px
}

.SettingsAccount-account,.SettingsAccount-personalUrl {
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .SettingsAccount-account,html[data-theme=dark] .SettingsAccount-personalUrl {
    border-top: 1px solid #444
}

.SettingsAccount-personalUrl {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .SettingsAccount-personalUrl {
    border-bottom: 1px solid #444
}

.SettingsAccount-accountForm .AccountForm-passwordDescrWarn {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: rgba(241,64,60,.1);
    border-radius: 4px;
    box-sizing: border-box;
    color: #f1403c;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    padding-top: 0;
    padding-left: 12px;
    width: 364px
}

.SettingsAccount-accountForm .AccountForm-passwordDescrWarn svg {
    fill: #f1403c;
    margin-right: 10px
}

html[data-theme=dark] .SettingsAccount-accountForm .AccountForm-passwordDescrWarn svg {
    fill: #b7302d
}

html[data-theme=dark] .SettingsAccount-accountForm .AccountForm-passwordDescrWarn {
    background: rgba(183,48,45,.1);
    color: #b7302d
}

.SelectorField {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px 20px 10px 0
}

.SelectorField--separator {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .SelectorField--separator {
    border-bottom: 1px solid #444
}

.SelectorField-title h4 {
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 400;
    height: 21px;
    line-height: 21px;
    margin: 0
}

html[data-theme=dark] .SelectorField-title h4 {
    color: #999
}

.SelectorField-descr {
    color: #8590a6;
    font-size: 14px;
    line-height: 1.5;
    padding-top: 3px
}

html[data-theme=dark] .SelectorField-descr {
    color: #606a80
}

.SelectorField-selectWrap {
    background: #fff;
    border: 1px solid rgba(133,144,166,.2);
    border-radius: 3px;
    box-sizing: border-box;
    height: 48px;
    padding: 0 6px 0 14px;
    width: 140px
}

html[data-theme=dark] .SelectorField-selectWrap {
    background: #1a1a1a;
    border: 1px solid rgba(96,106,128,.2)
}

.SelectorField-select {
    width: 100%
}

.SelectorField-select.is-disabled {
    opacity: .5
}

.SelectorField-select.is-disabled button {
    cursor: not-allowed
}

.SelectorField-select .Select-button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 48px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%
}

.SelectorField-select .Select-arrow {
    fill: gray;
    margin-left: 0
}

html[data-theme=dark] .SelectorField-select .Select-arrow {
    fill: gray
}

.SelectorField-options {
    min-width: 140px
}

.SelectorField-options .Select-option {
    color: #1a1a1a;
    padding: 0;
    text-align: center
}

html[data-theme=dark] .SelectorField-options .Select-option {
    color: #999
}

.SelectorField-options .Select-option.is-selected,.SelectorField-options .Select-option:focus {
    background: #f4f8fb
}

.SelectorField-options .Select-option.is-selected {
    position: relative
}

.SelectorField-options .SelectorField-iconCheck {
    left: 16px;
    position: absolute;
    top: 13px
}

.SettingsInboxStranger {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: hsla(0,0%,100%,.5);
    border: 1px solid rgba(133,144,166,.2);
    border-radius: 2px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 20px 10px 0;
    padding: 12px 0 10px 16px
}

html[data-theme=dark] .SettingsInboxStranger {
    background: rgba(26,26,26,.5);
    border: 1px solid rgba(96,106,128,.2)
}

.SettingsInboxStranger-label {
    font-size: 14px;
    padding-left: 12px
}

.SettingsInboxStranger-label h3 {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #444;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-weight: 400;
    height: 21px;
    line-height: 21px;
    margin: 0
}

html[data-theme=dark] .SettingsInboxStranger-label h3 {
    color: gray
}

.SettingsInboxStranger-label p {
    color: #8590a6;
    margin: 5px 0 0
}

html[data-theme=dark] .SettingsInboxStranger-label p {
    color: #606a80
}

.SettingsInboxStranger-help {
    height: 18px;
    margin-left: 6px
}

.SettingsInbox {
    border-top: 1px solid #ebebeb
}

.SettingsInbox .ExpandableField-content {
    padding-top: 0
}

html[data-theme=dark] .SettingsInbox {
    border-top: 1px solid #444
}

.SettingsInviteMsg .ExpandableField-content {
    padding-top: 0
}

.SettingsVoteUp .ExpandableField-content {
    padding-top: 0
}

.Switch {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    display: inline-block;
    width: 48px;
    height: 28px;
    line-height: 28px;
    background-color: #ebebeb;
    border-radius: 20px;
    transition: all .3s cubic-bezier(.35,0,.25,1);
    cursor: pointer;
    outline: none
}

.Switch:after {
    position: absolute;
    left: 4px;
    top: 3px;
    content: " ";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.26);
    transition: left .3s cubic-bezier(.35,0,.25,1)
}

html[data-theme=dark] .Switch:after {
    background: #ebebeb;
    box-shadow: 0 1px 3px rgba(0,0,0,.26)
}

.Switch:checked {
    background: #0084ff
}

.Switch:checked:after {
    left: 22px
}

html[data-theme=dark] .Switch:checked {
    background: #3a76d0
}

.Switch:disabled {
    cursor: no-drop
}

.Switch:disabled:after {
    background: #d3d3d3
}

html[data-theme=dark] .Switch:disabled:after {
    background: #444
}

.Switch:disabled.Switch--checked {
    opacity: .4
}

html[data-theme=dark] .Switch {
    border: 1px solid #2e2e2e;
    background-color: #2e2e2e
}

.SettingsFollow .ExpandableField-content {
    padding-top: 0
}

.SettingsFollow-help {
    color: #0084ff;
    margin-left: 6px
}

html[data-theme=dark] .SettingsFollow-help {
    color: #3a76d0
}

.SettingsFollow-questionAnswered .SelectorField-selectWrap {
    width: 178px
}

.SettingsFollow-questionAnsweredTarget {
    min-width: 190px
}

.SettingsFollow-coupon {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 10px 20px 10px 0
}

.SettingsFollow-couponTitle h4,.SettingsFollow-couponTitle p {
    font-size: 14px;
    height: 21px;
    line-height: 21px;
    margin: 0
}

.SettingsFollow-couponTitle h4 {
    color: #1a1a1a;
    font-weight: 400
}

html[data-theme=dark] .SettingsFollow-couponTitle h4 {
    color: #999
}

.SettingsFollow-couponTitle p {
    color: #8590a6;
    padding-top: 6px
}

html[data-theme=dark] .SettingsFollow-couponTitle p {
    color: #606a80
}

.SettingsEmail {
    border-bottom: 1px solid #ebebeb
}

.SettingsEmail .ExpandableField-content {
    padding-bottom: 20px
}

html[data-theme=dark] .SettingsEmail {
    border-bottom: 1px solid #444
}

.SettingsEmail-checkbox {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 21px;
    padding: 10px 0
}

.SettingsEmail-checkboxLabel {
    color: #444;
    font-size: 14px;
    padding-left: 18px
}

html[data-theme=dark] .SettingsEmail-checkboxLabel {
    color: gray
}

.SettingsNotification {
    padding-bottom: 40px
}

.SettingsNotification .ExpandableField {
    padding-left: 0
}

.SettingsNotification .ExpandableField-titleView {
    padding-left: 18px
}

.SettingsNotification .ExpandableField-content {
    margin-left: 40px
}

.SettingsNotification .Settings-checkbox {
    margin: 0
}

.SettingsNotification .Settings-checkbox:checked {
    background: #0084ff
}

html[data-theme=dark] .SettingsNotification .Settings-checkbox:checked {
    background: #3a76d0
}

.UserPageItem {
    background: rgba(133,144,166,.08);
    border-radius: 3px;
    box-sizing: border-box;
    height: 46px;
    overflow: hidden;
    padding: 8px 10px;
    width: 102px
}

.UserPageItem,.UserPageItem .UserPageItem-link {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.UserPageItem .UserPageItem-link {
    text-decoration: none
}

.UserPageItem .UserPageItem-name {
    color: #444;
    font-size: 14px;
    font-weight: 600;
    height: 21px;
    overflow: hidden;
    padding-left: 10px
}

html[data-theme=dark] .UserPageItem .UserPageItem-name {
    color: gray
}

.UserPageItem .UserPageItem-unblock {
    color: #8590a6
}

html[data-theme=dark] .UserPageItem .UserPageItem-unblock {
    color: #606a80
}

.UserPageItem--withButton {
    background: #fff;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 60px;
    width: 212px
}

.UserPageItem--withButton .UserPageItem-name {
    padding-left: 14px
}

html[data-theme=dark] .UserPageItem--withButton {
    background: #1a1a1a
}

html[data-theme=dark] .UserPageItem {
    background: rgba(96,106,128,.08)
}

.UserPageContent {
    float: left;
    margin-right: 10px;
    min-height: 200px;
    width: 434px
}

.UserPageContent .UserPageItem {
    float: left;
    margin-bottom: 10px
}

.UserPageContent .UserPageItem:nth-child(odd) {
    margin-right: 10px
}

.UserPage {
    position: relative;
    padding-bottom: 10px
}

.UserPage .UserPage-pagerLeft,.UserPage .UserPage-pagerRight {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fdfdfd;
    border-radius: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 35px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 35px;
    position: absolute;
    top: 84px;
    width: 35px
}

html[data-theme=dark] .UserPage .UserPage-pagerLeft,html[data-theme=dark] .UserPage .UserPage-pagerRight {
    background: #2e2e2e
}

.UserPage .UserPage-pagerLeft {
    left: 0
}

.UserPage .UserPage-pagerRight {
    right: 0
}

.UserPage footer {
    color: #8590a6;
    font-size: 14px;
    height: 21px;
    line-height: 21px;
    padding-top: 12px;
    text-align: center
}

html[data-theme=dark] .UserPage footer {
    color: #606a80
}

.UserPage-content {
    height: 200px;
    margin-left: 50px;
    overflow: hidden;
    width: 434px
}

.UserPage-contentWindow {
    height: 200px;
    width: 888px
}

.BlockedUsers {
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb
}

.BlockedUsers .ExpandableField-content {
    border-top: 0 none;
    padding-top: 0
}

.BlockedUsers .UserPage {
    margin: 0 10px 0 -6px
}

html[data-theme=dark] .BlockedUsers {
    border-top: 1px solid #444;
    border-bottom: 1px solid #444
}

.BlockedUsers-descrUsers {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 12px
}

.BlockedUsers-descrUsers .UserPageItem {
    margin-right: 10px
}

.BlockedFollowees {
    border-bottom: 1px solid #ebebeb
}

.BlockedFollowees .ExpandableField-content {
    border-top: 0 none;
    padding-top: 0
}

.BlockedFollowees .UserPage {
    margin: 0 10px 0 -6px
}

html[data-theme=dark] .BlockedFollowees {
    border-bottom: 1px solid #444
}

.BlockedFollowees-descrUsers {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 12px
}

.BlockedFollowees-descrUsers .UserPageItem {
    margin-right: 10px
}

.BlockedTopics {
    border-bottom: 1px solid #ebebeb
}

.BlockedTopics .ExpandableField-content {
    border-top: 0 none;
    padding-top: 0
}

.BlockedTopics .Tag {
    font-size: 13px;
    margin-right: 6px
}

html[data-theme=dark] .BlockedTopics {
    border-bottom: 1px solid #444
}

.BlockedTopics-descr {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 12px
}

.BlockedTopics-content section {
    border-top: 1px solid #ebebeb;
    margin-left: 22px;
    padding: 12px
}

html[data-theme=dark] .BlockedTopics-content section {
    border-top: 1px solid #444
}

.BlockedTopics-content h4 {
    color: #444;
    font-size: 15px;
    font-weight: 400;
    height: 21px;
    line-height: 21px
}

html[data-theme=dark] .BlockedTopics-content h4 {
    color: gray
}

.BlockedTopics-content .Tag {
    height: 34px;
    line-height: 34px;
    margin-top: 12px
}

.BlockedTopics-none {
    color: #8590a6;
    font-size: 14px;
    padding: 18px 0 8px 20px
}

html[data-theme=dark] .BlockedTopics-none {
    color: #606a80
}

.SettingsFilter {
    padding-bottom: 40px
}

.SettingsFilter-empty {
    color: #8590a6;
    font-size: 14px;
    margin: 0;
    padding: 0 0 20px 40px
}

html[data-theme=dark] .SettingsFilter-empty {
    color: #606a80
}

.SettingsPrivacy {
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    margin-bottom: 40px
}

.SettingsPrivacy .ExpandableField-content {
    margin-left: 22px
}

html[data-theme=dark] .SettingsPrivacy {
    border-top: 1px solid #444;
    border-bottom: 1px solid #444
}

.SettingPrivacySwitch {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 20px 0 0
}

.SettingPrivacyContent {
    padding-left: 22px
}

.SettingPrivacyContent div:first-child {
    color: #8590a6;
    width: 424px;
    margin: 26px 0 12px
}

html[data-theme=dark] .SettingPrivacyContent div:first-child {
    color: #606a80
}

.SettingPrivacyCard {
    width: 366px;
    height: 75px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ebebeb;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding-left: 24px;
    margin-bottom: 10px
}

.SettingPrivacyCard img {
    border-radius: 2px;
    width: 38px;
    height: 38px;
    margin-right: 14px
}

.SettingPrivacyCard span {
    font-weight: 600;
    font-synthesis: style;
    color: #646464
}

html[data-ios] .SettingPrivacyCard span {
    font-weight: 500
}

html[data-android] .SettingPrivacyCard span {
    font-weight: 700
}

html[data-theme=dark] .SettingPrivacyCard span {
    color: #999
}

html[data-theme=dark] .SettingPrivacyCard {
    background: #1a1a1a;
    border: 1px solid #444
}

.SettingPrivacySwitchContainer {
    padding-left: 40px
}

.SettingPrivacySwitchContainer .SettingPrivacySwitch {
    padding: 20px 20px 20px 0;
    border-top: 1px solid #ebebeb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

html[data-theme=dark] .SettingPrivacySwitchContainer .SettingPrivacySwitch {
    border-top: 1px solid #444
}

.WatermarkPreferenceExamples {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.WatermarkPreferenceExamples-bg,.WatermarkPreferenceExamples-card {
    height: 160px;
    overflow: hidden;
    position: relative;
    width: 240px
}

.WatermarkPreferenceExamples-signature {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    bottom: 8px;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 13px;
    position: absolute;
    right: 10px;
    z-index: 1
}

html[data-theme=dark] .WatermarkPreferenceExamples-signature {
    color: #1a1a1a
}

.WatermarkPreferenceExamples-username {
    display: inline-block;
    font-size: 12px;
    font-weight: 200;
    max-width: 140px;
    overflow: hidden;
    padding-left: 4px;
    text-overflow: ellipsis;
    white-space: nowrap
}

.WatermarkPreferenceExamples-status {
    color: #8590a6;
    font-size: 14px;
    height: 21px;
    line-height: 21px;
    margin-top: 12px;
    text-align: center
}

html[data-theme=dark] .WatermarkPreferenceExamples-status {
    color: #606a80
}

.WatermarkPreference {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .WatermarkPreference {
    border-bottom: 1px solid #444
}

.WatermarkPreference-content {
    font-size: 14px;
    margin-left: 40px;
    padding: 12px 20px 6px 0
}

.WatermarkPreference-content header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.WatermarkPreference-content h4 {
    color: #1a1a1a;
    font-size: 15px;
    height: 21px;
    line-height: 21px;
    margin: 0
}

html[data-theme=dark] .WatermarkPreference-content h4 {
    color: #999
}

.WatermarkPreference-content p {
    color: #646464;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    padding: 22px 0 14px
}

html[data-theme=dark] .WatermarkPreference-content p {
    color: #999
}

.OpposeReasonPreference {
    border-bottom: 1px solid #ebebeb;
    padding: 20px;
    position: relative
}

.OpposeReasonPreference-title {
    color: #1a1a1a;
    font-size: 15px;
    height: 21px;
    line-height: 21px;
    margin: 0;
    padding-bottom: 3px
}

html[data-theme=dark] .OpposeReasonPreference-title {
    color: #999
}

.OpposeReasonPreference-descr {
    color: #8590a6;
    font-size: 14px;
    line-height: 1.5
}

html[data-theme=dark] .OpposeReasonPreference-descr {
    color: #606a80
}

.OpposeReasonPreference .SettingsSwitch {
    position: absolute;
    right: 20px;
    top: 30px
}

html[data-theme=dark] .OpposeReasonPreference {
    border-bottom: 1px solid #444
}

.SingleCheckRadio {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    color: #1a1a1a
}

html[data-theme=dark] .SingleCheckRadio {
    color: #999
}

.SingleCheckRadio-input {
    visibility: none;
    opacity: 0;
    margin-right: 8px
}

.SingleCheckRadio-input:checked+label:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;
    -webkit-transform: translateY(-56%);
    transform: translateY(-56%);
    height: 10px;
    width: 10px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #0084ff;
    background-color: #0084ff
}

html[data-theme=dark] .SingleCheckRadio-input:checked+label:before {
    border: 2px solid #1a1a1a;
    box-shadow: 0 0 0 2px #3a76d0;
    background-color: #3a76d0
}

.SingleCheckRadio-label {
    position: relative
}

.SingleCheckRadio-label:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;
    -webkit-transform: translateY(-56%);
    transform: translateY(-56%);
    height: 10px;
    width: 10px;
    box-sizing: border-box;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #d3d3d3
}

html[data-theme=dark] .SingleCheckRadio-label:before {
    box-shadow: 0 0 0 2px #2e2e2e
}

.SingleCheckRadio-des {
    color: #8590a6
}

html[data-theme=dark] .SingleCheckRadio-des {
    color: #606a80
}

.WallEPreference {
    border-bottom: 1px solid #ebebeb
}

html[data-theme=dark] .WallEPreference {
    border-bottom: 1px solid #444
}

.WallEPreference-main {
    font-size: 14px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-right: 18px
}

.WallEPreference-radios {
    display: block;
    margin-left: 18px;
    border-top: 1px solid #ebebeb
}

html[data-theme=dark] .WallEPreference-radios {
    border-top: 1px solid #444
}

.WallEPreference-radios--collapse {
    display: none
}

.WallEPreference-radio {
    margin-top: 20px;
    margin-bottom: 20px
}

.SettingsPreference {
    padding-bottom: 40px
}

.SettingsPreference .ExpandableField {
    padding-left: 0
}

.SettingsPreference .ExpandableField-titleView {
    padding-left: 18px
}

.RedeemCoupon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 688px;
    padding: 40px 100px
}

.RedeemCoupon-title {
    font-size: 24px;
    color: #444
}

html[data-theme=dark] .RedeemCoupon-title {
    color: gray
}

.RedeemCoupon-input {
    margin-top: 32px;
    margin-bottom: 20px;
    -ms-flex-item-align: stretch;
    -ms-grid-row-align: stretch;
    align-self: stretch
}

.RedeemCoupon-error {
    height: 21px;
    margin: 12px 0;
    text-align: right;
    color: #f1403c
}

html[data-theme=dark] .RedeemCoupon-error {
    color: #b7302d
}

.RedeemCoupon-confirm {
    width: 220px
}

.uploadImage-container {
    padding: 0 24px 0 16px;
    height: 64px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box
}

.uploadImage-container ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.uploadImage-container ul li {
    margin-left: 8px;
    position: relative
}

.uploadImage-container ul li,.uploadImage-container ul li img {
    width: 64px;
    height: 64px;
    border-radius: 4px
}

.uploadImage-container ul li em {
    padding: 0 4px;
    background: #fff;
    opacity: .6;
    border-radius: 2px;
    font-size: 12px;
    color: #1a1a1a;
    position: absolute;
    right: 4px;
    bottom: 4px;
    font-style: normal
}

html[data-theme=dark] .uploadImage-container ul li em {
    background: #1a1a1a;
    color: #999
}

.uploadImage-container ul li .uploadImage-cancel {
    position: absolute;
    right: 4px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    text-align: center;
    padding-top: 5px;
    box-sizing: border-box;
    cursor: pointer
}

.uploadImage-container ul li .uploadImage-cancel:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    opacity: .5;
    top: 0;
    left: 0;
    border-radius: 50%
}

html[data-theme=dark] .uploadImage-container ul li .uploadImage-cancel:before {
    background: #999
}

.uploadImage-container ul li .uploadImage-cancel svg {
    vertical-align: top;
    position: relative;
    z-index: 1
}

.uploadImage-container .uploadImage-upload {
    position: relative;
    width: 64px;
    overflow: hidden
}

.uploadImage-container .uploadImage-upload>span {
    width: 64px;
    height: 64px;
    box-sizing: border-box;
    border: 2px dashed #bfbfbf;
    border-radius: 4px;
    font-size: 40px;
    display: block;
    color: #bfbfbf;
    cursor: pointer;
    text-align: center;
    font-weight: 200;
    line-height: 54px
}

html[data-theme=dark] .uploadImage-container .uploadImage-upload>span {
    border: 2px dashed gray;
    color: gray
}

.uploadImage-container .uploadImage-fileInput {
    position: absolute;
    width: 64px;
    height: 64px;
    left: 0;
    top: 0
}

.uploadImage-container .Editable-imageUploader {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background: #fff;
    width: 60px
}

html[data-theme=dark] .uploadImage-container .Editable-imageUploader {
    background: #1a1a1a
}

.uploadImage-container .Editable-imageUploader-statusText {
    font-size: 12px;
    text-align: center;
    line-height: 18px
}

.uploadImage-container .Editable-imageUploader-retry {
    display: none
}

.uploadVideo-container {
    margin-left: 24px;
    overflow: hidden;
    width: 190px;
    height: 105px;
    box-sizing: border-box;
    position: relative;
    border-radius: 4px
}

.uploadVideo-container .uploadVideo-content,.uploadVideo-container .uploadVideo-plugin {
    margin: 0;
    width: 190px;
    height: 105px
}

.uploadVideo-container .Editable-videoUploader-status {
    font-size: 16px
}

.uploadVideo-container .Editable-videoUploader-size {
    font-size: 12px
}

.uploadVideo-container .RichText-video {
    margin: 0
}

.uploadVideo-container .VideoCard {
    border: 0;
    box-shadow: 0 0 0
}

.uploadVideo-container .VideoCard-play-button,.uploadVideo-container .VideoCard-play-button svg {
    width: 48px!important;
    height: 48px!important
}

.uploadVideo-container .uploadVideo-cancel {
    position: absolute;
    right: 4px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    text-align: center;
    padding-top: 5px;
    box-sizing: border-box;
    cursor: pointer
}

.uploadVideo-container .uploadVideo-cancel:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    opacity: .5;
    top: 0;
    left: 0;
    border-radius: 50%
}

html[data-theme=dark] .uploadVideo-container .uploadVideo-cancel:before {
    background: #999
}

.uploadVideo-container .uploadVideo-cancel svg {
    vertical-align: top;
    position: relative;
    z-index: 1
}

.writePin {
    position: relative
}

.writePin .writePin-contentTitle svg {
    vertical-align: text-bottom;
    margin-right: 4px;
    fill: #8590a6;
    position: relative;
    top: -1px
}

html[data-theme=dark] .writePin .writePin-contentTitle svg {
    fill: #606a80
}

.writePin-menu {
    background: #1a1a1a;
    bottom: 0;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: opacity .3s,bottom 0s .3s;
    z-index: 101
}

html[data-theme=dark] .writePin-menu {
    background: #999
}

.writePin-menu-translate {
    opacity: .6
}

.writePin-content {
    position: relative;
    z-index: 102;
    background: #fff
}

html[data-theme=dark] .writePin-content {
    background: #1a1a1a
}

.writePin-sign-arrow {
    border: 8px solid transparent;
    border-bottom-color: #ebebeb;
    margin-top: -8px;
    border-top-width: 0;
    left: 358px;
    top: 1px;
    z-index: 103
}

.writePin-sign-arrow,.writePin-sign-arrow:after {
    display: block;
    width: 0;
    height: 0;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute
}

.writePin-sign-arrow:after {
    border: 8px solid transparent;
    left: 0;
    top: 0;
    content: "";
    border-top-width: 0;
    margin-top: 1px;
    border-bottom-color: #fff
}

html[data-theme=dark] .writePin-sign-arrow:after {
    border-bottom-color: #1a1a1a
}

html[data-theme=dark] .writePin-sign-arrow {
    border-bottom-color: #444
}

.writePin-contentTitle {
    padding: 18px 24px;
    line-height: 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 58px;
    box-sizing: border-box;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.writePin-contentTitle span:nth-child(2) {
    color: #8590a6;
    font-size: 15px;
    cursor: pointer
}

html[data-theme=dark] .writePin-contentTitle span:nth-child(2) {
    color: #606a80
}

.writePin-contentWrite {
    border-top: 1px solid #f6f6f6;
    padding: 12px 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative
}

.writePin-contentWrite .writePin-user {
    margin-right: 12px
}

.writePin-contentWrite .writePin-content-editor {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    max-height: 146px;
    overflow: auto
}

.writePin-contentWrite .public-DraftEditor-content {
    min-height: 60px;
    width: 600px
}

.writePin-contentWrite .public-DraftEditor-content a.member_mention,.writePin-contentWrite .public-DraftEditor-content a.UserLink-link {
    color: #175199
}

.writePin-contentWrite .public-DraftEditor-content a.member_mention:hover,.writePin-contentWrite .public-DraftEditor-content a.UserLink-link:hover,html[data-theme=dark] .writePin-contentWrite .public-DraftEditor-content a.member_mention:hover,html[data-theme=dark] .writePin-contentWrite .public-DraftEditor-content a.UserLink-link:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .writePin-contentWrite .public-DraftEditor-content a.member_mention,html[data-theme=dark] .writePin-contentWrite .public-DraftEditor-content a.UserLink-link {
    color: #175199
}

.writePin-contentWrite .public-DraftEditorPlaceholder-inner {
    color: #8590a6
}

html[data-theme=dark] .writePin-contentWrite .public-DraftEditorPlaceholder-inner {
    color: #606a80
}

html[data-theme=dark] .writePin-contentWrite {
    border-top: 1px solid #2e2e2e
}

.writePin-content-status {
    position: static
}

.writePin-contentWrite-disabled:before {
    background: #fff;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11
}

html[data-theme=dark] .writePin-contentWrite-disabled:before {
    background: #1a1a1a
}

.writePin-link-status,.writePin-uploadImage-status,.writePin-uploadVideo-status {
    display: none;
    transition: all .3s ease-in
}

.writePin-link-loading {
    height: 60px
}

.writePin-cancel {
    position: absolute;
    right: -8px;
    top: -8px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    vertical-align: middle;
    cursor: pointer
}

.writePin-cancel:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    opacity: .5;
    top: 0;
    left: 0;
    border-radius: 50%
}

html[data-theme=dark] .writePin-cancel:before {
    background: #999
}

.writePin-cancel svg {
    position: relative;
    z-index: 1;
    top: -1px
}

.writePin-link {
    margin: 0 24px;
    border: 1px solid #ebebeb;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    position: relative
}

html[data-theme=dark] .writePin-link {
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    border: 1px solid #444
}

.writePin-linkBox {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 10px;
    width: 624px;
    position: relative;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: auto;
    white-space: normal;
    cursor: pointer
}

.writePin-linkBox .writePin-linkBoxContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around
}

.writePin-linkBox .writePin-linkBoxContent span:first-child {
    font-size: 18px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 54px
}

.writePin-linkBox .writePin-linkBoxContentThumbnail {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 72px;
    height: 72px;
    border-radius: 4px;
    -o-object-fit: cover;
    object-fit: cover
}

.writePin-buttonMenu {
    padding: 24px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.writePin-buttonMenu .writePin-uploadButton {
    color: #0084ff
}

html[data-theme=dark] .writePin-buttonMenu .writePin-uploadButton {
    color: #3a76d0
}

.writePin-buttonMenu .writePin-upload {
    position: relative
}

.writePin-buttonMenu .writePin-upload-disabled:before {
    background: #fff;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    opacity: .5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11
}

html[data-theme=dark] .writePin-buttonMenu .writePin-upload-disabled:before {
    background: #1a1a1a
}

.writePin-fileInput {
    display: none;
    opacity: 0
}

.writePin-modalSucsessTip {
    background: url(https://static.zhihu.com/heifetz/pin-guide@2x.68639e91d0214a6a58ea.png) no-repeat bottom;
    background-size: 224px 127px;
    padding-bottom: 162px;
    color: #444;
    line-height: 24px;
    width: 317px;
    margin: 0 auto 48px;
    text-align: center
}

.writePin-modalSucsessTip a {
    color: #0084ff
}

html[data-theme=dark] .writePin-modalSucsessTip a {
    color: #3a76d0
}

html[data-theme=dark] .writePin-modalSucsessTip {
    color: gray
}

.writePin-pinDetail {
    text-align: center
}

.writePin-pinDetail a {
    display: inline-block;
    border: 1px solid #0084ff;
    background-color: #0084ff;
    padding: 0 16px;
    width: 220px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    color: #fff
}

html[data-theme=dark] .writePin-pinDetail a {
    border: 1px solid #3a76d0;
    background-color: #3a76d0;
    color: #1a1a1a
}

.writePin-editorCount {
    padding-right: 20px
}

.writePin-editorCount.writePin-editorCountError {
    color: #f1403c
}

html[data-theme=dark] .writePin-editorCount.writePin-editorCountError {
    color: #b7302d
}

.writePin-placeHolder {
    width: 623px;
    height: 83px;
    padding-left: 10px;
    overflow: hidden
}

.writePin-placeHolder svg {
    margin-top: -46px
}

.WritePinV2-content {
    border: 1px solid #f0f2f7;
    border-radius: 3px;
    padding: 12px
}

html[data-theme=dark] .WritePinV2-content {
    border: 1px solid #2e2e2e
}

.WritePinV2-contentWrite .public-DraftEditor-content {
    min-height: 200px;
    width: 100%
}

.WritePinV2-contentWrite .public-DraftEditor-content a.member_mention,.WritePinV2-contentWrite .public-DraftEditor-content a.UserLink-link {
    color: #175199
}

.WritePinV2-contentWrite .public-DraftEditor-content a.member_mention:hover,.WritePinV2-contentWrite .public-DraftEditor-content a.UserLink-link:hover,html[data-theme=dark] .WritePinV2-contentWrite .public-DraftEditor-content a.member_mention:hover,html[data-theme=dark] .WritePinV2-contentWrite .public-DraftEditor-content a.UserLink-link:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .WritePinV2-contentWrite .public-DraftEditor-content a.member_mention,html[data-theme=dark] .WritePinV2-contentWrite .public-DraftEditor-content a.UserLink-link {
    color: #175199
}

.WritePinV2-contentWrite .public-DraftEditorPlaceholder-inner {
    color: #8590a6
}

html[data-theme=dark] .WritePinV2-contentWrite .public-DraftEditorPlaceholder-inner {
    color: #606a80
}

.WritePinV2-uploadImage {
    padding: 16px 0 0
}

.WritePinV2-uploadImage ul li {
    height: 48px;
    margin-left: 7px;
    width: 48px
}

.WritePinV2-uploadImage ul li:first-child {
    margin-left: 0
}

.WritePinV2-uploadImage ul li img {
    height: 48px;
    width: 48px
}

.WritePinV2-uploadImage .uploadImage-upload {
    width: 48px
}

.WritePinV2-uploadImage .uploadImage-upload>span {
    height: 48px;
    width: 48px;
    line-height: 38px
}

.WritePinV2-uploadImage .uploadImage-fileInput {
    height: 48px;
    width: 48px
}

.WritePinV2-uploadImage .Editable-imageUploader {
    width: 48px
}

.WritePinV2-uploadVideo {
    margin: 16px 0 0
}

.WritePinV2-cancelLink {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    right: -8px;
    top: -8px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer
}

.WritePinV2-cancelLink:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    opacity: .5;
    top: 0;
    left: 0;
    border-radius: 50%
}

html[data-theme=dark] .WritePinV2-cancelLink:before {
    background: #999
}

.WritePinV2-cancelLink svg {
    position: relative;
    z-index: 1
}

html[data-theme=dark] .WritePinV2-cancelLink {
    color: #1a1a1a
}

.WritePinV2-link {
    border: 1px solid #ebebeb;
    border-radius: 4px;
    margin-top: 12px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    position: relative
}

html[data-theme=dark] .WritePinV2-link {
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    border: 1px solid #444
}

.WritePinV2-linkBox {
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 12px;
    width: 100%;
    position: relative;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: auto;
    white-space: normal;
    cursor: pointer
}

.WritePinV2-linkBox .WritePinV2-linkBoxContent {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding: 12px 16px 12px 0;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: distribute;
    justify-content: space-around
}

.WritePinV2-linkBox .WritePinV2-linkBoxContent span:first-child {
    font-size: 18px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-height: 54px
}

.WritePinV2-linkBox .WritePinV2-linkBoxContent .WritePinV2-linkBoxContentSubTitle {
    color: #8590a6;
    font-size: 15px
}

html[data-theme=dark] .WritePinV2-linkBox .WritePinV2-linkBoxContent .WritePinV2-linkBoxContentSubTitle {
    color: #606a80
}

.WritePinV2-linkBox .WritePinV2-linkBoxContentThumbnail {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 72px;
    height: 72px;
    border-radius: 4px;
    -o-object-fit: cover;
    object-fit: cover
}

.WritePinV2-buttonMenu {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 16px
}

.WritePinV2-buttonMenu .WritePinV2-uploadButton {
    color: #175199
}

.WritePinV2-buttonMenu .WritePinV2-uploadButton .Zi {
    margin-right: 3px
}

html[data-theme=dark] .WritePinV2-buttonMenu .WritePinV2-uploadButton {
    color: #175199
}

.WritePinV2-buttonMenu .WritePinV2-upload {
    position: relative
}

.WritePinV2-buttonMenu .WritePinV2-upload-disabled:before {
    background: #fff;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    opacity: .5;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 11
}

html[data-theme=dark] .WritePinV2-buttonMenu .WritePinV2-upload-disabled:before {
    background: #1a1a1a
}

.WritePinV2-fileInput {
    display: none;
    opacity: 0
}

.WritePinV2-modalSucsessTip {
    background: url(https://static.zhihu.com/heifetz/pin-guide@2x.68639e91d0214a6a58ea.png) no-repeat bottom;
    background-size: 224px 127px;
    padding-bottom: 162px;
    color: #444;
    line-height: 24px;
    width: 317px;
    margin: 0 auto 48px;
    text-align: center
}

.WritePinV2-modalSucsessTip a {
    color: #0084ff
}

html[data-theme=dark] .WritePinV2-modalSucsessTip a {
    color: #3a76d0
}

html[data-theme=dark] .WritePinV2-modalSucsessTip {
    color: gray
}

.WritePinV2-pinDetail {
    text-align: center
}

.WritePinV2-pinDetail a {
    display: inline-block;
    border: 1px solid #0084ff;
    background-color: #0084ff;
    padding: 0 16px;
    width: 220px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 32px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
    color: #fff
}

html[data-theme=dark] .WritePinV2-pinDetail a {
    border: 1px solid #3a76d0;
    background-color: #3a76d0;
    color: #1a1a1a
}

.WritePinV2-editorCountError {
    color: #f1403c
}

html[data-theme=dark] .WritePinV2-editorCountError {
    color: #b7302d
}

.WritePinV2-placeHolder {
    box-sizing: border-box;
    width: 456px;
    height: 83px;
    padding: 0 12px;
    overflow: hidden
}

.WritePinV2-placeHolder svg {
    margin-top: -46px
}

.GlobalWrite-nav {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.GlobalWrite-nav,.GlobalWrite-navItem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.GlobalWrite-navItem {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 23px
}

.GlobalWrite-navItem:hover .GlobalWrite-navTitle,html[data-theme=dark] .GlobalWrite-navItem:hover .GlobalWrite-navTitle {
    color: #175199
}

.GlobalWrite-navIcon {
    color: #8590a6;
    margin-bottom: 6px
}

html[data-theme=dark] .GlobalWrite-navIcon {
    color: #606a80
}

.GlobalWrite-navTitle {
    color: #444;
    font-size: 16px
}

html[data-theme=dark] .GlobalWrite-navTitle {
    color: gray
}

.GlobalWrite-draft {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-top: 1px solid #f0f2f7;
    color: #8590a6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 48px;
    margin: 0 20px
}

.GlobalWrite-draft .GlobalSideBar-navLink {
    margin: 0 -20px;
    width: 100%
}

html[data-theme=dark] .GlobalWrite-draft {
    border-top: 1px solid #2e2e2e;
    color: #606a80
}

.GlobalSideBar-categoryList {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 20px 0 -5px;
    padding: 0 10px
}

.GlobalSideBar-categoryItem {
    width: 33%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 25px
}

.GlobalSideBar-categoryItem .Button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    color: currentColor
}

.GlobalSideBar-categoryItem a:hover .GlobalSideBar-categoryLabel {
    color: currentColor
}

.GlobalSideBar-categoryLabel {
    font-size: 15px;
    color: #8590a6
}

html[data-theme=dark] .GlobalSideBar-categoryLabel {
    color: #606a80
}

.GlobalSideBar-categoryIcon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    width: 25px;
    height: 25px;
    margin-bottom: 10px
}

.GlobalSideBar-navList {
    width: 100%;
    padding: 8px 0
}

.GlobalSideBar-navLink {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 20px;
    height: 40px;
    overflow: hidden
}

.GlobalSideBar-navLink:hover {
    background: #f6f6f6
}

html[data-theme=dark] .GlobalSideBar-navLink:hover {
    background: #2e2e2e
}

.GlobalSideBar-navIcon {
    fill: #8590a6
}

html[data-theme=dark] .GlobalSideBar-navIcon {
    fill: #606a80
}

.GlobalSideBar-navText {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin: 0 10px;
    text-align: left
}

.GlobalSideBar-navNumber {
    padding: 6px 10px;
    border-radius: 2px;
    background: #f6f6f6;
    color: #8590a6;
    font-size: 12px
}

.GlobalSideBar-navLink:hover .GlobalSideBar-navNumber {
    background: #fff
}

html[data-theme=dark] .GlobalSideBar-navLink:hover .GlobalSideBar-navNumber {
    background: #1a1a1a
}

html[data-theme=dark] .GlobalSideBar-navNumber {
    background: #2e2e2e;
    color: #606a80
}

.GlobalSideBar {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px
}

.GlobalSideBar .Footer {
    padding: 0 0 0 5px
}

.TopstoryHeader {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 58px;
    padding: 0 20px
}

.TopstoryHeader a {
    text-decoration: none
}

.TopstoryHeader-rightItem {
    color: #8590a6;
    transition: color .2s ease-in
}

.TopstoryHeader-rightItem:hover,html[data-theme=dark] .TopstoryHeader-rightItem:hover {
    color: #175199
}

html[data-theme=dark] .TopstoryHeader-rightItem {
    color: #606a80
}

.TopstoryHeader-navItem {
    display: inline-block;
    transition: color .2s ease-in;
    font-size: 16px;
    color: #1a1a1a
}

.TopstoryHeader-navItem .Icon {
    margin-right: 8px
}

.TopstoryHeader-navItem:hover {
    color: #175199;
    cursor: pointer
}

html[data-theme=dark] .TopstoryHeader-navItem:hover {
    color: #175199
}

.TopstoryHeader-navItem+.TopstoryHeader-navItem {
    margin-left: 40px
}

html[data-theme=dark] .TopstoryHeader-navItem {
    color: #999
}

.TopstoryHeader-navItemArticle svg,.TopstoryHeader-pinIcon {
    position: relative;
    top: -1px
}

.TopstoryHeader-pinIcon {
    vertical-align: text-bottom;
    fill: #8590a6;
    margin-right: 4px
}

html[data-theme=dark] .TopstoryHeader-pinIcon {
    fill: #606a80
}

.LiveCourseItem-cover {
    position: relative;
    display: block;
    width: 100%;
    height: 170px;
    border-radius: 4px;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    margin-bottom: 10px
}

.LiveCourseItem-cover img {
    width: 100%;
    position: absolute;
    top: 70%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.EventcardItem-cover {
    position: relative;
    display: block;
    width: 100%;
    height: 160px;
    border-radius: 4px;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    margin-bottom: 10px
}

.EventcardItem-cover img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.EventcardItem-content {
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 27px
}

.FeedSource-firstline {
    margin-bottom: 8px;
    color: #8590a6
}

.FeedSource-firstline a {
    color: inherit
}

.FeedSource-firstline .UserLink-badge {
    margin-right: .3em
}

html[data-theme=dark] .FeedSource-firstline {
    color: #606a80
}

.FeedSource-byline {
    margin-bottom: 14px
}

.Feed .ColumnItem-meta,.Feed .RoundtableItem-meta {
    margin-top: 12px
}

.ActionCard-topic {
    position: relative;
    display: inline-block;
    vertical-align: top;
    padding: 20px 20px 4px;
    text-align: center;
    width: 160px;
    box-sizing: border-box
}

.ActionCard-topic:not(:first-child):after {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -43px;
    display: block;
    content: "";
    height: 86px;
    width: 1px;
    background-color: #ebebeb
}

html[data-theme=dark] .ActionCard-topic:not(:first-child):after {
    background-color: #444
}

.ActionCard-topic-name {
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.ActionCard-topic-reason {
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #8590a6;
    font-size: 14px
}

html[data-theme=dark] .ActionCard-topic-reason {
    color: #606a80
}

.ActionCard-topic-button {
    height: 24px;
    line-height: 24px!important;
    font-size: 13px;
    width: 96px
}

.ActionCard-dot:after {
    margin: 0 5px;
    content: "\B7"
}

.ActionCard-title {
    color: #8590a6;
    margin-right: 8px
}

html[data-theme=dark] .ActionCard-title {
    color: #606a80
}

.Advert-head {
    margin-bottom: 10px
}

.Advert-metaText {
    color: #8590a6;
    line-height: 1
}

html[data-theme=dark] .Advert-metaText {
    color: #606a80
}

.Advert-content {
    margin-top: 10px
}

.Advert-brand,.Advert-content--cover,.Advert-content--question {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Advert-brand {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8590a6;
    line-height: 24px
}

html[data-theme=dark] .Advert-brand {
    color: #606a80
}

.Advert-brand-avatar .Avatar {
    vertical-align: middle
}

.Advert-brand-name {
    margin-left: 12px
}

.Advert-brand-name--hasExtra {
    color: #1a1a1a;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Advert-brand-name--hasExtra {
    font-weight: 500
}

html[data-android] .Advert-brand-name--hasExtra {
    font-weight: 700
}

html[data-theme=dark] .Advert-brand-name--hasExtra {
    color: #999
}

.Advert-cover {
    display: block;
    position: relative;
    margin-top: 12px;
    width: 100%;
    height: 150px;
    border-radius: 4px;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.Advert-cover img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.Advert--card-cover {
    width: 200px;
    height: 112px;
    margin-top: 4px;
    border-radius: 4px;
    overflow: hidden;
    background: #999;
    vertical-align: top
}

html[data-theme=dark] .Advert--card-cover {
    background: #646464
}

.Advert--card-detail {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 20px;
    line-height: 24px
}

.Advert-account-inner {
    width: 100%;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    color: #646464
}

html[data-theme=dark] .Advert-account-inner {
    border: 1px solid #444;
    color: #999
}

.Advert-account-cover {
    width: 100%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    vertical-align: top
}

.Advert-account-cover:not(img) {
    background: #999;
    padding-top: 24%
}

html[data-theme=dark] .Advert-account-cover:not(img) {
    background: #646464
}

.Advert-account-body {
    padding: 8px 12px 16px;
    line-height: 1.6
}

.Advert-account-user {
    position: relative;
    padding-left: 90px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end
}

.Advert-account-user-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-left: 12px
}

.Advert-account-user-content .RichText {
    margin-top: 4px
}

.Advert-account-user-link {
    font-size: 20px
}

.Advert-account-user-avatar {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 2px;
    border: 2px solid #fff
}

html[data-theme=dark] .Advert-account-user-avatar {
    border: 2px solid #1a1a1a
}

.Advert-account-description {
    line-height: 27px;
    margin-top: 12px
}

.Advert-account-description span {
    color: #8590a6
}

html[data-theme=dark] .Advert-account-description span {
    color: #606a80
}

.Advert-meta {
    margin-bottom: 14px;
    line-height: 23px;
    color: #8590a6
}

html[data-theme=dark] .Advert-meta {
    color: #606a80
}

.Advert-title {
    font-size: 18px;
    font-weight: 600;
    font-synthesis: style;
    color: #1a1a1a
}

html[data-ios] .Advert-title {
    font-weight: 500
}

html[data-android] .Advert-title {
    font-weight: 700
}

html[data-theme=dark] .Advert-title {
    color: #999
}

.Advert-description {
    line-height: 27px;
    margin-top: 6px
}

.Advert-button {
    display: inline-block;
    color: #8590a6;
    font-size: 14px;
    padding: 0 3px
}

.Advert-button .Icon {
    margin-left: 4px;
    vertical-align: -1px
}

html[data-theme=dark] .Advert-button {
    color: #606a80
}

.Advert-followIcon {
    fill: currentColor;
    margin-right: 8px
}

.TopstoryItem {
    position: relative;
    padding: 16px 20px
}

.TopstoryItem:hover .TopstoryItem-rightButton {
    opacity: 1
}

.TopstoryItem .Button:not(.Button--plain):not(.Button--link) {
    line-height: 30px;
    padding: 0 12px
}

.TopstoryItem-rightButton {
    position: absolute;
    top: 12px;
    right: 16px;
    opacity: 0;
    transition: opacity .3s
}

.TopstoryItem-rightButton.Popover {
    background: #f6f6f6;
    border-radius: 3px;
    padding: 3px 6px;
    opacity: 1
}

html[data-theme=dark] .TopstoryItem-rightButton.Popover {
    background: #2e2e2e
}

.TopstoryItem-actionButton {
    position: absolute;
    top: 20px;
    right: 24px
}

.TopstoryItem-actionButton.is-active,html[data-theme=dark] .TopstoryItem-actionButton.is-active {
    color: #175199
}

.TopstoryItem-advertButton {
    font-size: 13px
}

.TopstoryItem-advertButton .Icon {
    margin-left: 6px
}

.TopstoryItem-uninterestTitle {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopstoryItem-uninterestTitle {
    font-weight: 500
}

html[data-android] .TopstoryItem-uninterestTitle {
    font-weight: 700
}

.TopstoryItem-uninterestTag {
    margin-top: 12px
}

.TopstoryItem-uninterestTag:not(:last-child) {
    margin-right: 16px
}

.TopstoryItem-uninterestTag.is-active {
    background: #0084ff;
    border: 1px solid #0084ff;
    color: #fff
}

html[data-theme=dark] .TopstoryItem-uninterestTag.is-active {
    background: #3a76d0;
    border: 1px solid #3a76d0;
    color: #1a1a1a
}

.TopstoryItem-menuItem {
    line-height: 36px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .TopstoryItem-menuItem {
    color: #606a80
}

.TopstoryMain {
    width: 694px;
    padding-bottom: 20px
}

.TopstoryPrelude-users {
    width: 100%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.TopstoryPrelude-field {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopstoryPrelude-field .Input-wrapper {
    width: 320px;
    margin-right: 20px
}

.TopstoryPrelude-field .Input {
    line-height: 26px
}

.TopstoryPrelude-fieldTips {
    position: absolute;
    top: 50px;
    right: 85px;
    color: #f1403c
}

html[data-theme=dark] .TopstoryPrelude-fieldTips {
    color: #b7302d
}

.TopstoryPrelude-users {
    margin: 65px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopstoryPrelude-intro {
    margin-bottom: 45px;
    color: #646464;
    font-size: 16px
}

html[data-theme=dark] .TopstoryPrelude-intro {
    color: #999
}

.TopstoryPrelude-user {
    position: relative;
    left: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 15px
}

.TopstoryPrelude-avatar {
    margin-right: 16px;
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%
}

.TopstoryPrelude-userBio {
    color: #646464
}

html[data-theme=dark] .TopstoryPrelude-userBio {
    color: #999
}

.TopstoryPrelude-userList {
    width: 100%;
    overflow: hidden
}

.TopstoryPrelude-userId--0 {
    margin-left: -190px
}

.TopstoryPrelude-userId--1 {
    margin-left: 60px
}

.TopstoryPrelude-userId--2 {
    margin-left: -280px
}

.TopstoryPrelude-userId--3 {
    margin-left: 34px
}

.TopstoryPrelude-userId--4 {
    margin-left: -190px
}

.TopstoryPrelude-userId--5 {
    margin-left: -34px
}

.TopstoryTopics-hint {
    padding: 40px 0 160px;
    text-align: center;
    color: #999
}

html[data-theme=dark] .TopstoryTopics-hint {
    color: #646464
}

.TopstoryTopics-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 14px;
    min-height: 80vh
}

.TopstoryTopics-item {
    width: 20%;
    box-sizing: border-box;
    padding: 14px;
    cursor: pointer
}

.TopstoryTopics-itemWrap {
    position: relative;
    border-radius: 8px;
    overflow: hidden
}

.TopstoryTopics-itemMask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg,rgba(26,26,26,.32),rgba(26,26,26,.6))
}

.TopstoryTopics-itemMask:hover {
    opacity: .6
}

html[data-theme=dark] .TopstoryTopics-itemMask {
    background: linear-gradient(180deg,hsla(0,0%,60%,.32),hsla(0,0%,60%,.6))
}

.TopstoryTopics-itemPic {
    width: 100%;
    display: block
}

.TopstoryTopics-itemLabel {
    position: absolute;
    z-index: 1;
    left: 10px;
    bottom: 10px;
    color: #fff
}

html[data-theme=dark] .TopstoryTopics-itemLabel {
    color: #1a1a1a
}

.TopstoryTopics-selectItem {
    position: absolute;
    z-index: 1;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    opacity: .6;
    background: #fff
}

html[data-theme=dark] .TopstoryTopics-selectItem {
    background: #1a1a1a
}

.TopstoryTopics-selectItem.is--selected {
    opacity: 1;
    background: #999
}

.TopstoryTopics-selectItem.is--selected .Icon {
    fill: #fff
}

html[data-theme=dark] .TopstoryTopics-selectItem.is--selected .Icon {
    fill: #1a1a1a
}

html[data-theme=dark] .TopstoryTopics-selectItem.is--selected {
    background: #646464
}

.TopstoryGuide-onStage {
    position: fixed;
    z-index: 10;
    bottom: 0;
    width: 100%;
    height: 120px;
    line-height: 120px;
    text-align: center;
    background-color: hsla(0,0%,100%,.96);
    box-shadow: 0 -1px 0 0 rgba(26,26,26,.08)
}

.TopstoryGuide-onStage .Button {
    padding: 6px 24px;
    font-size: 18px
}

html[data-theme=dark] .TopstoryGuide-onStage {
    background-color: rgba(26,26,26,.96);
    box-shadow: 0 -1px 0 0 hsla(0,0%,60%,.08)
}

.TopstoryGuide {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 110;
    overflow: hidden;
    width: 100%;
    height: 100%;
    min-width: 500px;
    border: 0;
    border-radius: 0;
    overflow-x: hidden;
    color: #444;
    background: hsla(0,0%,100%,.95)
}

html[data-theme=dark] .TopstoryGuide {
    color: gray;
    background: rgba(26,26,26,.95)
}

.TopstoryWrap {
    width: 100%;
    height: 100%;
    overflow: auto;
    padding-right: 15px
}

.TopstoryPrelude,.TopstoryTopics {
    -webkit-animation: .3s fadeInUp ease-in;
    animation: .3s fadeInUp ease-in
}

.TopstoryGuide-fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.TopstoryGuide-container,.TopstoryGuide-header {
    max-width: 1000px;
    margin: 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.TopstoryGuide-container {
    margin-top: 40px
}

.TopstoryGuide-title {
    margin: 40px 0 20px;
    font-size: 24px;
    font-weight: 400
}

.TopstoryGuide-subtitle {
    color: #999
}

html[data-theme=dark] .TopstoryGuide-subtitle {
    color: #646464
}

@-webkit-keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

@-webkit-keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px)
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px)
    }

    to {
        opacity: 1;
        -webkit-transform: none;
        transform: none
    }
}

.fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

@-webkit-keyframes fadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

@-webkit-keyframes fadeOutDown {
    0% {
        opacity: 1
    }

    to {
        opacity: 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px)
    }
}

@keyframes fadeOutDown {
    0% {
        opacity: 1
    }

    to {
        opacity: 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px)
    }
}

.fadeOutDown {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown;
    -webkit-animation-duration: .2s;
    animation-duration: .2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.Topstory-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    position: relative;
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto
}

.Topstory-mainColumn {
    margin-right: 10px
}

.EventcardItem-cover {
    position: relative;
    display: block;
    width: 100%;
    height: 160px;
    border-radius: 4px;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    margin-bottom: 10px
}

.EventcardItem-cover img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.EventcardItem-content {
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 27px
}

.FeedSource-firstline {
    margin-bottom: 8px;
    color: #8590a6
}

.FeedSource-firstline a {
    color: inherit
}

.FeedSource-firstline .UserLink-badge {
    margin-right: .3em
}

html[data-theme=dark] .FeedSource-firstline {
    color: #606a80
}

.FeedSource-byline {
    margin-bottom: 14px
}

.Feed .ColumnItem-meta,.Feed .RoundtableItem-meta {
    margin-top: 12px
}

.ActionCard-topic {
    position: relative;
    display: inline-block;
    vertical-align: top;
    padding: 20px 20px 4px;
    text-align: center;
    width: 160px;
    box-sizing: border-box
}

.ActionCard-topic:not(:first-child):after {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -43px;
    display: block;
    content: "";
    height: 86px;
    width: 1px;
    background-color: #ebebeb
}

html[data-theme=dark] .ActionCard-topic:not(:first-child):after {
    background-color: #444
}

.ActionCard-topic-name {
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}

.ActionCard-topic-reason {
    height: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #8590a6;
    font-size: 14px
}

html[data-theme=dark] .ActionCard-topic-reason {
    color: #606a80
}

.ActionCard-topic-button {
    height: 24px;
    line-height: 24px!important;
    font-size: 13px;
    width: 96px
}

.ActionCard-dot:after {
    margin: 0 5px;
    content: "\B7"
}

.ActionCard-title {
    color: #8590a6;
    margin-right: 8px
}

html[data-theme=dark] .ActionCard-title {
    color: #606a80
}

.Advert-head {
    margin-bottom: 10px
}

.Advert-metaText {
    color: #8590a6;
    line-height: 1
}

html[data-theme=dark] .Advert-metaText {
    color: #606a80
}

.Advert-content {
    margin-top: 10px
}

.Advert-brand,.Advert-content--cover,.Advert-content--question {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.Advert-brand {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8590a6;
    line-height: 24px
}

html[data-theme=dark] .Advert-brand {
    color: #606a80
}

.Advert-brand-avatar .Avatar {
    vertical-align: middle
}

.Advert-brand-name {
    margin-left: 12px
}

.Advert-brand-name--hasExtra {
    color: #1a1a1a;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .Advert-brand-name--hasExtra {
    font-weight: 500
}

html[data-android] .Advert-brand-name--hasExtra {
    font-weight: 700
}

html[data-theme=dark] .Advert-brand-name--hasExtra {
    color: #999
}

.Advert-cover {
    display: block;
    position: relative;
    margin-top: 12px;
    width: 100%;
    height: 150px;
    border-radius: 4px;
    overflow: hidden;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
}

.Advert-cover img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0)
}

.Advert--card-cover {
    width: 200px;
    height: 112px;
    margin-top: 4px;
    border-radius: 4px;
    overflow: hidden;
    background: #999;
    vertical-align: top
}

html[data-theme=dark] .Advert--card-cover {
    background: #646464
}

.Advert--card-detail {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 20px;
    line-height: 24px
}

.Advert-account-inner {
    width: 100%;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    color: #646464
}

html[data-theme=dark] .Advert-account-inner {
    border: 1px solid #444;
    color: #999
}

.Advert-account-cover {
    width: 100%;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    vertical-align: top
}

.Advert-account-cover:not(img) {
    background: #999;
    padding-top: 24%
}

html[data-theme=dark] .Advert-account-cover:not(img) {
    background: #646464
}

.Advert-account-body {
    padding: 8px 12px 16px;
    line-height: 1.6
}

.Advert-account-user {
    position: relative;
    padding-left: 90px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end
}

.Advert-account-user-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding-left: 12px
}

.Advert-account-user-content .RichText {
    margin-top: 4px
}

.Advert-account-user-link {
    font-size: 20px
}

.Advert-account-user-avatar {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 2px;
    border: 2px solid #fff
}

html[data-theme=dark] .Advert-account-user-avatar {
    border: 2px solid #1a1a1a
}

.Advert-account-description {
    line-height: 27px;
    margin-top: 12px
}

.Advert-account-description span {
    color: #8590a6
}

html[data-theme=dark] .Advert-account-description span {
    color: #606a80
}

.Advert-meta {
    margin-bottom: 14px;
    line-height: 23px;
    color: #8590a6
}

html[data-theme=dark] .Advert-meta {
    color: #606a80
}

.Advert-title {
    font-size: 18px;
    font-weight: 600;
    font-synthesis: style;
    color: #1a1a1a
}

html[data-ios] .Advert-title {
    font-weight: 500
}

html[data-android] .Advert-title {
    font-weight: 700
}

html[data-theme=dark] .Advert-title {
    color: #999
}

.Advert-description {
    line-height: 27px;
    margin-top: 6px
}

.Advert-button {
    display: inline-block;
    color: #8590a6;
    font-size: 14px;
    padding: 0 3px
}

.Advert-button .Icon {
    margin-left: 4px;
    vertical-align: -1px
}

html[data-theme=dark] .Advert-button {
    color: #606a80
}

.Advert-followIcon {
    fill: currentColor;
    margin-right: 8px
}

.TopstoryItem {
    position: relative;
    padding: 16px 20px
}

.TopstoryItem:hover .TopstoryItem-rightButton {
    opacity: 1
}

.TopstoryItem .Button:not(.Button--plain):not(.Button--link) {
    line-height: 30px;
    padding: 0 12px
}

.TopstoryItem-rightButton {
    position: absolute;
    top: 12px;
    right: 16px;
    opacity: 0;
    transition: opacity .3s
}

.TopstoryItem-rightButton.Popover {
    background: #f6f6f6;
    border-radius: 3px;
    padding: 3px 6px;
    opacity: 1
}

html[data-theme=dark] .TopstoryItem-rightButton.Popover {
    background: #2e2e2e
}

.TopstoryItem-actionButton {
    position: absolute;
    top: 20px;
    right: 24px
}

.TopstoryItem-actionButton.is-active,html[data-theme=dark] .TopstoryItem-actionButton.is-active {
    color: #175199
}

.TopstoryItem-advertButton {
    font-size: 13px
}

.TopstoryItem-advertButton .Icon {
    margin-left: 6px
}

.TopstoryItem-uninterestTitle {
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .TopstoryItem-uninterestTitle {
    font-weight: 500
}

html[data-android] .TopstoryItem-uninterestTitle {
    font-weight: 700
}

.TopstoryItem-uninterestTag {
    margin-top: 12px
}

.TopstoryItem-uninterestTag:not(:last-child) {
    margin-right: 16px
}

.TopstoryItem-uninterestTag.is-active {
    background: #0084ff;
    border: 1px solid #0084ff;
    color: #fff
}

html[data-theme=dark] .TopstoryItem-uninterestTag.is-active {
    background: #3a76d0;
    border: 1px solid #3a76d0;
    color: #1a1a1a
}

.TopstoryItem-menuItem {
    line-height: 36px;
    font-size: 14px;
    color: #8590a6
}

html[data-theme=dark] .TopstoryItem-menuItem {
    color: #606a80
}

.TopstoryItem-isRecommend {
    padding: 20px
}

.TopstoryPageHeader {
    height: 52px;
    margin: 0 auto;
    width: 1000px
}

.TopstoryPageHeader,.TopstoryPageHeader-main {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopstoryPageHeader-main {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1
}

.TopstoryPageHeader-tabs {
    border-bottom: none;
    padding-left: 10px
}

.TopstoryPageHeader-tabs .Tabs-link {
    padding: 15px 0
}

.TopstoryPageHeader-tabs .Tabs-item a {
    color: #444
}

html[data-theme=dark] .TopstoryPageHeader-tabs .Tabs-item a {
    color: gray
}

.TopstoryPageHeader-tabs .is-active {
    color: #1a1a1a
}

.TopstoryPageHeader-tabs .is-active:after {
    bottom: 0
}

html[data-theme=dark] .TopstoryPageHeader-tabs .is-active {
    color: #999
}

.TopstoryPageHeader-aside {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 296px
}

.TopstoryPageHeader-aside .TopstoryPageHeader-searchBar {
    width: 216px
}

.TopstoryPageHeader-aside .TopstoryPageHeader-searchButton {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: transparent;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 32px;
    padding: 0 12px
}

.TopstoryPageHeader-aside .QuestionAskButton {
    padding: 0 14px
}

.TopstoryV2-noMarginCard {
    margin-bottom: 0
}

.TopstoryV2-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 1000px;
    padding: 0 16px;
    margin: 10px auto
}

.TopstoryV2-mainColumn {
    margin-right: 10px;
    margin-bottom: 0;
    width: 694px
}

.TopstoryV2-mainColumn .Card {
    margin-bottom: 0;
    box-shadow: none;
    border-bottom: 1px solid #f0f2f7
}

html[data-theme=dark] .TopstoryV2-mainColumn .Card {
    border-bottom: 1px solid #2e2e2e
}

.TopstoryV2-tabCard {
    width: 100%
}

.TopstoryV2-tabCard .Tabs {
    border-bottom: none
}

.TopstoryV2-tabCard .Tabs-link {
    padding: 18px 0
}

.TopstoryV2-tabCard .is-active:after {
    bottom: 0
}

.TopstoryV2-content {
    min-height: 100vh
}

.TopstoryArticleItem-image {
    margin-top: 10px;
    width: 100%
}

.TopstoryArticleItem-status {
    padding: 16px;
    margin: 16px 0;
    color: #8590a6;
    background: #ebebeb;
    border-radius: 4px
}

.TopstoryArticleItem-status a {
    color: #175199
}

.TopstoryArticleItem-status a:hover,html[data-theme=dark] .TopstoryArticleItem-status a:hover {
    border-bottom: 1px solid #175199
}

html[data-theme=dark] .TopstoryArticleItem-status a {
    color: #175199
}

html[data-theme=dark] .TopstoryArticleItem-status {
    color: #606a80;
    background: #444
}

.TopstoryV2-newUserFollowItem {
    padding: 20px
}

.TopstoryV2-newUserFollowItemHeader {
    width: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 20px
}

.TopstoryV2-newUserFollowItemHeader,.TopstoryV2-newUserFollowItemHeaderAuthorInfo,.TopstoryV2-newUserFollowItemHeaderAuthorInfoText {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.TopstoryV2-newUserFollowItemHeaderAuthorInfoText {
    margin-left: 10px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.TopstoryV2-newUserFollowItemHeaderAuthorBasicInfo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 500px
}

.TopstoryV2-newUserFollowItemHeaderAuthorInfoName {
    font-weight: 600;
    font-synthesis: style;
    white-space: nowrap
}

html[data-ios] .TopstoryV2-newUserFollowItemHeaderAuthorInfoName {
    font-weight: 500
}

html[data-android] .TopstoryV2-newUserFollowItemHeaderAuthorInfoName {
    font-weight: 700
}

.TopstoryV2-newUserFollowItemHeaderFollowButton {
    width: 100px;
    height: 34px;
    padding: 0 14px
}

.TopstoryV2-newUserFollowItemHeaderAuthorInfoDescription {
    white-space: nowrap;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis
}

.TopstoryV2-newUserFollowItemExtraInfo {
    color: #999
}

html[data-theme=dark] .TopstoryV2-newUserFollowItemExtraInfo {
    color: #646464
}

.TopstoryV2-newUserFollowCountPanel {
    height: 150px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: #fff
}

html[data-theme=dark] .TopstoryV2-newUserFollowCountPanel {
    background: #1a1a1a
}

.TopstoryV2-newUserFollowCountPanelIcon {
    width: 150px;
    height: 120px
}

.TopstoryV2-newUserFollowCountPanelText {
    font-size: 15px;
    color: gray
}

html[data-theme=dark] .TopstoryV2-newUserFollowCountPanelText {
    color: gray
}

.TopstoryV2-newUserFollowCountPanelTextReload {
    color: #0084ff;
    cursor: pointer
}

html[data-theme=dark] .TopstoryV2-newUserFollowCountPanelTextReload {
    color: #3a76d0
}

.HotItem {
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 16px 16px 16px 0;
    position: relative
}

.HotItem:not(:first-child) {
    border: none;
    border-top: solid #ebebeb;
    border-top: .5px solid #d3d3d3
}

html[data-hairline] .HotItem:not(:first-child) {
    border-top: 1px solid #d3d3d3;
    -o-border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='0' width='1' height='.5' fill='#d3d3d3'/> </svg>") 1 0 0 0;
    border-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1' height='1'> <rect x='0' y='0' width='1' height='.5' fill='#d3d3d3'/> </svg>") 1 0 0 0
}

html[data-theme=dark] html[data-hairline] .HotItem:not(:first-child) {
    border-top: 1px solid #2e2e2e
}

html[data-theme=dark] .HotItem:not(:first-child) {
    border-top: solid #444;
    border-top: .5px solid #2e2e2e
}

html[data-theme=dark] .HotItem {
    background: #1a1a1a
}

.HotItem-index {
    text-align: center;
    width: 57px
}

.HotItem-rank {
    line-height: 1.6;
    font-size: 18px;
    color: #999;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .HotItem-rank {
    font-weight: 500
}

html[data-android] .HotItem-rank {
    font-weight: 700
}

html[data-theme=dark] .HotItem-rank {
    color: #646464
}

.HotItem-hot,html[data-theme=dark] .HotItem-hot {
    color: #ff9607
}

.HotItem-label {
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    height: 19px;
    line-height: 19px;
    margin: 0 auto;
    width: 19px
}

html[data-theme=dark] .HotItem-label {
    color: #1a1a1a
}

.HotItem-content {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: hidden
}

.HotItem-title {
    color: #1a1a1a;
    font-size: 18px;
    line-height: 28px;
    max-height: 56px;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 600;
    font-synthesis: style
}

html[data-ios] .HotItem-title {
    font-weight: 500
}

html[data-android] .HotItem-title {
    font-weight: 700
}

html[data-theme=dark] .HotItem-title {
    color: #999
}

.HotItem-excerpt {
    color: #444;
    line-height: 25px;
    margin-top: 2px;
    min-height: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.HotItem-excerpt--multiLine {
    max-height: 50px;
    white-space: normal;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
}

html[data-theme=dark] .HotItem-excerpt {
    color: gray
}

.HotItem-metrics {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #8590a6;
    font-size: 14px;
    height: 16px;
    margin-top: 8px
}

.HotItem-metrics path {
    fill: #9fadc7
}

.HotItem-metrics .HotItem-action {
    margin-left: 28px
}

.HotItem-metrics--bottom {
    bottom: 16px;
    position: absolute
}

html[data-theme=dark] .HotItem-metrics {
    color: #606a80
}

.HotItem-img {
    display: block;
    height: 105px;
    margin-left: 16px;
    position: relative
}

.HotItem-img:after,.HotItem-img img {
    border-radius: 4px;
    height: 105px;
    width: 190px
}

.HotItem-img img {
    display: block;
    -o-object-fit: cover;
    object-fit: cover
}

.HotItem-img:after {
    background-color: rgba(26,26,26,.05);
    content: "";
    left: 0;
    position: absolute;
    top: 0
}

html[data-theme=dark] .HotItem-img:after {
    background-color: hsla(0,0%,60%,.05)
}

.HotList {
    background: #fff;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(0,34,77,.05);
    overflow: hidden
}

html[data-theme=dark] .HotList {
    background: #1a1a1a
}

`

export default zhihuStyle