import{r as n,o as s,c as d,b as t,a,F as i,d as e,e as o}from"./app.70488633.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const c={},p=t("h1",{id:"api-reference",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#api-reference","aria-hidden":"true"},"#"),e(" API Reference")],-1),u=e("REST APIs use the Status-Line part of an HTTP response message to inform clients of their request\u2019s overarching result. "),l={href:"https://www.ietf.org/rfc/rfc2616.txt",target:"_blank",rel:"noopener noreferrer"},g=e("RFC 2616"),b=e(" defines the "),f={href:"https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html#sec6.1",target:"_blank",rel:"noopener noreferrer"},m=e("Status-Line syntax"),E=e(" as shown below:"),x=o('<h2 id="_1xx-informational" tabindex="-1"><a class="header-anchor" href="#_1xx-informational" aria-hidden="true">#</a> 1xx Informational</h2><p>Communicates transfer protocol-level information.</p><h3 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> CONTINUE</h3><p><strong>Status Code</strong>: 100 <br><strong>Example</strong>: <code>Result.continues();</code></p><p>An interim response. Indicates to the client that the initial part of the request has been received and has not yet been rejected by the server. The client SHOULD continue by sending the remainder of the request or, if the request has already been completed, ignore this response. The server MUST send a final response after the request has been completed.</p><h3 id="switching-protocols" tabindex="-1"><a class="header-anchor" href="#switching-protocols" aria-hidden="true">#</a> SWITCHING_PROTOCOLS</h3><p><strong>Status Code</strong>: 101 <br><strong>Example</strong>: <code>Result.switchingProtocols();</code></p>',7),T=e("Sent in response to an "),R={href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Protocol_upgrade_mechanism",target:"_blank",rel:"noopener noreferrer"},_=e("Upgrade"),S=e(" request header from the client, and indicates the protocol the server is switching to."),C=o('<h3 id="processing" tabindex="-1"><a class="header-anchor" href="#processing" aria-hidden="true">#</a> PROCESSING</h3><p><strong>Status Code</strong>: 102 <br><strong>Example</strong>: <code>Result.processing();</code></p><p>Indicates that the server has received and is processing the request, but no response is available yet.</p><h3 id="checkpoint" tabindex="-1"><a class="header-anchor" href="#checkpoint" aria-hidden="true">#</a> CHECKPOINT</h3><p><strong>Status Code</strong>: 103 <br><strong>Example</strong>: <code>Result.checkpoint();</code></p><p>Primarily intended to be used with the Link header. It suggests the user agent start preloading the resources while the server prepares a final response.</p><h2 id="_2xx-success" tabindex="-1"><a class="header-anchor" href="#_2xx-success" aria-hidden="true">#</a> 2xx Success</h2><p>Indicates that the client\u2019s request was accepted successfully.</p><h3 id="ok" tabindex="-1"><a class="header-anchor" href="#ok" aria-hidden="true">#</a> OK</h3><p><strong>Status Code</strong>: 200 <br><strong>Example</strong>: <code>Result.success();</code></p><p>Indicates that the request has succeeded.</p><h3 id="created" tabindex="-1"><a class="header-anchor" href="#created" aria-hidden="true">#</a> CREATED</h3><p><strong>Status Code</strong>: 201 <br><strong>Example</strong>: <code>Result.created();</code></p><p>Indicates that the request has succeeded and a new resource has been created as a result.</p><h3 id="accepted" tabindex="-1"><a class="header-anchor" href="#accepted" aria-hidden="true">#</a> ACCEPTED</h3><p><strong>Status Code</strong>: 202 <br><strong>Example</strong>: <code>Result.acceptably();</code></p><p>Indicates that the request has been received but not completed yet. It is typically used in log running requests and batch processing.</p><h3 id="non-authoritative-information" tabindex="-1"><a class="header-anchor" href="#non-authoritative-information" aria-hidden="true">#</a> NON_AUTHORITATIVE_INFORMATION</h3><p><strong>Status Code</strong>: 203 <br><strong>Example</strong>: <code>Result.nonAuthoritativeInformation();</code></p><p>Indicates that the returned metainformation in the entity-header is not the definitive set as available from the origin server, but is gathered from a local or a third-party copy. The set presented MAY be a subset or superset of the original version.</p><h3 id="no-content" tabindex="-1"><a class="header-anchor" href="#no-content" aria-hidden="true">#</a> NO_CONTENT</h3><p><strong>Status Code</strong>: 204 <br><strong>Example</strong>: <code>Result.noContents();</code></p><p>The server has fulfilled the request but does not need to return a response body. The server may return the updated meta information.</p><h3 id="reset-content" tabindex="-1"><a class="header-anchor" href="#reset-content" aria-hidden="true">#</a> RESET_CONTENT</h3><p><strong>Status Code</strong>: 205 <br><strong>Example</strong>: <code>Result.resetContent();</code></p><p>Indicates the client to reset the document which sent this request.</p><h3 id="partial-content" tabindex="-1"><a class="header-anchor" href="#partial-content" aria-hidden="true">#</a> PARTIAL_CONTENT</h3><p><strong>Status Code</strong>: 206 <br><strong>Example</strong>: <code>Result.partialContent();</code></p><p>It is used when the Range header is sent from the client to request only part of a resource.</p><h3 id="multi-status" tabindex="-1"><a class="header-anchor" href="#multi-status" aria-hidden="true">#</a> MULTI_STATUS</h3><p><strong>Status Code</strong>: 207 <br><strong>Example</strong>: <code>Result.multiStatus();</code></p><p>An indicator to a client that multiple operations happened, and that the status for each operation can be found in the body of the response.</p><h3 id="already-reported" tabindex="-1"><a class="header-anchor" href="#already-reported" aria-hidden="true">#</a> ALREADY_REPORTED</h3><p><strong>Status Code</strong>: 208 <br><strong>Example</strong>: <code>Result.alreadyReported();</code></p><p>Allows a client to tell the server that the same resource (with the same binding) was mentioned earlier. It never appears as a true HTTP response code in the status line, and only appears in bodies.</p><h3 id="im-used" tabindex="-1"><a class="header-anchor" href="#im-used" aria-hidden="true">#</a> IM_USED</h3><p><strong>Status Code</strong>: 226 <br><strong>Example</strong>: <code>Result.imUsed();</code></p><p>The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.</p><h2 id="_3xx-redirection" tabindex="-1"><a class="header-anchor" href="#_3xx-redirection" aria-hidden="true">#</a> 3xx Redirection</h2><p>Indicates that the client must take some additional action in order to complete their request.</p><h3 id="multiple-choices" tabindex="-1"><a class="header-anchor" href="#multiple-choices" aria-hidden="true">#</a> MULTIPLE_CHOICES</h3><p><strong>Status Code</strong>: 300 <br><strong>Example</strong>: <code>Result.multipleChoices();</code></p><p>The request has more than one possible response. The user-agent or user should choose one of them.</p><h3 id="moved-permanently" tabindex="-1"><a class="header-anchor" href="#moved-permanently" aria-hidden="true">#</a> MOVED_PERMANENTLY</h3><p><strong>Status Code</strong>: 301 <br><strong>Example</strong>: <code>Result.movedPermanently();</code></p><p>The URL of the requested resource has been changed permanently. The new URL is given by the Location header field in the response. This response is cacheable unless indicated otherwise.</p><h3 id="found" tabindex="-1"><a class="header-anchor" href="#found" aria-hidden="true">#</a> FOUND</h3><p><strong>Status Code</strong>: 302 <br><strong>Example</strong>: <code>Result.found();</code></p><p>The URL of the requested resource has been changed temporarily. The new URL is given by the Location field in the response. This response is only cacheable if indicated by a Cache-Control or Expires header field.</p><h3 id="see-other" tabindex="-1"><a class="header-anchor" href="#see-other" aria-hidden="true">#</a> SEE_OTHER</h3><p><strong>Status Code</strong>: 303 <br><strong>Example</strong>: <code>Result.seeOther();</code></p><p>The response can be found under a different URI and SHOULD be retrieved using a GET method on that resource.</p><h3 id="not-modified" tabindex="-1"><a class="header-anchor" href="#not-modified" aria-hidden="true">#</a> NOT_MODIFIED</h3><p><strong>Status Code</strong>: 304 <br><strong>Example</strong>: <code>Result.notModified();</code></p><p>Indicates the client that the response has not been modified, so the client can continue to use the same cached version of the response.</p><h3 id="temporary-redirect" tabindex="-1"><a class="header-anchor" href="#temporary-redirect" aria-hidden="true">#</a> TEMPORARY_REDIRECT</h3><p><strong>Status Code</strong>: 307 <br><strong>Example</strong>: <code>Result.temporaryRedirect();</code></p><p>Indicates the client to get the requested resource at another URI with same method that was used in the prior request. It is similar to 302 Found with one exception that the same HTTP method will be used that was used in the prior request.</p><h3 id="permanent-redirect" tabindex="-1"><a class="header-anchor" href="#permanent-redirect" aria-hidden="true">#</a> PERMANENT_REDIRECT</h3><p><strong>Status Code</strong>: 308 <br><strong>Example</strong>: <code>Result.permanentRedirect();</code></p><p>Indicates that the resource is now permanently located at another URI, specified by the Location header. It is similar to 301 Moved Permanently with one exception that the same HTTP method will be used that was used in the prior request.</p><h2 id="_4xx-client-error" tabindex="-1"><a class="header-anchor" href="#_4xx-client-error" aria-hidden="true">#</a> 4xx Client Error</h2><p>This category of error status codes points the finger at clients.</p><h3 id="bad-request" tabindex="-1"><a class="header-anchor" href="#bad-request" aria-hidden="true">#</a> BAD_REQUEST</h3><p><strong>Status Code</strong>: 400 <br><strong>Example</strong>: <code>Result.badRequests();</code></p><p>The request could not be understood by the server due to incorrect syntax. The client SHOULD NOT repeat the request without modifications.</p><h3 id="unauthorized" tabindex="-1"><a class="header-anchor" href="#unauthorized" aria-hidden="true">#</a> UNAUTHORIZED</h3><p><strong>Status Code</strong>: 401 <br><strong>Example</strong>: <code>Result.unauthorized();</code></p><p>Indicates that the request requires user authentication information. The client MAY repeat the request with a suitable Authorization header field.</p><h3 id="payment-required" tabindex="-1"><a class="header-anchor" href="#payment-required" aria-hidden="true">#</a> PAYMENT_REQUIRED</h3><p><strong>Status Code</strong>: 402 <br><strong>Example</strong>: <code>Result.paymentRequired();</code></p><p>Reserved for future use. It is aimed for using in the digital payment systems.</p><h3 id="forbidden" tabindex="-1"><a class="header-anchor" href="#forbidden" aria-hidden="true">#</a> FORBIDDEN</h3><p><strong>Status Code</strong>: 403 <br><strong>Example</strong>: <code>Result.forbidden();</code></p><p>Unauthorized request. The client does not have access rights to the content. Unlike 401, the client\u2019s identity is known to the server.</p><h3 id="not-found" tabindex="-1"><a class="header-anchor" href="#not-found" aria-hidden="true">#</a> NOT_FOUND</h3><p><strong>Status Code</strong>: 404 <br><strong>Example</strong>: <code>Result.notFounds();</code></p><p>The server can not find the requested resource.</p><h3 id="method-not-allowed" tabindex="-1"><a class="header-anchor" href="#method-not-allowed" aria-hidden="true">#</a> METHOD_NOT_ALLOWED</h3><p><strong>Status Code</strong>: 405 <br><strong>Example</strong>: <code>Result.methodNotAllowed();</code></p><p>The request HTTP method is known by the server but has been disabled and cannot be used for that resource.</p><h3 id="not-acceptable" tabindex="-1"><a class="header-anchor" href="#not-acceptable" aria-hidden="true">#</a> NOT_ACCEPTABLE</h3><p><strong>Status Code</strong>: 406 <br><strong>Example</strong>: <code>Result.notAcceptable();</code></p><p>The server doesn\u2019t find any content that conforms to the criteria given by the user agent in the Accept header sent in the request.</p><h3 id="proxy-authentication-required" tabindex="-1"><a class="header-anchor" href="#proxy-authentication-required" aria-hidden="true">#</a> PROXY_AUTHENTICATION_REQUIRED</h3><p><strong>Status Code</strong>: 407 <br><strong>Example</strong>: <code>Result.proxyAuthenticationRequired();</code></p><p>Indicates that the client must first authenticate itself with the proxy.</p><h3 id="request-timeout" tabindex="-1"><a class="header-anchor" href="#request-timeout" aria-hidden="true">#</a> REQUEST_TIMEOUT</h3><p><strong>Status Code</strong>: 408 <br><strong>Example</strong>: <code>Result.requestTimeout();</code></p><p>Indicates that the server did not receive a complete request from the client within the server\u2019s allotted timeout period.</p><h3 id="conflict" tabindex="-1"><a class="header-anchor" href="#conflict" aria-hidden="true">#</a> CONFLICT</h3><p><strong>Status Code</strong>: 409 <br><strong>Example</strong>: <code>Result.conflict();</code></p><p>The request could not be completed due to a conflict with the current state of the resource.</p><h3 id="gone" tabindex="-1"><a class="header-anchor" href="#gone" aria-hidden="true">#</a> GONE</h3><p><strong>Status Code</strong>: 410 <br><strong>Example</strong>: <code>Result.gone();</code></p><p>The requested resource is no longer available at the server.</p><h3 id="length-required" tabindex="-1"><a class="header-anchor" href="#length-required" aria-hidden="true">#</a> LENGTH_REQUIRED</h3><p><strong>Status Code</strong>: 411 <br><strong>Example</strong>: <code>Result.lengthRequired();</code></p><p>The server refuses to accept the request without a defined Content- Length. The client MAY repeat the request if it adds a valid Content-Length header field.</p><h3 id="precondition-failed" tabindex="-1"><a class="header-anchor" href="#precondition-failed" aria-hidden="true">#</a> PRECONDITION_FAILED</h3><p><strong>Status Code</strong>: 412 <br><strong>Example</strong>: <code>Result.preconditionFailed();</code></p><p>The client has indicated preconditions in its headers which the server does not meet.</p><h3 id="payload-too-large" tabindex="-1"><a class="header-anchor" href="#payload-too-large" aria-hidden="true">#</a> PAYLOAD_TOO_LARGE</h3><p><strong>Status Code</strong>: 413 <br><strong>Example</strong>: <code>Result.payloadTooLarge();</code></p><p>Request entity is larger than limits defined by server.</p><h3 id="uri-too-long" tabindex="-1"><a class="header-anchor" href="#uri-too-long" aria-hidden="true">#</a> URI_TOO_LONG</h3><p><strong>Status Code</strong>: 414 <br><strong>Example</strong>: <code>Result.uriTooLong();</code></p><p>The URI requested by the client is longer than the server can interpret.</p><h3 id="unsupported-media-type" tabindex="-1"><a class="header-anchor" href="#unsupported-media-type" aria-hidden="true">#</a> UNSUPPORTED_MEDIA_TYPE</h3><p><strong>Status Code</strong>: 415 <br><strong>Example</strong>: <code>Result.unsupportedMediaType();</code></p><p>The media-type in Content-type of the request is not supported by the server.</p><h3 id="requested-range-not-satisfiable" tabindex="-1"><a class="header-anchor" href="#requested-range-not-satisfiable" aria-hidden="true">#</a> REQUESTED_RANGE_NOT_SATISFIABLE</h3><p><strong>Status Code</strong>: 416 <br><strong>Example</strong>: <code>Result.requestedRangeNotSatisfiable();</code></p><p>The range specified by the Range header field in the request can\u2019t be fulfilled.</p><h3 id="expectation-failed" tabindex="-1"><a class="header-anchor" href="#expectation-failed" aria-hidden="true">#</a> EXPECTATION_FAILED</h3><p><strong>Status Code</strong>: 417 <br><strong>Example</strong>: <code>Result.expectationFailed();</code></p><p>The expectation indicated by the Expect request header field can\u2019t be met by the server.</p><h3 id="i-am-a-teapot" tabindex="-1"><a class="header-anchor" href="#i-am-a-teapot" aria-hidden="true">#</a> I_AM_A_TEAPOT</h3><p><strong>Status Code</strong>: 418 <br><strong>Example</strong>: <code>Result.iAmATeapot()</code>;</p>',119),v=e("It was defined as April\u2019s lool joke and is not expected to be implemented by actual HTTP servers. ("),I={href:"https://tools.ietf.org/html/rfc2324",target:"_blank",rel:"noopener noreferrer"},q=e("RFC 2324"),y=e(")"),A=o('<h3 id="unprocessable-entity" tabindex="-1"><a class="header-anchor" href="#unprocessable-entity" aria-hidden="true">#</a> UNPROCESSABLE_ENTITY</h3><p><strong>Status Code</strong>: 422 <br><strong>Example</strong>: <code>Result.unprocessableSubstance()</code>;</p><p>The server understands the content type and syntax of the request entity, but still server is unable to process the request for some reason.</p><h3 id="locked" tabindex="-1"><a class="header-anchor" href="#locked" aria-hidden="true">#</a> LOCKED</h3><p><strong>Status Code</strong>: 423 <br><strong>Example</strong>: <code>Result.locked()</code>;</p><p>The resource that is being accessed is locked.</p><h3 id="failed-dependency" tabindex="-1"><a class="header-anchor" href="#failed-dependency" aria-hidden="true">#</a> FAILED_DEPENDENCY</h3><p><strong>Status Code</strong>: 424 <br><strong>Example</strong>: <code>Result.failedDependency()</code>;</p><p>The request failed due to failure of a previous request.</p><h3 id="upgrade-required" tabindex="-1"><a class="header-anchor" href="#upgrade-required" aria-hidden="true">#</a> UPGRADE_REQUIRED</h3><p><strong>Status Code</strong>: 426 <br><strong>Example</strong>: <code>Result.upgradeRequired()</code>;</p><p>The server refuses to perform the request. The server will process the request after the client upgrades to a different protocol.</p><h3 id="precondition-required" tabindex="-1"><a class="header-anchor" href="#precondition-required" aria-hidden="true">#</a> PRECONDITION_REQUIRED</h3><p><strong>Status Code</strong>: 428 <br><strong>Example</strong>: <code>Result.preconditionRequired()</code>;</p><p>The origin server requires the request to be conditional.</p><h3 id="too-many-requests" tabindex="-1"><a class="header-anchor" href="#too-many-requests" aria-hidden="true">#</a> TOO_MANY_REQUESTS</h3><p><strong>Status Code</strong>: 429 <br><strong>Example</strong>: <code>Result.tooManyRequests()</code>;</p><p>The user has sent too many requests in a given amount of time (\u201Crate limiting\u201D).</p><h3 id="request-header-fields-too-large" tabindex="-1"><a class="header-anchor" href="#request-header-fields-too-large" aria-hidden="true">#</a> REQUEST_HEADER_FIELDS_TOO_LARGE</h3><p><strong>Status Code</strong>: 431 <br><strong>Example</strong>: <code>Result.requestHeaderFieldsTooLarge()</code>;</p><p>The server is unwilling to process the request because its header fields are too large.</p><h3 id="unavailable-for-legal-reasons" tabindex="-1"><a class="header-anchor" href="#unavailable-for-legal-reasons" aria-hidden="true">#</a> UNAVAILABLE_FOR_LEGAL_REASONS</h3><p><strong>Status Code</strong>: 451 <br><strong>Example</strong>: <code>Result.unavailableForLegalReasons()</code>;</p><p>The user-agent requested a resource that cannot legally be provided.</p><h2 id="_5xx-server-error" tabindex="-1"><a class="header-anchor" href="#_5xx-server-error" aria-hidden="true">#</a> 5xx Server Error</h2><h3 id="internal-server-error" tabindex="-1"><a class="header-anchor" href="#internal-server-error" aria-hidden="true">#</a> INTERNAL_SERVER_ERROR</h3><p><strong>Status Code</strong>: 500 <br><strong>Example</strong>: <code>Result.internalServerError()</code>;</p><p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p><h3 id="not-implemented" tabindex="-1"><a class="header-anchor" href="#not-implemented" aria-hidden="true">#</a> NOT_IMPLEMENTED</h3><p><strong>Status Code</strong>: 501 <br><strong>Example</strong>: <code>Result.notImplemented()</code>;</p><p>The HTTP method is not supported by the server and cannot be handled.</p><h3 id="bad-gateway" tabindex="-1"><a class="header-anchor" href="#bad-gateway" aria-hidden="true">#</a> BAD_GATEWAY</h3><p><strong>Status Code</strong>: 502 <br><strong>Example</strong>: <code>Result.badGateway()</code>;</p><p>The server got an invalid response while working as a gateway to get the response needed to handle the request.</p><h3 id="service-unavailable" tabindex="-1"><a class="header-anchor" href="#service-unavailable" aria-hidden="true">#</a> SERVICE_UNAVAILABLE</h3><p><strong>Status Code</strong>: 503 <br><strong>Example</strong>: <code>Result.serviceUnavailable()</code>;</p><p>The server is not ready to handle the request.</p><h3 id="gateway-timeout" tabindex="-1"><a class="header-anchor" href="#gateway-timeout" aria-hidden="true">#</a> GATEWAY_TIMEOUT</h3><p><strong>Status Code</strong>: 504 <br><strong>Example</strong>: <code>Result.gatewayTimeout()</code>;</p><p>The server is acting as a gateway and cannot get a response in time for a request.</p><h3 id="http-version-not-supported" tabindex="-1"><a class="header-anchor" href="#http-version-not-supported" aria-hidden="true">#</a> HTTP_VERSION_NOT_SUPPORTED</h3><p><strong>Status Code</strong>: 505 <br><strong>Example</strong>: <code>Result.httpVersionNotSupported()</code>;</p><p>The HTTP version used in the request is not supported by the server.</p><h3 id="variant-also-negotiates" tabindex="-1"><a class="header-anchor" href="#variant-also-negotiates" aria-hidden="true">#</a> VARIANT_ALSO_NEGOTIATES</h3><p><strong>Status Code</strong>: 506 <br><strong>Example</strong>: <code>Result.variantAlsoNegotiates()</code>;</p><p>Indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper endpoint in the negotiation process.</p><h3 id="insufficient-storage" tabindex="-1"><a class="header-anchor" href="#insufficient-storage" aria-hidden="true">#</a> INSUFFICIENT_STORAGE</h3><p><strong>Status Code</strong>: 507 <br><strong>Example</strong>: <code>Result.insufficientStorage()</code>;</p><p>The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.</p><h3 id="loop-detected" tabindex="-1"><a class="header-anchor" href="#loop-detected" aria-hidden="true">#</a> LOOP_DETECTED</h3><p><strong>Status Code</strong>: 508 <br><strong>Example</strong>: <code>Result.loopDetected()</code>;</p><p>The server detected an infinite loop while processing the request.</p><h3 id="bandwidth-limit-exceeded" tabindex="-1"><a class="header-anchor" href="#bandwidth-limit-exceeded" aria-hidden="true">#</a> BANDWIDTH_LIMIT_EXCEEDED</h3><p><strong>Status Code</strong>: 509 <br><strong>Example</strong>: <code>Result.bandwidthLimitExceeded()</code>;</p><p>The method exceeds the bandwidth limit.</p><h3 id="not-extended" tabindex="-1"><a class="header-anchor" href="#not-extended" aria-hidden="true">#</a> NOT_EXTENDED</h3><p><strong>Status Code</strong>: 510 <br><strong>Example</strong>: <code>Result.notExtended()</code>;</p><p>Further extensions to the request are required for the server to fulfill it.</p><h3 id="network-authentication-required" tabindex="-1"><a class="header-anchor" href="#network-authentication-required" aria-hidden="true">#</a> NETWORK_AUTHENTICATION_REQUIRED</h3><p><strong>Status Code</strong>: 511 <br><strong>Example</strong>: <code>Result.networkAuthenticationRequired()</code>;</p><p>Indicates that the client needs to authenticate to gain network access.</p>',61);function O(N,w){const r=n("ExternalLinkIcon");return s(),d(i,null,[p,t("p",null,[u,t("a",l,[g,a(r)]),b,t("a",f,[m,a(r)]),E]),x,t("p",null,[T,t("a",R,[_,a(r)]),S]),C,t("p",null,[v,t("a",I,[q,a(r)]),y]),A],64)}var U=h(c,[["render",O]]);export{U as default};
