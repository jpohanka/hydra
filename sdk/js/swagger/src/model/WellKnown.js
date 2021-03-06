/**
 * ORY Hydra
 * Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.
 *
 * OpenAPI spec version: latest
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OryHydra) {
      root.OryHydra = {};
    }
    root.OryHydra.WellKnown = factory(root.OryHydra.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WellKnown model module.
   * @module model/WellKnown
   * @version latest
   */

  /**
   * Constructs a new <code>WellKnown</code>.
   * It includes links to several endpoints (e.g. /oauth2/token) and exposes information on supported signature algorithms among others.
   * @alias module:model/WellKnown
   * @class
   * @param authorizationEndpoint {String} URL of the OP's OAuth 2.0 Authorization Endpoint.
   * @param idTokenSigningAlgValuesSupported {Array.<String>} JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for the ID Token to encode the Claims in a JWT.
   * @param issuer {String} URL using the https scheme with no query or fragment component that the OP asserts as its IssuerURL Identifier. If IssuerURL discovery is supported , this value MUST be identical to the issuer value returned by WebFinger. This also MUST be identical to the iss Claim value in ID Tokens issued from this IssuerURL.
   * @param jwksUri {String} URL of the OP's JSON Web Key Set [JWK] document. This contains the signing key(s) the RP uses to validate signatures from the OP. The JWK Set MAY also contain the Server's encryption key(s), which are used by RPs to encrypt requests to the Server. When both signing and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.
   * @param responseTypesSupported {Array.<String>} JSON array containing a list of the OAuth 2.0 response_type values that this OP supports. Dynamic OpenID Providers MUST support the code, id_token, and the token id_token Response Type values.
   * @param subjectTypesSupported {Array.<String>} JSON array containing a list of the Subject Identifier types that this OP supports. Valid types include pairwise and public.
   * @param tokenEndpoint {String} URL of the OP's OAuth 2.0 Token Endpoint
   */
  var exports = function(authorizationEndpoint, idTokenSigningAlgValuesSupported, issuer, jwksUri, responseTypesSupported, subjectTypesSupported, tokenEndpoint) {
    var _this = this;

    _this['authorization_endpoint'] = authorizationEndpoint;



    _this['id_token_signing_alg_values_supported'] = idTokenSigningAlgValuesSupported;
    _this['issuer'] = issuer;
    _this['jwks_uri'] = jwksUri;





    _this['response_types_supported'] = responseTypesSupported;

    _this['subject_types_supported'] = subjectTypesSupported;
    _this['token_endpoint'] = tokenEndpoint;



  };

  /**
   * Constructs a <code>WellKnown</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WellKnown} obj Optional instance to populate.
   * @return {module:model/WellKnown} The populated <code>WellKnown</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorization_endpoint')) {
        obj['authorization_endpoint'] = ApiClient.convertToType(data['authorization_endpoint'], 'String');
      }
      if (data.hasOwnProperty('claims_parameter_supported')) {
        obj['claims_parameter_supported'] = ApiClient.convertToType(data['claims_parameter_supported'], 'Boolean');
      }
      if (data.hasOwnProperty('claims_supported')) {
        obj['claims_supported'] = ApiClient.convertToType(data['claims_supported'], ['String']);
      }
      if (data.hasOwnProperty('grant_types_supported')) {
        obj['grant_types_supported'] = ApiClient.convertToType(data['grant_types_supported'], ['String']);
      }
      if (data.hasOwnProperty('id_token_signing_alg_values_supported')) {
        obj['id_token_signing_alg_values_supported'] = ApiClient.convertToType(data['id_token_signing_alg_values_supported'], ['String']);
      }
      if (data.hasOwnProperty('issuer')) {
        obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
      }
      if (data.hasOwnProperty('jwks_uri')) {
        obj['jwks_uri'] = ApiClient.convertToType(data['jwks_uri'], 'String');
      }
      if (data.hasOwnProperty('registration_endpoint')) {
        obj['registration_endpoint'] = ApiClient.convertToType(data['registration_endpoint'], 'String');
      }
      if (data.hasOwnProperty('request_parameter_supported')) {
        obj['request_parameter_supported'] = ApiClient.convertToType(data['request_parameter_supported'], 'Boolean');
      }
      if (data.hasOwnProperty('request_uri_parameter_supported')) {
        obj['request_uri_parameter_supported'] = ApiClient.convertToType(data['request_uri_parameter_supported'], 'Boolean');
      }
      if (data.hasOwnProperty('require_request_uri_registration')) {
        obj['require_request_uri_registration'] = ApiClient.convertToType(data['require_request_uri_registration'], 'Boolean');
      }
      if (data.hasOwnProperty('response_modes_supported')) {
        obj['response_modes_supported'] = ApiClient.convertToType(data['response_modes_supported'], ['String']);
      }
      if (data.hasOwnProperty('response_types_supported')) {
        obj['response_types_supported'] = ApiClient.convertToType(data['response_types_supported'], ['String']);
      }
      if (data.hasOwnProperty('scopes_supported')) {
        obj['scopes_supported'] = ApiClient.convertToType(data['scopes_supported'], ['String']);
      }
      if (data.hasOwnProperty('subject_types_supported')) {
        obj['subject_types_supported'] = ApiClient.convertToType(data['subject_types_supported'], ['String']);
      }
      if (data.hasOwnProperty('token_endpoint')) {
        obj['token_endpoint'] = ApiClient.convertToType(data['token_endpoint'], 'String');
      }
      if (data.hasOwnProperty('token_endpoint_auth_methods_supported')) {
        obj['token_endpoint_auth_methods_supported'] = ApiClient.convertToType(data['token_endpoint_auth_methods_supported'], ['String']);
      }
      if (data.hasOwnProperty('userinfo_endpoint')) {
        obj['userinfo_endpoint'] = ApiClient.convertToType(data['userinfo_endpoint'], 'String');
      }
      if (data.hasOwnProperty('userinfo_signing_alg_values_supported')) {
        obj['userinfo_signing_alg_values_supported'] = ApiClient.convertToType(data['userinfo_signing_alg_values_supported'], ['String']);
      }
    }
    return obj;
  }

  /**
   * URL of the OP's OAuth 2.0 Authorization Endpoint.
   * @member {String} authorization_endpoint
   */
  exports.prototype['authorization_endpoint'] = undefined;
  /**
   * Boolean value specifying whether the OP supports use of the claims parameter, with true indicating support.
   * @member {Boolean} claims_parameter_supported
   */
  exports.prototype['claims_parameter_supported'] = undefined;
  /**
   * JSON array containing a list of the Claim Names of the Claims that the OpenID Provider MAY be able to supply values for. Note that for privacy or other reasons, this might not be an exhaustive list.
   * @member {Array.<String>} claims_supported
   */
  exports.prototype['claims_supported'] = undefined;
  /**
   * JSON array containing a list of the OAuth 2.0 Grant Type values that this OP supports.
   * @member {Array.<String>} grant_types_supported
   */
  exports.prototype['grant_types_supported'] = undefined;
  /**
   * JSON array containing a list of the JWS signing algorithms (alg values) supported by the OP for the ID Token to encode the Claims in a JWT.
   * @member {Array.<String>} id_token_signing_alg_values_supported
   */
  exports.prototype['id_token_signing_alg_values_supported'] = undefined;
  /**
   * URL using the https scheme with no query or fragment component that the OP asserts as its IssuerURL Identifier. If IssuerURL discovery is supported , this value MUST be identical to the issuer value returned by WebFinger. This also MUST be identical to the iss Claim value in ID Tokens issued from this IssuerURL.
   * @member {String} issuer
   */
  exports.prototype['issuer'] = undefined;
  /**
   * URL of the OP's JSON Web Key Set [JWK] document. This contains the signing key(s) the RP uses to validate signatures from the OP. The JWK Set MAY also contain the Server's encryption key(s), which are used by RPs to encrypt requests to the Server. When both signing and encryption keys are made available, a use (Key Use) parameter value is REQUIRED for all keys in the referenced JWK Set to indicate each key's intended usage. Although some algorithms allow the same key to be used for both signatures and encryption, doing so is NOT RECOMMENDED, as it is less secure. The JWK x5c parameter MAY be used to provide X.509 representations of keys provided. When used, the bare key values MUST still be present and MUST match those in the certificate.
   * @member {String} jwks_uri
   */
  exports.prototype['jwks_uri'] = undefined;
  /**
   * URL of the OP's Dynamic Client Registration Endpoint.
   * @member {String} registration_endpoint
   */
  exports.prototype['registration_endpoint'] = undefined;
  /**
   * Boolean value specifying whether the OP supports use of the request parameter, with true indicating support.
   * @member {Boolean} request_parameter_supported
   */
  exports.prototype['request_parameter_supported'] = undefined;
  /**
   * Boolean value specifying whether the OP supports use of the request_uri parameter, with true indicating support.
   * @member {Boolean} request_uri_parameter_supported
   */
  exports.prototype['request_uri_parameter_supported'] = undefined;
  /**
   * Boolean value specifying whether the OP requires any request_uri values used to be pre-registered using the request_uris registration parameter.
   * @member {Boolean} require_request_uri_registration
   */
  exports.prototype['require_request_uri_registration'] = undefined;
  /**
   * JSON array containing a list of the OAuth 2.0 response_mode values that this OP supports.
   * @member {Array.<String>} response_modes_supported
   */
  exports.prototype['response_modes_supported'] = undefined;
  /**
   * JSON array containing a list of the OAuth 2.0 response_type values that this OP supports. Dynamic OpenID Providers MUST support the code, id_token, and the token id_token Response Type values.
   * @member {Array.<String>} response_types_supported
   */
  exports.prototype['response_types_supported'] = undefined;
  /**
   * SON array containing a list of the OAuth 2.0 [RFC6749] scope values that this server supports. The server MUST support the openid scope value. Servers MAY choose not to advertise some supported scope values even when this parameter is used
   * @member {Array.<String>} scopes_supported
   */
  exports.prototype['scopes_supported'] = undefined;
  /**
   * JSON array containing a list of the Subject Identifier types that this OP supports. Valid types include pairwise and public.
   * @member {Array.<String>} subject_types_supported
   */
  exports.prototype['subject_types_supported'] = undefined;
  /**
   * URL of the OP's OAuth 2.0 Token Endpoint
   * @member {String} token_endpoint
   */
  exports.prototype['token_endpoint'] = undefined;
  /**
   * JSON array containing a list of Client Authentication methods supported by this Token Endpoint. The options are client_secret_post, client_secret_basic, client_secret_jwt, and private_key_jwt, as described in Section 9 of OpenID Connect Core 1.0
   * @member {Array.<String>} token_endpoint_auth_methods_supported
   */
  exports.prototype['token_endpoint_auth_methods_supported'] = undefined;
  /**
   * URL of the OP's UserInfo Endpoint.
   * @member {String} userinfo_endpoint
   */
  exports.prototype['userinfo_endpoint'] = undefined;
  /**
   * JSON array containing a list of the JWS [JWS] signing algorithms (alg values) [JWA] supported by the UserInfo Endpoint to encode the Claims in a JWT [JWT].
   * @member {Array.<String>} userinfo_signing_alg_values_supported
   */
  exports.prototype['userinfo_signing_alg_values_supported'] = undefined;



  return exports;
}));


