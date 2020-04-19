//possibly the final decoding step??

var Storage = {
  Variables: {},
  Triggers: [],
  Fields: [],
  Runnable: [],
  Failure: [],
  Result: [],
  Waitables: 2,
  TotalCompleted: 0,
};
var Learn = {
  Result: "",
  FPItems: [
    "fpa",
    "fpb",
    "fpc",
    "fpd",
    "fpe",
    "fpf",
    "fpg",
    "fph",
    "fpi",
    "fpj",
    "fpk",
    "fpl",
    "fpm",
    "fpn",
    "fpo",
    "fpp",
    "fpq",
    "fpr",
    "fps",
    "fpt",
    "HLL",
    "HLR",
    "HLO",
    "HLB",
    "fpu",
    "fpv",
  ],
  ResultItems: [
    "fpkb",
    "ria",
    "rib",
    "ric",
    "rid",
    "rie",
    "fpq",
    "fph",
    "fpf",
    "fpg",
    "fpe",
    "rif",
    "rig",
    "ril",
    "rih",
    "rihB",
    "riy",
    "riz",
    "fpa",
    "fpb",
    "fpc",
    "fpd",
    "fpi",
    "fpj",
    "fpk",
    "fpm",
    "fpn",
    "fpo",
    "fpp",
    "fpr",
    "rii",
    "fps",
    "fpt",
    "HLL",
    "HLR",
    "HLO",
    "HLB",
    "fpu",
    "fpv",
    "rij",
    "rik",
    "fpw",
    "fpx",
    "dtqq",
    "fpy",
    "fpz",
    "dpi",
    "fpdt",
    "fpem",
    "fpcs",
    "fpnn",
    "fpam",
    "fpcd",
    "fpsl",
    "fpct",
    "fplt",
    "fppc",
    "fpkb",
  ],
  GFPItems: [
    "dtb",
    "dtc",
    "dtd",
    "dte",
    "dtf",
    "dtg",
    "dth",
    "dti",
    "dtj",
    "dtk",
    "dtl",
    "dtnn",
    "dtm",
    "dtn",
    "dto",
    "dtp",
    "dtq",
    "dtr",
    "dtt",
    "dtu",
    "dtv",
    "dtw",
    "dtx",
    "dty",
    "dtz",
    "dtaa",
    "dtqq",
  ],
  Collect: function () {
    var fl = Startup.Unique(Learn.FPItems.concat(Learn.ResultItems));
    for (var i = 0; i < fl.length; i++) {
      try {
        Learn[fl[i]]();
      } catch (e) {
        Storage.Variables[fl[i]] = null;
      }
    }
    var values = [];
    for (var i = 0; i < Learn.GFPItems.length; i++) {
      var value = Storage.Variables[Learn.GFPItems[i]];
      if (
        typeof Storage.Variables[Learn.GFPItems[i]] !== "undefined" &&
        Storage.Variables[Learn.GFPItems[i]] !== null &&
        typeof Storage.Variables[Learn.GFPItems[i]].join !== "undefined"
      ) {
        value = Storage.Variables[Learn.GFPItems[i]].join(";");
      }
      values.push(value);
    }
    Storage.Variables.dtoo = Learn.x64hash128(values.join("~~~"), 31);
    return !0;
  },
  fpa: function () {
    Storage.Variables.dtb = Learn.GetUserAgent();
  },
  fpb: function () {
    Storage.Variables.dtc =
      navigator.language ||
      navigator.userLanguage ||
      navigator.browserLanguage ||
      navigator.systemLanguage ||
      "";
  },
  fpc: function () {
    Storage.Variables.dtd = screen.colorDepth || -1;
  },
  fpd: function () {
    Storage.Variables.dte = window.devicePixelRatio || "";
  },
  fppc: function () {
    try {
      var DD = [];
      try {
        var check_permissions = [
          "accelerometer",
          "accessibility",
          "ambient-light-sensor",
          "camera",
          "clipboard-read",
          "clipboard-write",
          "geolocation",
          "background-sync",
          "magnetometer",
          "microphone",
          "midi",
          "notifications",
          "payment-handler",
          "persistent-storage",
          "push",
        ];
        Array.prototype.forEach.call(check_permissions, function (element) {
          navigator.permissions
            .query({ name: element })
            .then(function (result) {
              if (result && result.state == "granted") {
                DD.push(element);
                Storage.Variables.dtpc = JSON.stringify(DD);
              } else if (result && result.state == "denied") {
                DD.push(element + ":n");
                Storage.Variables.dtpc = JSON.stringify(DD);
              }
            })
            .catch(function (errorObj) {});
        });
      } catch (e) {}
    } catch (e) {}
  },
  fpcs: function () {
    try {
      var DD = [];
      if (window.matchMedia("(-webkit-transform-3d)").matches) {
        DD.push("3d:y");
      }
      if (window.matchMedia("(-webkit-transform-2d)").matches) {
        DD.push("2d:y");
      }
      if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        DD.push("pcs:l");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        DD.push("pcs:d");
      }
      if (window.matchMedia("(prefers-color-scheme: no-preference)").matches) {
        DD.push("pcs:n");
      }
      if (window.matchMedia("(color-gamut: srgb)").matches) {
        DD.push("cg:srgb");
      }
      if (window.matchMedia("(color-gamut: p3)").matches) {
        DD.push("cg:p3");
      }
      if (window.matchMedia("(color-gamut: rec2020)").matches) {
        DD.push("cg:rec");
      }
      if (window.matchMedia("(pointer: fine)").matches) {
        DD.push("p:f");
      }
      if (window.matchMedia("(pointer: coarse)").matches) {
        DD.push("p:c");
      }
      if (window.matchMedia("(pointer: none)").matches) {
        DD.push("p:n");
      }
      if (window.matchMedia("(hover: none)").matches) {
        DD.push("h:n");
      }
      if (window.matchMedia("(hover: hover)").matches) {
        DD.push("h:h");
      }
      if (window.matchMedia("(inverted-colors:none)").matches) {
        DD.push("ic:n");
      }
      if (window.matchMedia("(inverted-colors:inverted)").matches) {
        DD.push("ic:i");
      }
      if (window.matchMedia("(display-mode:fullscreen)").matches) {
        DD.push("dm:f");
      }
      if (window.matchMedia("(display-mode:standalone)").matches) {
        DD.push("dm:s");
      }
      if (window.matchMedia("(display-mode:minimal-ui)").matches) {
        DD.push("dm:m");
      }
      if (window.matchMedia("(display-mode:browser)").matches) {
        DD.push("dm:b");
      }
      if (window.matchMedia("(prefers-reduced-motion:no-preference)").matches) {
        DD.push("prm:n");
      }
      if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
        DD.push("prm:r");
      }
      if (DD !== null && DD !== "") {
        Storage.Variables.dtcm = JSON.stringify(DD);
      }
    } catch (e) {}
  },
  fplt: function () {
    try {
      var DD = [];
      var WL = window.screen.left;
      var WT = window.screen.top;
      if (WL !== undefined && WL !== null) {
        DD.push(WL);
      }
      if (WT !== undefined && WT !== null) {
        DD.push(WT);
      }
      if (DD.length > 0) {
        Storage.Variables.dtlt = JSON.stringify(DD);
      }
    } catch (e) {}
  },
  fpkb: function () {
    try {
      if (window.navigator.keyboard && Startup.InIframe() === !1) {
        window.navigator.keyboard
          .getLayoutMap()
          .then(function (keyboardLayoutMap) {
            Storage.Variables.dtkb =
              keyboardLayoutMap.get("KeyQ") +
              keyboardLayoutMap.get("KeyW") +
              keyboardLayoutMap.get("KeyE") +
              keyboardLayoutMap.get("KeyR") +
              keyboardLayoutMap.get("KeyT") +
              keyboardLayoutMap.get("KeyY") +
              keyboardLayoutMap.get("KeyZ") +
              keyboardLayoutMap.get("KeyX") +
              keyboardLayoutMap.get("KeyC") +
              keyboardLayoutMap.get("KeyV") +
              keyboardLayoutMap.get("KeyB") +
              keyboardLayoutMap.get("KeyN") +
              keyboardLayoutMap.get("KeyM");
            Storage.TotalCompleted++;
          });
      } else {
        Storage.TotalCompleted++;
      }
      return;
    } catch (e) {
      Storage.TotalCompleted++;
    }
  },
  fpct: function () {
    try {
      var connection = {};
      var c =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection ||
        navigator.msConnection;
      if (c !== "undefined" && c !== null) {
        connection.downlink = c.downlink;
        connection.downlinkMax = c.downlinkMax;
        connection.effectiveType = c.effectiveType;
        connection.rtt = c.rtt;
        connection.saveData = c.saveData;
        connection.type = c.type;
        Storage.Variables.dtct = JSON.stringify(connection);
        return;
      }
    } catch (e) {}
  },
  fpsl: function () {
    try {
      var DD = [];

      function populateVoiceList() {
        if (typeof speechSynthesis === "undefined") {
          return;
        }
        var voices = speechSynthesis.getVoices();
        for (i = 0; i < voices.length; i++) {
          if (
            voices[i].name !== "undefined" &&
            voices[i].name !== null &&
            voices[i].name !== ""
          ) {
            DD.push(voices[i].name + "" + voices[i].lang);
          }
        }
        Storage.Variables.dtsl = JSON.stringify(DD);
        return;
      }
      populateVoiceList();
      if (
        typeof speechSynthesis !== "undefined" &&
        speechSynthesis.onvoiceschanged !== undefined
      ) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
      }
    } catch (e) {}
  },
  fpcd: function () {
    try {
      var DD = [];

      function supportsVideoType(type) {
        let video;
        let formats = {
          ogg: 'video/ogg; codecs="theora"',
          ogg2: 'video/ogg;codecs="theora, vorbis"',
          h264: 'video/mp4; codecs="avc1.42E01E"',
          webm: 'video/webm; codecs="vp8, vorbis"',
          "3gpp": 'video/3gpp;codecs="mp4v.20.8, samr"',
          vp9: 'video/webm; codecs="vp9"',
          hls: 'application/x-mpegURL; codecs="avc1.42E01E"',
          flac: "audio/ogg;codecs=flac",
          mp3: "audio/mpeg",
          aif: "audio/x-aiff",
          mp4: 'audio/mp4; codecs="mp4a.40.5"',
          aac: 'audio/mp4; codecs="mp4a.40.2"',
        };
        if (!video) {
          video = document.createElement("video");
        }
        return video.canPlayType(formats[type] || type);
      }
      if (supportsVideoType("webm") === "probably") {
        DD.push("webm");
      }
      if (supportsVideoType("h264") === "probably") {
        DD.push("h264");
      }
      if (supportsVideoType("ogg") === "probably") {
        DD.push("ogg");
      }
      if (supportsVideoType("ogg2") === "probably") {
        DD.push("ogg2");
      }
      if (supportsVideoType("3gpp") === "probably") {
        DD.push("3gpp");
      }
      if (supportsVideoType("vp9") === "probably") {
        DD.push("vp9");
      }
      if (supportsVideoType("hls") === "probably") {
        DD.push("hls");
      }
      if (supportsVideoType("mp3") === "probably") {
        DD.push("mp3");
      }
      if (supportsVideoType("mp4") === "probably") {
        DD.push("mp4");
      }
      if (supportsVideoType("aif") === "probably") {
        DD.push("aif");
      }
      if (supportsVideoType("aac") === "probably") {
        DD.push("aac");
      }
      if (supportsVideoType("flac") === "probably") {
        DD.push("flac");
      }
      if (DD !== null && DD !== "") {
        Storage.Variables.dtcd = JSON.stringify(DD);
      }
    } catch (e) {}
  },
  fpam: function () {
    try {
      var date = new Date(Date.UTC(2020, 11, 12, 3, 0, 0));
      var dateString = date.toLocaleTimeString();
      if (dateString.match(/am|pm/i)) {
        Storage.Variables.dtam = "12";
      } else if (date.toString().match(/am|pm/i)) {
        Storage.Variables.dtam = "12 - Chrome";
      } else {
        Storage.Variables.dtam = "24";
      }
    } catch (e) {}
  },
  fpnn: function () {
    try {
      var props = [];
      var getAllProps = {
        test: function (obj) {
          if (Object.getPrototypeOf(obj) == null) {
            return props;
          }
          return getAllProps(
            Object.getPrototypeOf(obj),
            props.concat(Object.getOwnPropertyNames(obj)),
          );
        },
      };
      getAllProps.test(navigator);
      if (props !== null && props.length > 0) {
        Storage.Variables.dtnt = props.length;
      }
    } catch (e) {}
  },
  fpdt: function () {
    try {
      var dt_settings = new Intl.DateTimeFormat().resolvedOptions();
      if (dt_settings !== null && dt_settings !== "undefined") {
        Storage.Variables.dtdt = JSON.stringify(dt_settings);
      }
    } catch (e) {}
  },
  fpem: function () {
    try {
      if (
        window.navigator.deviceMemory !== undefined &&
        window.navigator.deviceMemory !== null
      ) {
        Storage.Variables.dtme = window.navigator.deviceMemory;
      }
    } catch (e) {}
  },
  fpe: function () {
    Storage.Variables.dtf = window.navigator.hardwareConcurrency || "";
  },
  fpf: function () {
    var resolution = Learn.GetScreenResolution();
    if (resolution !== undefined) {
      Storage.Variables.dtg = "[" + resolution[0] + "," + resolution[1] + "]";
    }
  },
  fpg: function () {
    var resolution = Learn.GetAvailableScreenResolution();
    if (resolution !== undefined) {
      Storage.Variables.dth = "[" + resolution[0] + "," + resolution[1] + "]";
    }
  },
  fph: function () {
    var offset = new Date().getTimezoneOffset();
    Storage.Variables.dti = offset;
  },
  fpi: function () {
    if (Learn.HasSessionStorage()) {
      Storage.Variables.dtj = 1;
    }
  },
  fpj: function () {
    if (Learn.HasLocalStorage()) {
      Storage.Variables.dtk = 1;
    }
  },
  fpk: function () {
    if (Learn.HasIndexedDB()) {
      Storage.Variables.dtl = 1;
    }
  },
  fpl: function () {
    if (document.body && document.body.addBehavior) {
      Storage.Variables.dtnn = 1;
    }
  },
  fpm: function () {
    if (window.openDatabase) {
      Storage.Variables.dtm = 1;
    }
  },
  fpn: function () {
    Storage.Variables.dtn = navigator.cpuClass ? navigator.cpuClass : "unknown";
  },
  fpo: function () {
    Storage.Variables.dto = navigator.platform ? navigator.platform : "unknown";
  },
  fpp: function () {
    Storage.Variables.dtp = Learn.GetDoNotTrack();
  },
  ria: function () {
    try {
      var collect = new (window.OfflineAudioContext ||
        window.webkitOfflineAudioContext)(1, 44100, 44100);
      if (!collect) {
        Storage.Variables.dtll = null;
        return;
      }
      pxi = collect.createOscillator();
      pxi.type = "triangle";
      pxi.frequency.setTargetAtTime(1e4, collect.currentTime, 0);
      compressor = collect.createDynamicsCompressor();
      if (compressor.threshold.setValueAtTime !== undefined) {
        compressor.threshold && compressor.threshold.setValueAtTime(-50, 1);
        compressor.knee && compressor.knee.setValueAtTime(40, 0);
        compressor.ratio && compressor.ratio.setValueAtTime(12, 0);
        compressor.reduction && compressor.reduction.setValueAtTime(-20, 0);
        compressor.attack && compressor.attack.setValueAtTime(0, 0);
        compressor.release && compressor.release.setValueAtTime(0.25, 0);
      } else {
        compressor.threshold && (compressor.threshold.value = -50);
        compressor.knee && (compressor.knee.value = 40);
        compressor.ratio && (compressor.ratio.value = 12);
        compressor.reduction && (compressor.reduction.value = -20);
        compressor.attack && (compressor.attack.value = 0);
        compressor.release && (compressor.release.value = 0.25);
      }
      pxi.connect(compressor);
      compressor.connect(collect.destination);
      pxi.start(0);
      collect.startRendering();
      collect.oncomplete = function (evnt) {
        var data;
        for (var i = 0; i < evnt.renderedBuffer.length; i++) {
          data = data + evnt.renderedBuffer.getChannelData(0)[i].toString();
        }
        Storage.Variables.dtll = Learn.x64hash128(data, 31);
        compressor.disconnect();
      };
      return;
    } catch (u) {}
    Storage.Variables.dtll = null;
  },
  fpq: function () {
    if (Storage.Variables.dtq === undefined) {
      Storage.Variables.dtq = [];
    }
    if (!Learn.IsIE()) {
      for (var i = 0, l = navigator.plugins.length; i < l; i++) {
        Storage.Variables.dtq.push({
          name:
            navigator.plugins[i].name !== undefined
              ? navigator.plugins[i].name
              : null,
          description:
            navigator.plugins[i].description !== undefined
              ? navigator.plugins[i].description
              : null,
          filename:
            navigator.plugins[i].filename !== undefined
              ? navigator.plugins[i].filename
              : null,
        });
      }
    }
    setTimeout(function () {
      var htmlTag = document.getElementsByTagName("html");
      if (htmlTag[0].getAttribute("hc") != null) {
        Storage.Variables.dtq.push({
          name: "HighContrast",
          description: "Chrome high contrast plugin.",
          filename: null,
        });
      }
      if ("FoxyProxy" in window) {
        Storage.Variables.dtq.push({
          name: "FoxyProxy",
          description: "FoxyProxy - proxy management plugin.",
          filename: null,
        });
      }
    }, 1);
  },
  fpr: function () {
    try {
      var result = [];
      var canvas = document.createElement("canvas");
      canvas.width = 2000;
      canvas.height = 200;
      canvas.style.display = "inline";
      var ctx = canvas.getContext("2d");
      ctx.rect(0, 0, 10, 10);
      ctx.rect(2, 2, 6, 6);
      result.push(
        "canvas winding:" +
          (ctx.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no"),
      );
      ctx.textBaseline = "alphabetic";
      ctx.fillStyle = "#f60";
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = "#069";
      ctx.font = "11pt no-real-font-123";
      ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);
      ctx.fillStyle = "rgba(102, 204, 0, 0.2)";
      ctx.font = "18pt Arial";
      ctx.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = "rgb(255,0,255)";
      ctx.beginPath();
      ctx.arc(50, 50, 50, 0, Math.PI * 2, !0);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgb(0,255,255)";
      ctx.beginPath();
      ctx.arc(100, 50, 50, 0, Math.PI * 2, !0);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgb(255,255,0)";
      ctx.beginPath();
      ctx.arc(75, 100, 50, 0, Math.PI * 2, !0);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgb(255,0,255)";
      ctx.arc(75, 75, 75, 0, Math.PI * 2, !0);
      ctx.arc(75, 75, 25, 0, Math.PI * 2, !0);
      ctx.fill("evenodd");
      Storage.Variables.dtr = Learn.x64hash128(canvas.toDataURL(), 31);
    } catch (e) {
      Storage.Variables.dtr = null;
    }
  },
  fps: function () {
    var gl;
    var fa2s = function (fa) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      return "[" + fa[0] + ", " + fa[1] + "]";
    };
    var maxAnisotropy = function (gl) {
      var anisotropy,
        ext =
          gl.getExtension("EXT_texture_filter_anisotropic") ||
          gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
          gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
      return ext
        ? ((anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),
          0 === anisotropy && (anisotropy = 2),
          anisotropy)
        : null;
    };
    gl = Learn.GetWebGLCanvas();
    if (!gl) {
      return (Storage.Variables.dtt = null);
    }
    var result = [];
    var vShaderTemplate =
      "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
    var fShaderTemplate =
      "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
    var vertexPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
    var vertices = new Float32Array([
      -0.2,
      -0.9,
      0,
      0.4,
      -0.26,
      0,
      0,
      0.732134444,
      0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    vertexPosBuffer.itemSize = 3;
    vertexPosBuffer.numItems = 3;
    var program = gl.createProgram(),
      vshader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vshader, vShaderTemplate);
    gl.compileShader(vshader);
    var fshader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fshader, fShaderTemplate);
    gl.compileShader(fshader);
    gl.attachShader(program, vshader);
    gl.attachShader(program, fshader);
    gl.linkProgram(program);
    gl.useProgram(program);
    program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex");
    program.offsetUniform = gl.getUniformLocation(program, "uniformOffset");
    gl.enableVertexAttribArray(program.vertexPosArray);
    gl.vertexAttribPointer(
      program.vertexPosAttrib,
      vertexPosBuffer.itemSize,
      gl.FLOAT,
      !1,
      0,
      0,
    );
    gl.uniform2f(program.offsetUniform, 1, 1);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
    if (gl.canvas != null) {
      try {
        result.push(gl.canvas.toDataURL());
      } catch (e) {}
    }
    if (gl.getSupportedExtensions() !== null) {
      result.push("extensions:" + gl.getSupportedExtensions().join(";"));
    }
    result.push(
      "webgl aliased line width range:" +
        fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)),
    );
    result.push(
      "webgl aliased point size range:" +
        fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)),
    );
    result.push("webgl alpha bits:" + gl.getParameter(gl.ALPHA_BITS));
    try {
      result.push(
        "webgl antialiasing:" +
          (gl.getContextAttributes().antialias ? "yes" : "no"),
      );
    } catch (e) {}
    result.push("webgl blue bits:" + gl.getParameter(gl.BLUE_BITS));
    result.push("webgl depth bits:" + gl.getParameter(gl.DEPTH_BITS));
    result.push("webgl green bits:" + gl.getParameter(gl.GREEN_BITS));
    result.push("webgl max anisotropy:" + maxAnisotropy(gl));
    result.push(
      "webgl max combined texture image units:" +
        gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
    );
    result.push(
      "webgl max cube map texture size:" +
        gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),
    );
    result.push(
      "webgl max fragment uniform vectors:" +
        gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
    );
    result.push(
      "webgl max render buffer size:" +
        gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
    );
    result.push(
      "webgl max texture image units:" +
        gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
    );
    result.push(
      "webgl max texture size:" + gl.getParameter(gl.MAX_TEXTURE_SIZE),
    );
    result.push(
      "webgl max varying vectors:" + gl.getParameter(gl.MAX_VARYING_VECTORS),
    );
    result.push(
      "webgl max vertex attribs:" + gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
    );
    result.push(
      "webgl max vertex texture image units:" +
        gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    );
    result.push(
      "webgl max vertex uniform vectors:" +
        gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
    );
    result.push(
      "webgl max viewport dims:" + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)),
    );
    result.push("webgl red bits:" + gl.getParameter(gl.RED_BITS));
    result.push("webgl renderer:" + gl.getParameter(gl.RENDERER));
    result.push(
      "webgl shading language version:" +
        gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
    );
    result.push("webgl stencil bits:" + gl.getParameter(gl.STENCIL_BITS));
    result.push("webgl vendor:" + gl.getParameter(gl.VENDOR));
    result.push("webgl version:" + gl.getParameter(gl.VERSION));
    try {
      var extensionDebugRendererInfo = gl.getExtension(
        "WEBGL_debug_renderer_info",
      );
      if (extensionDebugRendererInfo) {
        var graphics_card = gl.getParameter(
          extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL,
        );
        if (graphics_card.match(/\((.*)\)/) !== null) {
          graphics_card = graphics_card.match(/\((.*)\)/);
          Storage.Variables.dts =
            graphics_card[1] !== undefined ? graphics_card[1] : null;
        } else {
          Storage.Variables.dts = graphics_card;
        }
        if (Storage.Variables.dts.match(/Iris Pro/) !== null) {
          Storage.Variables.dts = "Iris Pro";
        } else if (Storage.Variables.dts.match(/Iris/) !== null) {
          Storage.Variables.dts = "Iris";
        }
        result.push(
          "webgl unmasked vendor:" +
            gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),
        );
        result.push(
          "webgl unmasked renderer:" +
            gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),
        );
      }
    } catch (e) {}
    if (!gl.getShaderPrecisionFormat) {
      return (Storage.Variables.dtt = Learn.x64hash128(result.join("~"), 31));
    }
    result.push(
      "webgl vertex shader high float precision:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision,
    );
    result.push(
      "webgl vertex shader high float precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMin,
    );
    result.push(
      "webgl vertex shader high float precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).rangeMax,
    );
    result.push(
      "webgl vertex shader medium float precision:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT)
          .precision,
    );
    result.push(
      "webgl vertex shader medium float precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMin,
    );
    result.push(
      "webgl vertex shader medium float precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).rangeMax,
    );
    result.push(
      "webgl vertex shader low float precision:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).precision,
    );
    result.push(
      "webgl vertex shader low float precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMin,
    );
    result.push(
      "webgl vertex shader low float precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_FLOAT).rangeMax,
    );
    result.push(
      "webgl fragment shader high float precision:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT)
          .precision,
    );
    result.push(
      "webgl fragment shader high float precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMin,
    );
    result.push(
      "webgl fragment shader high float precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).rangeMax,
    );
    result.push(
      "webgl fragment shader medium float precision:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT)
          .precision,
    );
    result.push(
      "webgl fragment shader medium float precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT)
          .rangeMin,
    );
    result.push(
      "webgl fragment shader medium float precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT)
          .rangeMax,
    );
    result.push(
      "webgl fragment shader low float precision:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).precision,
    );
    result.push(
      "webgl fragment shader low float precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMin,
    );
    result.push(
      "webgl fragment shader low float precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_FLOAT).rangeMax,
    );
    result.push(
      "webgl vertex shader high int precision:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).precision,
    );
    result.push(
      "webgl vertex shader high int precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).rangeMin,
    );
    result.push(
      "webgl vertex shader high int precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_INT).rangeMax,
    );
    result.push(
      "webgl vertex shader medium int precision:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).precision,
    );
    result.push(
      "webgl vertex shader medium int precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).rangeMin,
    );
    result.push(
      "webgl vertex shader medium int precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_INT).rangeMax,
    );
    result.push(
      "webgl vertex shader low int precision:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).precision,
    );
    result.push(
      "webgl vertex shader low int precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).rangeMin,
    );
    result.push(
      "webgl vertex shader low int precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.LOW_INT).rangeMax,
    );
    result.push(
      "webgl fragment shader high int precision:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).precision,
    );
    result.push(
      "webgl fragment shader high int precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).rangeMin,
    );
    result.push(
      "webgl fragment shader high int precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_INT).rangeMax,
    );
    result.push(
      "webgl fragment shader medium int precision:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT)
          .precision,
    );
    result.push(
      "webgl fragment shader medium int precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).rangeMin,
    );
    result.push(
      "webgl fragment shader medium int precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_INT).rangeMax,
    );
    result.push(
      "webgl fragment shader low int precision:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).precision,
    );
    result.push(
      "webgl fragment shader low int precision rangeMin:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMin,
    );
    result.push(
      "webgl fragment shader low int precision rangeMax:" +
        gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.LOW_INT).rangeMax,
    );
    return (Storage.Variables.dtt = Learn.x64hash128(result.join("~"), 31));
  },
  fpt: function () {
    var ads = document.createElement("div");
    ads.innerHTML = "&nbsp;";
    ads.className = "adsbox";
    var result = !1;
    try {
      document.body.appendChild(ads);
      result = document.getElementsByClassName("adsbox")[0].offsetHeight === 0;
      document.body.removeChild(ads);
    } catch (e) {
      result = !1;
    }
    Storage.Variables.dtu = result;
  },
  HLL: function () {
    var result = !1;
    if (typeof navigator.languages !== "undefined") {
      try {
        var firstLanguages = navigator.languages[0].substr(0, 2);
        if (firstLanguages !== navigator.language.substr(0, 2)) {
          result = !0;
        }
      } catch (err) {
        result = !0;
      }
    }
    Storage.Variables.dtv = result;
  },
  HLR: function () {
    var result = !1;
    if (screen.width < screen.availWidth) {
      result = !0;
    }
    if (screen.height < screen.availHeight) {
      result = !0;
    }
    Storage.Variables.dtw = result;
  },
  HLO: function () {
    var userAgent = navigator.userAgent.toLowerCase();
    var oscpu = navigator.oscpu;
    var platform = navigator.platform.toLowerCase();
    var os;
    if (userAgent.indexOf("windows phone") >= 0) {
      os = "Windows Phone";
    } else if (userAgent.indexOf("win") >= 0) {
      os = "Windows";
    } else if (userAgent.indexOf("android") >= 0) {
      os = "Android";
    } else if (userAgent.indexOf("linux") >= 0) {
      os = "Linux";
    } else if (
      userAgent.indexOf("iphone") >= 0 ||
      userAgent.indexOf("ipad") >= 0
    ) {
      os = "iOS";
    } else if (userAgent.indexOf("mac") >= 0) {
      os = "Mac";
    } else {
      os = "Other";
    }
    var mobileDevice;
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    ) {
      mobileDevice = !0;
    } else {
      mobileDevice = !1;
    }
    if (
      mobileDevice &&
      os !== "Windows Phone" &&
      os !== "Android" &&
      os !== "iOS" &&
      os !== "Other"
    ) {
    }
    if (typeof oscpu !== "undefined") {
      oscpu = oscpu.toLowerCase();
      if (
        oscpu.indexOf("win") >= 0 &&
        os !== "Windows" &&
        os !== "Windows Phone"
      ) {
        return (Storage.Variables.dtx = !0);
      } else if (
        oscpu.indexOf("linux") >= 0 &&
        os !== "Linux" &&
        os !== "Android"
      ) {
        return (Storage.Variables.dtx = !0);
      } else if (oscpu.indexOf("mac") >= 0 && os !== "Mac" && os !== "iOS") {
        return (Storage.Variables.dtx = !0);
      } else if (
        oscpu.indexOf("win") === 0 &&
        oscpu.indexOf("linux") === 0 &&
        oscpu.indexOf("mac") >= 0 &&
        os !== "other"
      ) {
        return (Storage.Variables.dtx = !0);
      }
    }
    if (
      platform.indexOf("win") >= 0 &&
      os !== "Windows" &&
      os !== "Windows Phone"
    ) {
      return (Storage.Variables.dtx = !0);
    } else if (
      (platform.indexOf("linux") >= 0 ||
        platform.indexOf("android") >= 0 ||
        platform.indexOf("pike") >= 0) &&
      os !== "Linux" &&
      os !== "Android"
    ) {
      return (Storage.Variables.dtx = !0);
    } else if (
      (platform.indexOf("mac") >= 0 ||
        platform.indexOf("ipad") >= 0 ||
        platform.indexOf("ipod") >= 0 ||
        platform.indexOf("iphone") >= 0) &&
      os !== "Mac" &&
      os !== "iOS"
    ) {
      return (Storage.Variables.dtx = !0);
    } else if (
      platform.indexOf("win") === 0 &&
      platform.indexOf("linux") === 0 &&
      platform.indexOf("mac") >= 0 &&
      os !== "other"
    ) {
      return (Storage.Variables.dtx = !0);
    }
    if (
      typeof navigator.plugins === "undefined" &&
      os !== "Windows" &&
      os !== "Windows Phone"
    ) {
      return (Storage.Variables.dtx = !0);
    }
    if (Storage.Variables.dtx === undefined) {
      return (Storage.Variables.dtx = !1);
    }
  },
  HLB: function () {
    var userAgent = navigator.userAgent.toLowerCase();
    var productSub = navigator.productSub;
    var browser;
    if (userAgent.indexOf("firefox") >= 0) {
      browser = "Firefox";
    } else if (
      userAgent.indexOf("opera") >= 0 ||
      userAgent.indexOf("opr") >= 0
    ) {
      browser = "Opera";
    } else if (userAgent.indexOf("chrome") >= 0) {
      browser = "Chrome";
    } else if (userAgent.indexOf("safari") >= 0) {
      browser = "Safari";
    } else if (userAgent.indexOf("trident") >= 0) {
      browser = "Internet Explorer";
    } else {
      browser = "Other";
    }
    if (
      (browser === "Chrome" || browser === "Safari" || browser === "Opera") &&
      productSub !== "20030107"
    ) {
      return (Storage.Variables.dty = !0);
    }
    var tempRes = eval.toString().length;
    if (
      tempRes === 37 &&
      browser !== "Safari" &&
      browser !== "Firefox" &&
      browser !== "Other"
    ) {
      return (Storage.Variables.dty = !0);
    } else if (
      tempRes === 39 &&
      browser !== "Internet Explorer" &&
      browser !== "Other"
    ) {
      return (Storage.Variables.dty = !0);
    } else if (
      tempRes === 33 &&
      browser !== "Chrome" &&
      browser !== "Opera" &&
      browser !== "Other"
    ) {
      return (Storage.Variables.dty = !0);
    }
    var errFirefox;
    try {
      throw "a";
    } catch (err) {
      try {
        err.toSource();
        errFirefox = !0;
      } catch (errOfErr) {
        errFirefox = !1;
      }
    }
    if (errFirefox && browser !== "Firefox" && browser !== "Other") {
      return (Storage.Variables.dty = !0);
    }
    if (Storage.Variables.dty === undefined) {
      return (Storage.Variables.dty = !1);
    }
  },
  fpu: function () {
    var maxTouchPoints = 0;
    var touchEvent = !1;
    if (typeof navigator.maxTouchPoints !== "undefined") {
      maxTouchPoints = navigator.maxTouchPoints;
    } else if (typeof navigator.msMaxTouchPoints !== "undefined") {
      maxTouchPoints = navigator.msMaxTouchPoints;
    }
    try {
      document.createEvent("TouchEvent");
      touchEvent = !0;
    } catch (_) {}
    var touchStart = "ontouchstart" in window;
    Storage.Variables.dtz =
      "[" +
      maxTouchPoints +
      "," +
      (touchEvent ? "true" : "false") +
      "," +
      (touchStart ? "true" : "false") +
      "]";
  },
  fpw: function () {
    Storage.Variables.dtrr = !1;
    if (top != window) {
      Storage.Variables.dtrr = !0;
    }
    if (top != self) {
      Storage.Variables.dtrr = !0;
    }
  },
  fpx: function () {
    Storage.Variables.dtss = !1;
    try {
      var _0x5b69 = [
        "undefined",
        "hidden",
        "dtss",
        "Variables",
        "mozHidden",
        "msHidden",
        "webkitHidden",
      ];
      var d = document;
      if (!(_0x5b69[0] != typeof d[_0x5b69[1]] || !d[_0x5b69[1]])) {
        Storage.Variables.dtss = !0;
      }
      if (!(_0x5b69[0] != typeof d[_0x5b69[4]] || !d[_0x5b69[4]])) {
        Storage.Variables.dtss = !0;
      }
      if (!(_0x5b69[0] != typeof d[_0x5b69[5]] || !d[_0x5b69[5]])) {
        Storage.Variables.dtss = !0;
      }
      if (!(_0x5b69[0] == typeof d[_0x5b69[6]] || !d[_0x5b69[6]])) {
        Storage.Variables.dtss = !0;
      }
      if (document[_0x5b69[1]]) {
        Storage.Variables.dtss = !0;
      }
    } catch (e) {}
  },
  fpy: function () {
    Storage.Variables.dttt = !1;
    var _0xa529 = [
      "width",
      "not an object",
      "indexOf",
      "dttt",
      "Variables",
      "s",
      "Cannot read",
      "c",
      "e is undefined",
      "f",
      "Unable to get property 'width' of undefined or null reference",
      "documentMode",
      "StyleMedia",
      "e",
      "i",
    ];
    try {
      var e;
      var f = e[_0xa529[0]];
    } catch (e) {
      var err = e.toString();
      if (err[_0xa529[2]](_0xa529[1]) !== -1) {
        Storage[_0xa529[4]][_0xa529[3]] = _0xa529[5];
      } else {
        if (err[_0xa529[2]](_0xa529[6]) !== -1) {
          Storage[_0xa529[4]][_0xa529[3]] = _0xa529[7];
        } else {
          if (err[_0xa529[2]](_0xa529[8]) !== -1) {
            Storage[_0xa529[4]][_0xa529[3]] = _0xa529[9];
          } else {
            if (err[_0xa529[2]](_0xa529[10]) !== -1) {
              if (!(!1 || !!document[_0xa529[11]]) && !!window[_0xa529[12]]) {
                Storage[_0xa529[4]][_0xa529[3]] = _0xa529[13];
              } else {
                Storage[_0xa529[4]][_0xa529[3]] = _0xa529[14];
              }
            }
          }
        }
      }
    }
  },
  fpz: function () {
    Storage.Variables.dtuu = !1;
    var _0x63ef = [
      "opr",
      "addons",
      "opera",
      " OPR/",
      "indexOf",
      "userAgent",
      "dtuu",
      "Variables",
      "o",
      "undefined",
      "f",
      "documentMode",
      "i",
      "StyleMedia",
      "e",
      "chrome",
      "webstore",
      "c",
    ];
    try {
      if (
        (!!window[_0x63ef[0]] && !!opr[_0x63ef[1]]) ||
        !!window[_0x63ef[2]] ||
        navigator[_0x63ef[5]][_0x63ef[4]](_0x63ef[3]) >= 0
      ) {
        Storage[_0x63ef[7]][_0x63ef[6]] = _0x63ef[8];
      } else {
        if (typeof InstallTrigger !== _0x63ef[9]) {
          Storage[_0x63ef[7]][_0x63ef[6]] = _0x63ef[10];
        } else {
          if (!1 || !!document[_0x63ef[11]]) {
            Storage[_0x63ef[7]][_0x63ef[6]] = _0x63ef[12];
          } else {
            if (!!window[_0x63ef[13]]) {
              Storage[_0x63ef[7]][_0x63ef[6]] = _0x63ef[14];
            } else {
              if (!!window[_0x63ef[15]] && !!window[_0x63ef[15]][_0x63ef[16]]) {
                Storage[_0x63ef[7]][_0x63ef[6]] = _0x63ef[17];
              }
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  },
  dtqq: function () {
    try {
      Storage.Variables.dtqq = navigator.javaEnabled();
    } catch (m) {
      Storage.Variables.dtqq = !1;
    }
  },
  fpv: function () {
    var baseFonts = ["monospace", "sans-serif", "serif"];
    var fontList = ["Arial", "Arial Black", "Times New Roman"];
    var _0xb2cf = [
      ".VnArialH",
      "Abadi MT Condensed Light",
      "Adobe Fangsong Std",
      "Adobe Ming Std",
      "after 45'",
      "Agency FB",
      "Aharoni",
      "American Typewriter",
      "Andale Mono",
      "Andalus",
      "Angsana New",
      "Angsana",
      "Apple Braille",
      "Apple Chancery",
      "Apple Color Emoji",
      "Apple LiSung Light",
      "Apple Symbols",
      "AR PL SungtiL GB",
      "AR PL UKai CN",
      "AR PL UMing TW",
      "Arabic Typesetting",
      "Arial Narrow",
      "Arial Rounded MT Bold",
      "Arial Unicode MS",
      "Arimo",
      "Avenir",
      "Arial Nova",
      "Bailey'sCar",
      "Baskerville",
      "Baskerville Old Face",
      "Batang",
      "BatangChe",
      "Bauhaus 93",
      "Bernard MT Condensed",
      "BiauKai",
      "Bitstream Vera Sans",
      "Bodoni MT",
      "Book Antiqua",
      "Bookman Old Style",
      "Bookshelf Symbol 7",
      "Braggadocio",
      "Britannic Bold",
      "Browallia New",
      "Brush Script MT",
      "Cambria",
      "Casual",
      "Centaur",
      "Century Gothic",
      "Century Schoolbook",
      "Chalkduster",
      "Cochin",
      "Colonna MT",
      "Comic Sans MS",
      "Copperplate",
      "Courier",
      "Courier New",
      "Dad's Recipe",
      "DecoType Naskh",
      "DejaVu Sans",
      "DejaVu LGC Sans Mono",
      "DFKai-SB",
      "DingDong Signs o' the Times",
      "DokChampa",
      "Droid Sans",
      "Droid Sans Mono",
      "Droid Serif",
      "Ebrima",
      "Engravers' Gothic BT",
      "Eras Bold ITC",
      "Estrangelo Edessa",
      "Euphemia UCAS",
      "Eurostile",
      "Footlight MT Light",
      "Forte",
      "Franklin Gothic Medium",
      "French Script MT",
      "Garamond",
      "Gautami",
      "GB18030 Bitmap",
      "Geneva",
      "Georgia",
      "Gill Sans",
      "Gill Sans Ultra Bold",
      "Gisha",
      "Gloucester MT Extra Condensed",
      "Gulim",
      "GulimChe",
      "GungsuhChe",
      "Haettenschweiler",
      "Heiti SC",
      "Helvetica",
      "Helvetica Neue",
      "Hiragino Sans GB",
      "Hoefler Text",
      "Impact",
      "Informal Roman",
      "KacstOne",
      "KaiTi",
      "Kino MT",
      "Korean Generic1",
      "Kozuka Gothic Pr6N",
      "Lao UI",
      "Lato",
      "Lemon Milk",
      "Leelawadee",
      "Levenim MT",
      "LiHei Pro",
      "Lohit Gujarati",
      "Lohit Punjabi",
      "Loma",
      "Lora",
      "Lucida Console",
      "Lucida Grande",
      "Lucida Handwriting",
      "Lucida Sans",
      "Lucida Sans Typewriter",
      "Mangal",
      "Marlett",
      "Meiryo",
      "Meiryo UI",
      "Microsoft Himalaya",
      "Microsoft JhengHei",
      "Microsoft Sans Serif",
      "Microsoft Uighur",
      "Microsoft YaHei",
      "Mini Pics L'il Edibles Regular",
      "Miriam Fixed",
      "Mistral",
      "Monaco",
      "Monotype Corsiva",
      "Montserrat",
      "MS Mincho",
      "MS PGothic",
      "MS Reference Specialty",
      "MS Serif",
      "MS UI Gothic",
      "Mshtakan",
      "MT Extra",
      "Nadeem",
      "New Peninim MT",
      "News Gothic MT",
      "Noto Naskh Arabic",
      "Noto Sans Bengali",
      "Noto Sans KR",
      "Noto Sans Lao",
      "Noto Sans SC",
      "Noto Sans Sinhala",
      "Noto Sans Thai",
      "Noto Sans Yi",
      "Noto Serif",
      "NSimSun",
      "Open Sans",
      "Osaka",
      "Oswald",
      "Palatino",
      "Palatino Linotype",
      "Papyrus",
      "PingFang SC",
      "Plantagenet Cherokee",
      "PMingLiU",
      "PT Sans",
      "PT Serif",
      "Rachana",
      "Raleway",
      "Roboto",
      "Rockwell",
      "Sawasdee",
      "Script MT Bold",
      "Segoe UI",
      "Segoe UI Historic",
      "SimHei",
      "SimSun",
      "Source Sans Pro",
      "STFangsong",
      "STHeiti",
      "Sylfaen",
      "Symbol",
      "Tahoma",
      "Tempus Sans ITC",
      "Times New Roman Cyr",
      "TL Help Cyrillic",
      "Trebuchet MS",
      "Tunga",
      "Tw Cen MT",
      "Tw Cen MT Condensed Extra Bold",
      "Ubuntu",
      "UnBatang",
      "URW Bookman L",
      "UVN Han Viet",
      "Verdana",
      "VI Arial",
      "VI Avan H",
      "VI Book H",
      "VI Times",
      "Vietnam",
      "Vietnamese font",
      "VN Times",
      "VNarial",
      "VNI Russia",
      "VNI Times",
      "VNI-Helve",
      "VNIJapan",
      "VNI-US",
      "VNI-Viettay",
      "VN-NTime",
      "VNtimes new roman",
      "VPS Can Tho",
      "VPS Dong Da Hoa",
      "VPS Tuyen Duc",
      "Vrinda",
      "VU Minh Quan",
      "Webdings",
      "WenQuanYi Zen Hei",
      "Wide Latin'",
      "Wingdings",
      "WP CyrillicA",
      "Zapf Dingbats",
      "Zapfino",
      "Diwani Letter",
      "KFGQPC Uthmanic Script HAFS Regular",
      "nhMinh 1.1",
      "UD Digi KyoKasho N-R",
      "ER Bukinist 1251",
      "Bikham Cyr Script",
      "Loki Cola",
      "Nirmala UI",
      "Leelawadee UI",
      "Sitka Display",
      "Aldhabi",
      "Urdu Typesetting",
      "Great Vibes",
      "Alex Brush",
      "Bebas Neue",
      "Amatic",
      "Quicksand",
      "ChunkFive",
      "Yuanti SC",
      "KaiTi_GB2312",
      "PingFang HK",
      "Kaiti SC",
      "Adobe Naskh Medium",
      "WP Arabic Sihafa",
      "WP Greek Courier",
      "WP MultinationalA Courier",
      "TeamViewer15",
      "TeamViewer14",
      "TeamViewer12",
      "TeamViewer8",
      "GreekC",
      "Dutch801 Rm BT",
      "Courier New CE",
      "Symath",
      "WST_Fren",
      "OCR A Extended",
      "OCR A Std",
      "Tajawal ExtraLight",
      "Monadi",
      "Kawkab Mono",
      "Ah naskh hadith",
      "VCR OSD Mono",
      "Minecraft",
      "Paskowy",
      "Vogue",
      "Mermaid",
      "Cinzel",
      "Optimus Princeps",
      "Timeless",
      "Edition",
      "Linux Libertine",
      "Bodoni XT",
      "Gang of Three",
      "Alhambra",
      "XXII Arabian Onenightstand",
      "Roman SD",
      "Samarkan",
      "Zenzai Itacha",
      "Vonique 64",
      "Arab Dances",
      "Traveling Typewriter",
      "Old London",
      "Cloister Black",
      "Hanging Letters",
      "Badaboom BB",
      "Blacklisted",
      "BubbleGum",
      "Grobold",
      "American Captain",
      "Cheri",
      "Harry P",
      "Star Jedi",
      "Avengeance Heroic Avenger",
      "DS-Digital",
      "Hello",
      "Barcode Font",
      "Social Logos",
      "Poppins",
      "Puritan",
      "Playfair Display",
      "Titillium",
      "Kaushan Script",
      "Pacifico",
      "Josefin Sans",
    ];
    var extendedFontList = [
      _0xb2cf[0],
      _0xb2cf[1],
      _0xb2cf[2],
      _0xb2cf[3],
      _0xb2cf[4],
      _0xb2cf[5],
      _0xb2cf[6],
      _0xb2cf[7],
      _0xb2cf[8],
      _0xb2cf[9],
      _0xb2cf[10],
      _0xb2cf[11],
      _0xb2cf[12],
      _0xb2cf[13],
      _0xb2cf[14],
      _0xb2cf[15],
      _0xb2cf[16],
      _0xb2cf[17],
      _0xb2cf[18],
      _0xb2cf[19],
      _0xb2cf[20],
      _0xb2cf[21],
      _0xb2cf[22],
      _0xb2cf[23],
      _0xb2cf[24],
      _0xb2cf[25],
      _0xb2cf[26],
      _0xb2cf[27],
      _0xb2cf[28],
      _0xb2cf[29],
      _0xb2cf[30],
      _0xb2cf[31],
      _0xb2cf[32],
      _0xb2cf[33],
      _0xb2cf[34],
      _0xb2cf[35],
      _0xb2cf[36],
      _0xb2cf[37],
      _0xb2cf[38],
      _0xb2cf[39],
      _0xb2cf[40],
      _0xb2cf[41],
      _0xb2cf[42],
      _0xb2cf[43],
      _0xb2cf[44],
      _0xb2cf[45],
      _0xb2cf[46],
      _0xb2cf[47],
      _0xb2cf[48],
      _0xb2cf[49],
      _0xb2cf[50],
      _0xb2cf[51],
      _0xb2cf[52],
      _0xb2cf[53],
      _0xb2cf[54],
      _0xb2cf[55],
      _0xb2cf[56],
      _0xb2cf[57],
      _0xb2cf[58],
      _0xb2cf[59],
      _0xb2cf[60],
      _0xb2cf[61],
      _0xb2cf[62],
      _0xb2cf[63],
      _0xb2cf[64],
      _0xb2cf[65],
      _0xb2cf[66],
      _0xb2cf[67],
      _0xb2cf[68],
      _0xb2cf[69],
      _0xb2cf[70],
      _0xb2cf[71],
      _0xb2cf[72],
      _0xb2cf[73],
      _0xb2cf[74],
      _0xb2cf[75],
      _0xb2cf[76],
      _0xb2cf[77],
      _0xb2cf[78],
      _0xb2cf[79],
      _0xb2cf[80],
      _0xb2cf[81],
      _0xb2cf[82],
      _0xb2cf[83],
      _0xb2cf[84],
      _0xb2cf[85],
      _0xb2cf[86],
      _0xb2cf[87],
      _0xb2cf[88],
      _0xb2cf[89],
      _0xb2cf[90],
      _0xb2cf[91],
      _0xb2cf[92],
      _0xb2cf[93],
      _0xb2cf[94],
      _0xb2cf[95],
      _0xb2cf[96],
      _0xb2cf[97],
      _0xb2cf[98],
      _0xb2cf[99],
      _0xb2cf[100],
      _0xb2cf[101],
      _0xb2cf[102],
      _0xb2cf[103],
      _0xb2cf[104],
      _0xb2cf[105],
      _0xb2cf[106],
      _0xb2cf[107],
      _0xb2cf[108],
      _0xb2cf[109],
      _0xb2cf[110],
      _0xb2cf[111],
      _0xb2cf[112],
      _0xb2cf[113],
      _0xb2cf[114],
      _0xb2cf[115],
      _0xb2cf[116],
      _0xb2cf[117],
      _0xb2cf[118],
      _0xb2cf[119],
      _0xb2cf[120],
      _0xb2cf[121],
      _0xb2cf[122],
      _0xb2cf[123],
      _0xb2cf[124],
      _0xb2cf[125],
      _0xb2cf[126],
      _0xb2cf[127],
      _0xb2cf[128],
      _0xb2cf[129],
      _0xb2cf[130],
      _0xb2cf[131],
      _0xb2cf[132],
      _0xb2cf[133],
      _0xb2cf[134],
      _0xb2cf[135],
      _0xb2cf[136],
      _0xb2cf[137],
      _0xb2cf[138],
      _0xb2cf[139],
      _0xb2cf[140],
      _0xb2cf[141],
      _0xb2cf[142],
      _0xb2cf[143],
      _0xb2cf[144],
      _0xb2cf[145],
      _0xb2cf[146],
      _0xb2cf[147],
      _0xb2cf[148],
      _0xb2cf[149],
      _0xb2cf[150],
      _0xb2cf[151],
      _0xb2cf[152],
      _0xb2cf[153],
      _0xb2cf[154],
      _0xb2cf[155],
      _0xb2cf[156],
      _0xb2cf[157],
      _0xb2cf[158],
      _0xb2cf[159],
      _0xb2cf[160],
      _0xb2cf[161],
      _0xb2cf[162],
      _0xb2cf[163],
      _0xb2cf[164],
      _0xb2cf[165],
      _0xb2cf[166],
      _0xb2cf[167],
      _0xb2cf[168],
      _0xb2cf[169],
      _0xb2cf[170],
      _0xb2cf[171],
      _0xb2cf[172],
      _0xb2cf[173],
      _0xb2cf[174],
      _0xb2cf[175],
      _0xb2cf[176],
      _0xb2cf[177],
      _0xb2cf[178],
      _0xb2cf[179],
      _0xb2cf[180],
      _0xb2cf[181],
      _0xb2cf[182],
      _0xb2cf[183],
      _0xb2cf[184],
      _0xb2cf[185],
      _0xb2cf[186],
      _0xb2cf[187],
      _0xb2cf[188],
      _0xb2cf[189],
      _0xb2cf[190],
      _0xb2cf[191],
      _0xb2cf[192],
      _0xb2cf[193],
      _0xb2cf[194],
      _0xb2cf[195],
      _0xb2cf[196],
      _0xb2cf[197],
      _0xb2cf[198],
      _0xb2cf[199],
      _0xb2cf[200],
      _0xb2cf[201],
      _0xb2cf[202],
      _0xb2cf[203],
      _0xb2cf[204],
      _0xb2cf[205],
      _0xb2cf[206],
      _0xb2cf[207],
      _0xb2cf[208],
      _0xb2cf[209],
      _0xb2cf[210],
      _0xb2cf[211],
      _0xb2cf[212],
      _0xb2cf[213],
      _0xb2cf[214],
      _0xb2cf[215],
      _0xb2cf[216],
      _0xb2cf[217],
      _0xb2cf[218],
      _0xb2cf[219],
      _0xb2cf[220],
      _0xb2cf[221],
      _0xb2cf[222],
      _0xb2cf[223],
      _0xb2cf[224],
      _0xb2cf[225],
      _0xb2cf[226],
      _0xb2cf[227],
      _0xb2cf[228],
      _0xb2cf[101],
      _0xb2cf[229],
      _0xb2cf[230],
      _0xb2cf[231],
      _0xb2cf[232],
      _0xb2cf[233],
      _0xb2cf[234],
      _0xb2cf[235],
      _0xb2cf[236],
      _0xb2cf[237],
      _0xb2cf[238],
      _0xb2cf[239],
      _0xb2cf[240],
      _0xb2cf[241],
      _0xb2cf[242],
      _0xb2cf[243],
      _0xb2cf[244],
      _0xb2cf[245],
      _0xb2cf[246],
      _0xb2cf[247],
      _0xb2cf[248],
      _0xb2cf[249],
      _0xb2cf[250],
      _0xb2cf[251],
      _0xb2cf[252],
      _0xb2cf[253],
      _0xb2cf[254],
      _0xb2cf[255],
      _0xb2cf[256],
      _0xb2cf[257],
      _0xb2cf[258],
      _0xb2cf[259],
      _0xb2cf[260],
      _0xb2cf[261],
      _0xb2cf[262],
      _0xb2cf[263],
      _0xb2cf[264],
      _0xb2cf[265],
      _0xb2cf[266],
      _0xb2cf[267],
      _0xb2cf[268],
      _0xb2cf[269],
      _0xb2cf[270],
      _0xb2cf[271],
      _0xb2cf[272],
      _0xb2cf[273],
      _0xb2cf[274],
      _0xb2cf[275],
      _0xb2cf[276],
      _0xb2cf[277],
      _0xb2cf[278],
      _0xb2cf[279],
      _0xb2cf[280],
      _0xb2cf[281],
      _0xb2cf[282],
      _0xb2cf[283],
      _0xb2cf[284],
      _0xb2cf[285],
      _0xb2cf[286],
      _0xb2cf[287],
      _0xb2cf[288],
      _0xb2cf[289],
      _0xb2cf[290],
      _0xb2cf[291],
      _0xb2cf[292],
      _0xb2cf[293],
      _0xb2cf[294],
      _0xb2cf[295],
      _0xb2cf[296],
      _0xb2cf[297],
      _0xb2cf[298],
      _0xb2cf[299],
      _0xb2cf[300],
      _0xb2cf[301],
    ];
    fontList = fontList.concat(extendedFontList);
    var testString = "00qqMMMUrrlliiee11";
    var testSize = "72px";
    var h = document.getElementsByTagName("body")[0];
    var baseFontsDiv = document.createElement("div");
    var fontsDiv = document.createElement("div");
    var defaultWidth = {};
    var defaultHeight = {};
    var createSpan = function () {
      var s = document.createElement("span");
      s.style.position = "absolute";
      s.style.left = "-9999px";
      s.style.fontSize = testSize;
      s.style.fontStyle = "normal";
      s.style.fontWeight = "normal";
      s.style.letterSpacing = "normal";
      s.style.lineBreak = "auto";
      s.style.lineHeight = "normal";
      s.style.texTransform = "none";
      s.style.textAlign = "left";
      s.style.textDecoration = "none";
      s.style.textShadow = "none";
      s.style.whiteSpace = "normal";
      s.style.wordBreak = "normal";
      s.style.wordSpacing = "normal";
      s.style.zIndex = "auto";
      s.style.padding = "0px";
      s.style.margin = "0px";
      s.style.textIndent = "0";
      s.style.border = "none";
      s.style.width = "auto";
      s.style.top = "auto";
      s.style.cssFloat = "none";
      s.style.display = "inline";
      s.innerHTML = testString;
      return s;
    };
    var createSpanWithFonts = function (fontToDetect, baseFont) {
      var s = createSpan();
      s.style.fontFamily = "'" + fontToDetect + "'," + baseFont;
      return s;
    };
    var initializeBaseFontsSpans = function () {
      var spans = [];
      for (var index = 0, length = baseFonts.length; index < length; index++) {
        var s = createSpan();
        s.style.fontFamily = baseFonts[index];
        baseFontsDiv.appendChild(s);
        spans.push(s);
      }
      return spans;
    };
    var initializeFontsSpans = function () {
      var spans = {};
      for (var i = 0, l = fontList.length; i < l; i++) {
        var fontSpans = [];
        for (
          var j = 0, numDefaultFonts = baseFonts.length;
          j < numDefaultFonts;
          j++
        ) {
          var s = createSpanWithFonts(fontList[i], baseFonts[j]);
          fontsDiv.appendChild(s);
          fontSpans.push(s);
        }
        spans[fontList[i]] = fontSpans;
      }
      return spans;
    };
    var isFontAvailable = function (fontSpans) {
      var detected = !1;
      for (var i = 0; i < baseFonts.length; i++) {
        detected =
          fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] ||
          fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]];
        if (detected) {
          return detected;
        }
      }
      return detected;
    };
    var baseFontsSpans = initializeBaseFontsSpans();
    h.appendChild(baseFontsDiv);
    for (var index = 0, length = baseFonts.length; index < length; index++) {
      defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth;
      defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight;
    }
    var fontsSpans = initializeFontsSpans();
    h.appendChild(fontsDiv);
    var available = [];
    for (var i = 0, l = fontList.length; i < l; i++) {
      if (isFontAvailable(fontsSpans[fontList[i]])) {
        available.push(fontList[i]);
      }
    }
    h.removeChild(fontsDiv);
    h.removeChild(baseFontsDiv);
    Storage.Variables.dtaa = JSON.stringify(available);
  },
  rib: function () {
    if (document.cookie !== undefined) {
      Storage.Variables.dtbb = document.cookie;
    }
  },
  ric: function () {
    if (typeof Storage !== "undefined") {
      try {
        if (localStorage !== undefined && localStorage !== null) {
          device = localStorage.getItem("device_id");
          if (device !== undefined && device !== "" && device !== null) {
            Storage.Variables.dtcc = device;
          }
        }
      } catch (e) {}
    }
  },
  rid: function () {
    if (typeof Storage !== "undefined") {
      try {
        if (localStorage !== undefined && localStorage !== null) {
          fingerprint = localStorage.getItem("fingerprint");
          if (
            fingerprint !== undefined &&
            fingerprint !== "" &&
            device !== null
          ) {
            Storage.Variables.dtdd = fingerprint;
          }
        }
      } catch (e) {}
    }
  },
  rie: function () {
    Storage.Variables.dtkk = "no devices";
    if (window.location.protocol != "https:") {
      Storage.Variables.dtkk = "devices";
    } else {
      if (
        navigator !== undefined &&
        navigator.mediaDevices !== undefined &&
        navigator.mediaDevices.enumerateDevices !== undefined
      ) {
        navigator.mediaDevices.enumerateDevices().then(function (devices) {
          devices.forEach(function (device) {
            if (device.deviceId !== undefined) {
              if (
                device.deviceId !== "communications" &&
                device.deviceId !== "default"
              ) {
                Storage.Variables.dtkk = "devices";
                if (device.kind === "audioinput") {
                  Storage.Variables.dtsp = "microphone";
                }
                if (device.kind === "videoinput") {
                  Storage.Variables.dtsv = "webcam";
                }
              }
            }
          });
        });
      }
    }
  },
  rif: function () {
    var cookieEnabled = window.navigator.cookieEnabled;
    if (
      cookieEnabled !== undefined &&
      cookieEnabled !== "" &&
      cookieEnabled !== null
    ) {
      Storage.Variables.dtee = cookieEnabled;
    }
  },
  rig: function () {
    try {
      navigator.getBattery().then(function (battery) {
        if (battery !== undefined) {
          if (battery.level !== undefined && battery.charging !== undefined) {
            if (battery.level != 1 || battery.charging != !0) {
              return (Storage.Variables.dtff = !1);
            } else {
              return (Storage.Variables.dtff = !0);
            }
          }
        } else {
          return (Storage.Variables.dtff = !0);
        }
      });
    } catch (err) {}
  },
  ril: function () {
    var ril_val = !1;
    var err = "";
    try {
      null[0]();
    } catch (e) {
      err = e;
    }
    try {
      var _0x43de = [
        "phantomjs",
        "indexOf",
        "toLowerCase",
        "stack",
        "selenium",
        "triflejs",
        "specterjs",
        "slimerjs",
        "casperjs",
        "webdriver",
      ];
      if (
        err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[0]) > -1 ||
        err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[4]) > -1 ||
        err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[5]) > -1 ||
        err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[6]) > -1 ||
        err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[7]) > -1 ||
        err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[8]) > -1 ||
        err[_0x43de[3]].toString()[_0x43de[2]]()[_0x43de[1]](_0x43de[9]) > -1
      ) {
        ril_val = !0;
      }
    } catch (err) {}
    try {
      var _0x7ba6 = [
        "callPhantom",
        "function",
        "_phantom",
        "__phantomas",
        "Buffer",
        "emit",
        "spawn",
        "webdriver",
        "domAutomation",
        "domAutomationController",
        "navigator",
        "getAttribute",
        "documentElement",
        "document",
        "_Selenium_IDE_Recorder",
        "__webdriver_script_fn",
        "PhantomEmitter",
      ];
      if (
        typeof window[_0x7ba6[0]] === _0x7ba6[1] ||
        window[_0x7ba6[0]] ||
        window[_0x7ba6[2]] ||
        window[_0x7ba6[3]] ||
        window[_0x7ba6[4]] ||
        window[_0x7ba6[5]] ||
        window[_0x7ba6[6]] ||
        window[_0x7ba6[7]] ||
        window[_0x7ba6[8]] ||
        window[_0x7ba6[9]] ||
        window[_0x7ba6[10]][_0x7ba6[7]] ||
        window[_0x7ba6[13]][_0x7ba6[12]][_0x7ba6[11]](_0x7ba6[7]) ||
        _0x7ba6[14] in window ||
        _0x7ba6[15] in document ||
        _0x7ba6[15] in window ||
        _0x7ba6[16] in window
      ) {
        ril_val = !0;
      }
    } catch (err) {}
    try {
      var _0xc6bf = ["$cdc_", "$wdc_", "$cdc_asdjflasutopfhvcZLmcfl_"];
      if (
        _0xc6bf[0] in document ||
        _0xc6bf[1] in document ||
        _0xc6bf[2] in document
      ) {
        ril_val = !0;
      }
    } catch (err) {}
    try {
      var _0xd977 = ["cache_", "$cdc_asdjflasutopfhvcZLmcfl_", "document"];
      if (window[_0xd977[2]][_0xd977[1]][_0xd977[0]]) {
        ril_val = !0;
      }
    } catch (err) {}
    try {
      var _0x8b9a = [
        "callSelenium",
        "_selenium",
        "__nightmare",
        "awesomium",
        "__webdriver_script_fn",
        "__webdriver_evaluate",
        "__selenium_evaluate",
        "__webdriver_script_function",
        "__webdriver_script_func",
        "__fxdriver_evaluate",
        "__driver_unwrapped",
        "__webdriver_unwrapped",
        "__driver_evaluate",
        "__selenium_unwrapped",
        "__fxdriver_unwrapped",
      ];
      if (
        window[_0x8b9a[0]] ||
        window[_0x8b9a[1]] ||
        window[_0x8b9a[2]] ||
        window[_0x8b9a[3]] ||
        document[_0x8b9a[4]] ||
        document[_0x8b9a[5]] ||
        document[_0x8b9a[6]] ||
        document[_0x8b9a[7]] ||
        document[_0x8b9a[8]] ||
        document[_0x8b9a[4]] ||
        document[_0x8b9a[9]] ||
        document[_0x8b9a[10]] ||
        document[_0x8b9a[11]] ||
        document[_0x8b9a[12]] ||
        document[_0x8b9a[13]] ||
        document[_0x8b9a[14]]
      ) {
        ril_val = !0;
      }
    } catch (err) {}
    try {
      var _0x2fb5 = [
        "driver",
        "getAttribute",
        "documentElement",
        "document",
        "selenium",
      ];
      if (
        window[_0x2fb5[3]][_0x2fb5[2]][_0x2fb5[1]](_0x2fb5[0]) ||
        window[_0x2fb5[3]][_0x2fb5[2]][_0x2fb5[1]](_0x2fb5[4])
      ) {
        ril_val = !0;
      }
    } catch (err) {}
    try {
      var _0x3c25 = [
        "true",
        "webdriver",
        "getAttribute",
        "html",
        "getElementsByTagName",
        "domAutomation",
        "domAutomationController",
      ];
      if (
        _0x3c25[0] ==
          document[_0x3c25[4]](_0x3c25[3])[0][_0x3c25[2]](_0x3c25[1]) ||
        _0x3c25[5] in window ||
        _0x3c25[6] in window
      ) {
        ril_val = !0;
      }
    } catch (err) {}
    try {
      var _0xb32b = [
        "ClientUtils",
        "__utils__",
        "__nw_windows",
        "__nw_remove_all_listeners",
        "__nw_ondestruct",
        "__nw_removeOuterEventCB",
        "__nw_ondocumentcreated",
        "__nw_initwindow",
        "BrowserAutomationStudio_GetFrameIndex",
        "BrowserAutomationStudio_Open",
        "BrowserAutomationStudio_GetInternalBoundingRect",
        "BrowserAutomationStudio_ScrollToElement",
        "BrowserAutomationStudio_ScrollToCoordinates",
        "BrowserAutomationStudio_ScrollUp",
        "BrowserAutomationStudio_ScrollToCoordinatesNoResult",
        "BrowserAutomationStudio_FindElement",
        "BrowserAutomationStudio_Sleep",
        "browser_automation_studio_frame_find_result",
        "browser_automation_studio_eval",
        "browser_automation_studio_result",
        "browser_automation_studio_inspect_result",
        "BrowserAutomationStudio_RecaptchaSolved",
        "BrowserAutomationStudio_OriginalDate",
        "BrowserAutomationStudio_MatchAllIteration",
        "BrowserAutomationStudio_SetGeolocation",
        "BrowserAutomationStudio_GeolocationRestore",
      ];
      if (
        window[_0xb32b[0]] ||
        window[_0xb32b[1]] ||
        window[_0xb32b[2]] ||
        window[_0xb32b[3]] ||
        window[_0xb32b[4]] ||
        window[_0xb32b[5]] ||
        window[_0xb32b[6]] ||
        window[_0xb32b[7]] ||
        window[_0xb32b[8]] ||
        window[_0xb32b[9]] ||
        window[_0xb32b[10]] ||
        window[_0xb32b[11]] ||
        window[_0xb32b[12]] ||
        window[_0xb32b[13]] ||
        window[_0xb32b[14]] ||
        window[_0xb32b[15]] ||
        window[_0xb32b[16]] ||
        window[_0xb32b[17]] ||
        window[_0xb32b[18]] ||
        window[_0xb32b[19]] ||
        window[_0xb32b[20]] ||
        window[_0xb32b[21]] ||
        window[_0xb32b[22]] ||
        window[_0xb32b[23]] ||
        window[_0xb32b[24]] ||
        window[_0xb32b[25]]
      ) {
        ril_val = !0;
      }
    } catch (err) {}
    try {
      var _0xf537 = [
        "_globalProxy",
        "_virtualConsole",
        "_pretendToBeVisual",
        "_currentSessionHistoryEntryIndex",
        "__stopAllTimers",
        "jscWebView",
        "gi",
        "match",
        "length",
      ];
      if (
        window[_0xf537[0]] ||
        window[_0xf537[1]] ||
        window[_0xf537[2]] ||
        window[_0xf537[3]] ||
        window[_0xf537[4]]
      ) {
        ril_val = !0;
      }
      for (var prop in window) {
        var yyy = _0xf537[5];
        var rgxp = new RegExp(yyy, _0xf537[6]);
        if (
          prop[_0xf537[7]](rgxp) != null &&
          prop[_0xf537[7]](rgxp)[_0xf537[8]] > 0
        ) {
          ril_val = !0;
        }
      }
    } catch (err) {}
    Storage.Variables.dtgg = ril_val;
  },
  rih: function () {
    var WRviewportwidth, WRviewportheight;
    "undefined" != typeof window.innerWidth
      ? ((WRviewportwidth = window.innerWidth),
        (WRviewportheight = window.innerHeight))
      : "undefined" != typeof document.documentElement &&
        "undefined" != typeof document.documentElement.clientWidth &&
        0 != document.documentElement.clientWidth
      ? ((WRviewportwidth = document.documentElement.clientWidth),
        (WRviewportheight = document.documentElement.clientHeight))
      : ((WRviewportwidth = document.getElementsByTagName("body")[0]
          .clientWidth),
        (WRviewportheight = document.getElementsByTagName("body")[0]
          .clientHeight));
    Storage.Variables.dthh = WRviewportwidth + "x" + WRviewportheight;
  },
  rihB: function () {
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;
    Storage.Variables.dthhB = x + "x" + y;
  },
  riw: function () {
    var win_data = [];
    if (Storage.Variables.dtvv === undefined) {
      Storage.Variables.dtvv = [];
    }
    for (var prop in window) {
      win_data.push(prop);
    }
    Storage.Variables.dtvv = JSON.stringify(win_data);
  },
  rix: function () {
    var doc_data = [];
    if (Storage.Variables.dtww === undefined) {
      Storage.Variables.dtww = [];
    }
    for (var prop in document) {
      doc_data.push(prop);
    }
    Storage.Variables.dtww = JSON.stringify(doc_data);
  },
  riy: function () {
    var onLine = window.navigator.onLine;
    if (onLine !== undefined && onLine !== "" && onLine !== null) {
      Storage.Variables.dtxx = onLine;
    }
  },
  dpi: function () {
    var i = null;
    try {
      for (var i = 56; i < 2000; i++) {
        if (matchMedia("(max-resolution: " + i + "dpi)").matches === !0) {
          break;
        }
      }
    } catch (e) {}
    if (i !== null) {
      Storage.Variables.dtdp = i;
    }
  },
  riz: function () {
    Storage.Variables.dtyy = !1;
    try {
      var _0xbcd6 = [
        "orientation",
        "undefined",
        "ontouchstart",
        "documentElement",
        "IEMobile",
        "indexOf",
        "userAgent",
      ];
      if (
        typeof window[_0xbcd6[0]] !== _0xbcd6[1] ||
        _0xbcd6[2] in document[_0xbcd6[3]] ||
        navigator[_0xbcd6[6]][_0xbcd6[5]](_0xbcd6[4]) !== -1
      ) {
        Storage.Variables.dtyy = !0;
      }
    } catch (e) {}
  },
  rii: function () {},
  rij: function () {
    var RTCPeerConnection =
      window.RTCPeerConnection ||
      window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection;
    var useWebKit = !!window.webkitRTCPeerConnection;
    if (!RTCPeerConnection) {
      var iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.id = "iframe";
      iframe.sandbox = "allow-same-origin";
      if (document.body === undefined || document.body === null) {
        document.body = document.createElement("body");
      }
      document.body.appendChild(iframe);
      var win = iframe.contentWindow;
      if (win !== undefined && win !== null) {
        var RTCPeerConnection =
          win.RTCPeerConnection ||
          win.mozRTCPeerConnection ||
          win.webkitRTCPeerConnection;
        useWebKit = !!win.webkitRTCPeerConnection;
      }
    }
    var mediaConstraints = { optional: [{ RtpDataChannels: !0 }] };
    var servers = { iceServers: [{ urls: "stun:stun.services.mozilla.com" }] };
    try {
      var pc = new RTCPeerConnection(servers, mediaConstraints);
      pc.onicecandidate = function (ice) {
        if (ice.candidate) {
          Learn.HandleCandidate(ice.candidate.candidate);
        }
      };
      pc.createDataChannel("");
      pc.createOffer(
        function (result) {
          pc.setLocalDescription(
            result,
            function () {},
            function () {},
          );
        },
        function () {},
      );
      setTimeout(function () {
        if (pc.localDescription !== null) {
          var lines = pc.localDescription.sdp.split("\n");
          lines.forEach(function (line) {
            if (line.indexOf("a=candidate:") === 0) {
              Learn.HandleCandidate(line);
            }
          });
        }
        if (Storage.Variables.dtmm === undefined) {
          Storage.Variables.dtmm = "";
        }
      }, 100);
    } catch (e) {
      Storage.Variables.dtmm = "";
    }
  },
  rik: function () {
    try {
      if (Learn.HasIndexedDB()) {
        if (
          navigator.userAgent.toLowerCase().indexOf("firefox/47") > -1 ||
          navigator.userAgent.toLowerCase().indexOf("firefox/48") > -1 ||
          navigator.userAgent.toLowerCase().indexOf("firefox/49") > -1
        ) {
          Storage.TotalCompleted++;
          return;
        }
        var db;
        Storage.Variables.dtii = [];
        var openRequest = indexedDB.open("u", 1);
        openRequest.onupgradeneeded = function (e) {
          var thisDB = e.target.result;
          if (!thisDB.objectStoreNames.contains("u")) {
            thisDB.createObjectStore("u", { autoIncrement: !0 });
          }
        };
        openRequest.onerror = function (e) {
          Storage.TotalCompleted++;
        };
        openRequest.onsuccess = function (e) {
          db = e.target.result;
          var transaction = db.transaction(["u"], "readonly");
          var objectStore = transaction.objectStore("u");
          var cursor = objectStore.openCursor();
          cursor.onsuccess = function (e) {
            var res = e.target.result;
            if (res) {
              try {
                if (res.value.storage !== undefined) {
                  if (
                    Storage.Variables.dtii.indexOf(
                      res.value.storage.trim('"'),
                    ) === -1
                  ) {
                    Storage.Variables.dtii.push(res.value.storage.trim('"'));
                  }
                }
              } catch (s) {
                Storage.TotalCompleted++;
              }
              res.continue();
            } else {
              Storage.TotalCompleted++;
            }
          };
        };
      } else {
        Storage.TotalCompleted++;
      }
    } catch (e) {
      Storage.TotalCompleted++;
    }
  },
  IsIE: function () {
    if (navigator.appName === "Microsoft Internet Explorer") {
      return !0;
    } else if (
      navigator.appName === "Netscape" &&
      /Trident/.test(navigator.userAgent)
    ) {
      return !0;
    }
    return !1;
  },
  GetUserAgent: function () {
    if (navigator !== undefined && navigator.userAgent !== undefined) {
      return navigator.userAgent;
    }
  },
  GetScreenResolution: function () {
    return screen.height > screen.width
      ? [screen.height, screen.width]
      : [screen.width, screen.height];
  },
  GetAvailableScreenResolution: function () {
    var available;
    if (screen.availWidth && screen.availHeight) {
      available =
        screen.availHeight > screen.availWidth
          ? [screen.availHeight, screen.availWidth]
          : [screen.availWidth, screen.availHeight];
    }
    return available;
  },
  HasSessionStorage: function () {
    try {
      return !!window.sessionStorage;
    } catch (e) {
      return !0;
    }
  },
  HasLocalStorage: function () {
    try {
      return !!window.localStorage;
    } catch (e) {
      return !0;
    }
  },
  HasIndexedDB: function () {
    try {
      window.indexedDB =
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB;
      return !!window.indexedDB;
    } catch (e) {
      return !0;
    }
  },
  Battery: function () {
    try {
      var battery =
        navigator.battery ||
        navigator.webkitBattery ||
        navigator.mozBattery ||
        navigator.msBattery;
      return battery;
    } catch (e) {}
  },
  GetDoNotTrack: function () {
    if (navigator.doNotTrack) {
      return navigator.doNotTrack;
    } else if (navigator.msDoNotTrack) {
      return navigator.msDoNotTrack;
    } else if (window.doNotTrack) {
      return window.doNotTrack;
    } else {
      return "unknown";
    }
  },
  HandleCandidate: function (candidate) {
    var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
    var handler = ip_regex.exec(candidate);
    if (handler !== null && handler[1] !== undefined) {
      var ipaddr = handler[1];
      var ip = ipaddr.trim();
      if (
        ip.match(
          /^(192\.168\.|192\.0\.0\.([0-9])|169\.254\.|10\.|100\.((6[4-9]|[7-9][0-9]|1[01][0-9]|12[0-7]))|172\.(1[6-9]|2\d|3[01]))/,
        )
      ) {
      } else if (ip.match(/^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/)) {
      } else {
        Storage.Variables.dtmm = ip;
      }
    }
  },
  GetWebGLCanvas: function () {
    var canvas = document.createElement("canvas");
    var gl = null;
    try {
      gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    } catch (e) {}
    if (!gl) {
      gl = null;
    }
    return gl;
  },
  x64hash128: function (key, seed) {
    key = key || "";
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [0x87c37b91, 0x114253d5];
    var c2 = [0x4cf5ad43, 0x2745937f];
    for (var i = 0; i < bytes; i = i + 16) {
      k1 = [
        (key.charCodeAt(i + 4) & 0xff) |
          ((key.charCodeAt(i + 5) & 0xff) << 8) |
          ((key.charCodeAt(i + 6) & 0xff) << 16) |
          ((key.charCodeAt(i + 7) & 0xff) << 24),
        (key.charCodeAt(i) & 0xff) |
          ((key.charCodeAt(i + 1) & 0xff) << 8) |
          ((key.charCodeAt(i + 2) & 0xff) << 16) |
          ((key.charCodeAt(i + 3) & 0xff) << 24),
      ];
      k2 = [
        (key.charCodeAt(i + 12) & 0xff) |
          ((key.charCodeAt(i + 13) & 0xff) << 8) |
          ((key.charCodeAt(i + 14) & 0xff) << 16) |
          ((key.charCodeAt(i + 15) & 0xff) << 24),
        (key.charCodeAt(i + 8) & 0xff) |
          ((key.charCodeAt(i + 9) & 0xff) << 8) |
          ((key.charCodeAt(i + 10) & 0xff) << 16) |
          ((key.charCodeAt(i + 11) & 0xff) << 24),
      ];
      k1 = Learn.x64Multiply(k1, c1);
      k1 = Learn.x64Rotl(k1, 31);
      k1 = Learn.x64Multiply(k1, c2);
      h1 = Learn.x64Xor(h1, k1);
      h1 = Learn.x64Rotl(h1, 27);
      h1 = Learn.x64Add(h1, h2);
      h1 = Learn.x64Add(Learn.x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
      k2 = Learn.x64Multiply(k2, c2);
      k2 = Learn.x64Rotl(k2, 33);
      k2 = Learn.x64Multiply(k2, c1);
      h2 = Learn.x64Xor(h2, k2);
      h2 = Learn.x64Rotl(h2, 31);
      h2 = Learn.x64Add(h2, h1);
      h2 = Learn.x64Add(Learn.x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
    }
    k1 = [0, 0];
    k2 = [0, 0];
    switch (remainder) {
      case 15:
        k2 = Learn.x64Xor(
          k2,
          Learn.x64LeftShift([0, key.charCodeAt(i + 14)], 48),
        );
      case 14:
        k2 = Learn.x64Xor(
          k2,
          Learn.x64LeftShift([0, key.charCodeAt(i + 13)], 40),
        );
      case 13:
        k2 = Learn.x64Xor(
          k2,
          Learn.x64LeftShift([0, key.charCodeAt(i + 12)], 32),
        );
      case 12:
        k2 = Learn.x64Xor(
          k2,
          Learn.x64LeftShift([0, key.charCodeAt(i + 11)], 24),
        );
      case 11:
        k2 = Learn.x64Xor(
          k2,
          Learn.x64LeftShift([0, key.charCodeAt(i + 10)], 16),
        );
      case 10:
        k2 = Learn.x64Xor(
          k2,
          Learn.x64LeftShift([0, key.charCodeAt(i + 9)], 8),
        );
      case 9:
        k2 = Learn.x64Xor(k2, [0, key.charCodeAt(i + 8)]);
        k2 = Learn.x64Multiply(k2, c2);
        k2 = Learn.x64Rotl(k2, 33);
        k2 = Learn.x64Multiply(k2, c1);
        h2 = Learn.x64Xor(h2, k2);
      case 8:
        k1 = Learn.x64Xor(
          k1,
          Learn.x64LeftShift([0, key.charCodeAt(i + 7)], 56),
        );
      case 7:
        k1 = Learn.x64Xor(
          k1,
          Learn.x64LeftShift([0, key.charCodeAt(i + 6)], 48),
        );
      case 6:
        k1 = Learn.x64Xor(
          k1,
          Learn.x64LeftShift([0, key.charCodeAt(i + 5)], 40),
        );
      case 5:
        k1 = Learn.x64Xor(
          k1,
          Learn.x64LeftShift([0, key.charCodeAt(i + 4)], 32),
        );
      case 4:
        k1 = Learn.x64Xor(
          k1,
          Learn.x64LeftShift([0, key.charCodeAt(i + 3)], 24),
        );
      case 3:
        k1 = Learn.x64Xor(
          k1,
          Learn.x64LeftShift([0, key.charCodeAt(i + 2)], 16),
        );
      case 2:
        k1 = Learn.x64Xor(
          k1,
          Learn.x64LeftShift([0, key.charCodeAt(i + 1)], 8),
        );
      case 1:
        k1 = Learn.x64Xor(k1, [0, key.charCodeAt(i)]);
        k1 = Learn.x64Multiply(k1, c1);
        k1 = Learn.x64Rotl(k1, 31);
        k1 = Learn.x64Multiply(k1, c2);
        h1 = Learn.x64Xor(h1, k1);
    }
    h1 = Learn.x64Xor(h1, [0, key.length]);
    h2 = Learn.x64Xor(h2, [0, key.length]);
    h1 = Learn.x64Add(h1, h2);
    h2 = Learn.x64Add(h2, h1);
    h1 = Learn.x64Fmix(h1);
    h2 = Learn.x64Fmix(h2);
    h1 = Learn.x64Add(h1, h2);
    h2 = Learn.x64Add(h2, h1);
    return (
      ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) +
      ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) +
      ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) +
      ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8)
    );
  },
  x64Add: function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
  },
  x64Multiply: function (m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
  },
  x64Rotl: function (m, n) {
    n %= 64;
    if (n === 32) {
      return [m[1], m[0]];
    } else if (n < 32) {
      return [
        (m[0] << n) | (m[1] >>> (32 - n)),
        (m[1] << n) | (m[0] >>> (32 - n)),
      ];
    } else {
      n -= 32;
      return [
        (m[1] << n) | (m[0] >>> (32 - n)),
        (m[0] << n) | (m[1] >>> (32 - n)),
      ];
    }
  },
  x64LeftShift: function (m, n) {
    n %= 64;
    if (n === 0) {
      return m;
    } else if (n < 32) {
      return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
    } else {
      return [m[1] << (n - 32), 0];
    }
  },
  x64Xor: function (m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]];
  },
  x64Fmix: function (h) {
    h = Learn.x64Xor(h, [0, h[0] >>> 1]);
    h = Learn.x64Multiply(h, [0xff51afd7, 0xed558ccd]);
    h = Learn.x64Xor(h, [0, h[0] >>> 1]);
    h = Learn.x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
    h = Learn.x64Xor(h, [0, h[0] >>> 1]);
    return h;
  },
};
var Startup = {
  Paused: !1,
  Locked: !1,
  SubmitLock: !1,
  FormFieldPrepend: "",
  Trigger: function (element, callback) {
    Storage.Triggers.push({ element: element, callback: callback });
  },
  Field: function (name, element) {
    Storage.Fields.push({ name: name, element: element });
  },
  Store: function (key, value) {
    if (Storage.Variables.dta === undefined) {
      Storage.Variables.dta = [];
    }
    if (key !== "" && key !== null && value !== "" && value !== null) {
      Storage.Variables.dta.push({ key: key, value: value });
    }
  },
  FieldStore: function (key, value) {
    if (key !== "" && key !== null && value !== "" && value !== null) {
      Storage.Variables[key] = value;
    }
  },
  Pause: function () {
    Startup.Paused = !0;
  },
  Resume: function () {
    if (Startup.Paused === !0) {
      Startup.Paused = !1;
      if (Learn.Collect()) {
        Startup.Prepare();
      }
    }
  },
  AfterResult: function (func) {
    Storage.Runnable.push(func);
  },
  AfterFailure: function (func) {
    Storage.Failure.push(func);
  },
  InIframe: function () {
    try {
      return window.self !== window.top;
    } catch (e) {
      return !0;
    }
  },
  Finalize: function (source) {
    if (Storage.Result.length === 0) {
      setTimeout(function () {
        Startup.Finalize(source);
      }, 100);
      return;
    }
    if (
      (source.form !== undefined && source.form !== null) ||
      source.tagName.toLowerCase() === "form"
    ) {
      var html = "";
      for (var key in Storage.Result) {
        if (Storage.Result.hasOwnProperty(key)) {
          html +=
            '<input type="hidden" name="' +
            Startup.FormFieldPrepend +
            key +
            '" value="' +
            Storage.Result[key] +
            '">';
        }
      }
      if (source.form !== undefined) {
        source.form.insertAdjacentHTML("beforeend", html);
        source.form.submit();
      } else {
        source.insertAdjacentHTML("beforeend", html);
        source.submit();
      }
    } else {
      source.click();
    }
  },
  Init: function () {
    if (Storage.Variables === undefined) {
      setTimeout(Startup.Init, 200);
      return;
    }
    try {
      Startup.SayHi();
      Startup.Locked = !1;
      if (Storage.Triggers.length === 0 && Startup.Paused === !1) {
        if (Learn.Collect()) {
          Startup.Prepare();
        }
      } else {
        Learn.Collect();
        for (i = 0; i < Storage.Triggers.length; i++) {
          var elt = Storage.Triggers[i].element;
          var callback = Storage.Triggers[i].callback;
          var execute = function (event) {
            if (callback !== undefined) {
              callback(event);
            } else {
              event.preventDefault();
            }
            Startup.Prepare();
            Startup.Locked = !0;
            var source = event.target || event.srcElement;
            source.removeEventListener("click", execute);
            if (Storage.Runnable.length === 0) {
              Startup.Finalize(source);
            }
          };
          if (elt.substring(0, 1) === "#") {
            var element = document.getElementById(elt.substring(1, elt.length));
            if (element !== null) {
              if (element.form !== undefined) {
                element.form.addEventListener("submit", execute);
              } else if (element.tagName.toLowerCase() === "form") {
                element.addEventListener("submit", execute);
              } else {
                element.addEventListener("click", execute);
              }
            } else {
              console.log("IPQualityScore - Unable to bind to trigger: " + elt);
            }
          } else if (elt.substring(0, 1) === ".") {
            var elements = document.getElementsByClassName(
              elt.substring(1, elt.length),
            );
            if (elements.length > 0) {
              for (m = 0; m < elements.length; m++) {
                elements[m].addEventListener("click", execute);
              }
            } else {
              console.log("IPQualityScore - Unable to bind to trigger: " + elt);
            }
          } else {
            var elements = document.getElementsByTagName(elt);
            if (elements.length > 0) {
              for (m = 0; m < elements.length; m++) {
                elements[m].addEventListener("click", execute);
              }
            } else {
              console.log("IPQualityScore - Unable to bind to trigger: " + elt);
            }
          }
        }
      }
    } catch (e) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {};
      xhttp.open(
        "GET",
        "https://www.ipqualityscore.com/api/error?message=" +
          encodeURIComponent(e),
        !0,
      );
      xhttp.send();
    }
  },
  Prepare: function () {
    if (Startup.Locked === !1) {
      setTimeout(function () {
        if (Storage.TotalCompleted >= Storage.Waitables) {
          if (Storage.Fields.length > 0) {
            for (i = 0; i < Storage.Fields.length; i++) {
              var name = Storage.Fields[i].name;
              var elt = Storage.Fields[i].element;
              if (elt.substring(0, 1) === "#") {
                var element = document.getElementById(
                  elt.substring(1, elt.length),
                );
                if (element !== null) {
                  Storage.Variables[name] = element.value;
                } else {
                  console.log("IPQualityScore - Unable to find field: " + elt);
                }
              } else if (elt.substring(0, 1) === ".") {
                var elements = document.getElementsByClassName(
                  elt.substring(1, elt.length),
                );
                if (elements.length > 0) {
                  if (elements.length > 1) {
                    Storage.Variables[name] = [];
                    for (m = 0; m < elements.length; m++) {
                      Storage.Variables[name].push(elements[m].valueOf());
                    }
                  } else {
                    Storage.Variables[name] = elements[0].value;
                  }
                } else {
                  console.log("IPQualityScore - Unable to find field: " + elt);
                }
              } else {
                var elements = document.getElementsByTagName(elt);
                if (elements.length > 0) {
                  if (elements.length > 1) {
                    Storage.Variables[name] = [];
                    for (m = 0; m < elements.length; m++) {
                      Storage.Variables[name].push(elements[m].valueOf());
                    }
                  } else {
                    Storage.Variables[name] = elements[0].value;
                  }
                } else {
                  console.log("IPQualityScore - Unable to find field: " + elt);
                }
              }
            }
          }
          Startup.Submit();
        } else {
          Startup.Prepare();
        }
      }, 100);
    }
  },
  Submit: function () {
    if (Startup.SubmitLock === !1) {
      Startup.SubmitLock = !0;
      setTimeout(function () {
        var parameters = Startup.ProcessStorage();
        var http = new XMLHttpRequest();
        http.open(
          "POST",
          "https://www.ipqualityscore.com/api/bc.game/FfOyqBx9tmccVzRLkwJzMKZ7C7PkTCJHFXeoPdAo0Ega9d8cQ5VuNl21GBUTYfRxMI8DkLSy3XkolG01osW9hg1kAPEVvJ7aulnhCbx8w4Nas6uLgrGrBEhjqiE7xoJSBUU3Hn5MYAQDv3rjW87678KenYJAYz5H0KwOEXTh0WVJdrbsBxbNGjnq8q3lideq2vScaQbUU25SF5ZXeTQGP1qu3CSTStJnSDOhUY8RbDBjpJQ8mvEcidMp3Xxm3WYn/learn/fetch",
          !0,
        );
        http.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded",
        );
        http.onreadystatechange = function () {
          if (http.readyState == 4 && http.status == 200) {
            try {
              if (this.responseText.substr(0, 1) !== "{") {
                var stamp = new Date().getTime();
                try {
                  Startup.AddStorage(
                    "fingerprint_" +
                      stamp +
                      "=" +
                      Storage.Variables.dtoo +
                      "-" +
                      stamp,
                    Storage.Variables.dtoo,
                  );
                } catch (s) {}
                return;
              }
              var response = JSON.parse(this.responseText);
              Storage.Result = response;
              date = new Date();
              date.setTime(date.getTime() + 14 * 24 * 60 * 60 * 1000);
              if (response.request_id !== undefined) {
                Startup.AddStorage(
                  "device_id_" +
                    response.time +
                    "=" +
                    response.request_id +
                    "-" +
                    response.time,
                  response.request_id,
                  response.time,
                );
                if (typeof Storage !== "undefined") {
                  try {
                    if (localStorage !== undefined && localStorage !== null) {
                      localStorage.setItem(
                        "device_id",
                        response.request_id + "-" + response.time,
                      );
                    }
                  } catch (e) {}
                }
              } else {
                Startup.AddStorage(
                  "fingerprint_" +
                    response.time +
                    "=" +
                    Storage.Variables.dtoo +
                    "-" +
                    response.time,
                  Storage.Variables.dtoo,
                );
                if (typeof Storage !== "undefined") {
                  try {
                    if (localStorage !== undefined && localStorage !== null) {
                      localStorage.setItem(
                        "fingerprint",
                        Storage.Variables.dtoo + "-" + response.time,
                      );
                    }
                  } catch (e) {}
                }
              }
              for (var i = 0; i < Storage.Runnable.length; i++) {
                if (
                  Storage.Runnable[i] !== undefined &&
                  Startup.IsFunction(Storage.Runnable[i])
                ) {
                  Storage.Runnable[i](response);
                }
              }
            } catch (e) {
              console.log(e);
              for (var i = 0; i < Storage.Failure.length; i++) {
                if (
                  Storage.Failure[i] !== undefined &&
                  Startup.IsFunction(Storage.Failure[i])
                ) {
                  Storage.Failure[i](response);
                }
              }
            }
          }
          if (http.readyState == 4 && http.status !== 200) {
            for (var i = 0; i < Storage.Failure.length; i++) {
              if (
                Storage.Failure[i] !== undefined &&
                Startup.IsFunction(Storage.Failure[i])
              ) {
                Storage.Failure[i](response);
              }
            }
          }
        };
        http.send(parameters);
      }, 1);
    }
  },
  SayHi: function () {
    if (document.cookie.length > 4096) {
      var it = 0;
      var cookies = document.cookie.split(";");
      while (document.cookie.length > 4096 && it < 20) {
        var cookie = cookies[it];
        if (cookie !== undefined) {
          var eqPos = cookie.indexOf("=");
          var tmp = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie =
            tmp +
            "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=." +
            window.location.hostname;
          it = it + 1;
        }
      }
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {};
    xhttp.open("GET", "https://fn.ipqualityscore.com/fp", !0);
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState == XMLHttpRequest.DONE) {
        Storage.Variables.dtpp = xhttp.responseText;
      }
    };
    xhttp.send();
  },
  IsFunction: function (functionToCheck) {
    var getType = {};
    return (
      functionToCheck &&
      getType.toString.call(functionToCheck) === "[object Function]"
    );
  },
  ProcessStorage: function () {
    var result = [];
    if (Storage.Runnable.length === 0 && Storage.Triggers.length === 0) {
      result.push("fast=1");
    }
    for (var key in Storage.Variables) {
      if (Storage.Variables.hasOwnProperty(key)) {
        if (Storage.Variables[key] === null) {
          result.push(key + "=null");
        } else {
          if (Storage.Variables[key].join !== undefined) {
            if (typeof Storage.Variables[key] === "object") {
              for (var i = 0; i < Storage.Variables[key].length; i++) {
                result.push(
                  key + "[]=" + JSON.stringify(Storage.Variables[key][i]),
                );
              }
            } else {
              for (var i = 0; i < Storage.Variables[key]; i++) {
                result.push(
                  key + "[]=" + JSON.stringify(Storage.Variables[key][i]),
                );
              }
            }
          } else {
            result.push(key + "=" + Storage.Variables[key]);
          }
        }
        delete Storage.Variables[key];
      }
    }
    return result.join("&");
  },
  AddStorage: function (name, id, time) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      if (cookie !== undefined) {
        if (cookie.indexOf(id) > -1) {
          var eqPos = cookie.indexOf("=");
          var tmp = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie =
            tmp +
            "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=." +
            window.location.hostname;
        }
      }
    }
    if (document.cookie.length > 3072) {
      var it = 0;
      var cookies = document.cookie.split(";");
      while (document.cookie.length > 3072 && it < 20) {
        var cookie = cookies[it];
        if (cookie !== undefined) {
          var eqPos = cookie.indexOf("=");
          var tmp = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie =
            tmp +
            "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=." +
            window.location.hostname;
          it = it + 1;
        }
      }
    }
    try {
      if (Learn.HasIndexedDB()) {
        if (
          !(
            navigator.userAgent.toLowerCase().indexOf("firefox/47") > -1 ||
            navigator.userAgent.toLowerCase().indexOf("firefox/48") > -1 ||
            navigator.userAgent.toLowerCase().indexOf("firefox/49") > -1
          )
        ) {
          var db;
          var openRequest = indexedDB.open("u", 1);
          openRequest.onupgradeneeded = function (e) {
            var thisDB = e.target.result;
            if (!thisDB.objectStoreNames.contains("u")) {
              thisDB.createObjectStore("u", { autoIncrement: !0 });
            }
          };
          openRequest.onerror = function (e) {};
          openRequest.onsuccess = function (e) {
            db = e.target.result;
            var transaction = db.transaction(["u"], "readwrite");
            var store = transaction.objectStore("u");
            if (id !== undefined && time !== undefined) {
              var request = store.add({ storage: id + "-" + time });
            }
          };
        }
      }
    } catch (e) {
      console.log(e);
    }
    document.cookie =
      name +
      "; expires=" +
      new Date(2032, 12, 31).toGMTString() +
      "; path=/; domain=." +
      window.location.hostname;
  },
  Unique: function (array) {
    var a = array.concat();
    for (var i = 0; i < a.length; ++i) {
      for (var j = i + 1; j < a.length; ++j) {
        if (a[i] === a[j]) {
          a.splice(j--, 1);
        }
      }
    }
    return a;
  },
};
var loader = function () {
  if (window.IPQ === undefined) {
    window.IPQ = {
      Callback: function () {
        Startup.Init();
      },
    };
  }
  window.IPQ.Callback();
};
setTimeout(function () {
  if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    loader();
  } else {
    document.addEventListener("DOMContentLoaded", loader);
  }
}, 50);
