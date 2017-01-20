attribute highp vec3 aVertexNormal;
attribute highp vec3 aVertexPosition;
attribute highp vec2 aTextureCoord;



uniform highp mat4 uNormalMatrix;
uniform highp mat4 uMVMatrix;
uniform highp mat4 uPMatrix;

varying highp vec2 vTextureCoord;
varying highp vec3 vLighting;
varying highp vec3 vVertexNormal;
varying highp vec3 vVertexPos;
varying highp vec3 vCamPos;

void main(void) {
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  vTextureCoord = aTextureCoord;
  vec4 vVertexPos4 = uMVMatrix * vec4(aVertexPosition, 1.0);
  vVertexPos = vVertexPos4.xyz/vVertexPos4.w;
  vCamPos = vec3(0,0,6);
  // Apply lighting effect


  highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);
  highp vec3 directionalLightColor = vec3(0.5, 0.5, 0.75);
  highp vec3 directionalVector = vec3(0.85, 0.8, 0.75);


  highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);
  vVertexNormal = transformedNormal.xyz;

}
