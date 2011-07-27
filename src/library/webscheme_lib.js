if( typeof(BiwaScheme)!='object' ) BiwaScheme={}; with(BiwaScheme) {

  define_libfunc("read-line", 0, 1, function(ar){
    var port = ar[0] || Port.current_input;
    assert_port(port);
    return port.get_string();
  });
  
  //
  // element
  //
  define_libfunc("element-clear!", 1, 1, function(ar){
    return $(ar[0]).empty();
  });
  define_libfunc("element-empty!", 1, 1, function(ar){
    return $(ar[0]).empty();
  });

  define_libfunc("element-visible?", 1, 1, function(ar){
    return $(ar[0]).visible();
  });
  define_libfunc("element-toggle!", 1, 1, function(ar){
    return $(ar[0]).toggle();
  })
  define_libfunc("element-hide!", 1, 1, function(ar){
    return $(ar[0]).hide();
  })
  define_libfunc("element-show!", 1, 1, function(ar){
    return $(ar[0]).show();
  })
  define_libfunc("element-remove!", 1, 1, function(ar){
    return $(ar[0]).remove("");
  })
  define_libfunc("element-update!", 2, 2, function(ar){
    return $(ar[0]).html(ar[1]);
  })
  define_libfunc("element-replace!", 2, 2, function(ar){
    return $(ar[0]).replace(ar[1]);
  });
  define_libfunc("element-insert!", 2, 2, function(ar){
    return $(ar[0]).insert(ar[1]);
  });
  define_libfunc("element-wrap!", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-ancestors", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-descendants", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-first-descendant", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-immediate-descendants", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-previous-sibling", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-next-sibling", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-siblings", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-match?", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-up", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-down", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-previous", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-next", 3, 3, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-select", 0, 0, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-adjacent", 0, 0, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-identify", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-read-attribute", 2, 2, function(ar){
    assert_string(ar[1]);
    return $(ar[0]).readAttribute(ar[1]);
  });
  define_libfunc("element-write-attribute", 3, 3, function(ar){
    assert_string(ar[1]);
    return $(ar[0]).writeAttribute(ar[1], ar[2]);
  });
  define_libfunc("element-height", 1, 1, function(ar){
    return $(ar[0]).getHeight();
  });
  define_libfunc("element-width", 1, 1, function(ar){
    return $(ar[0]).getWidth();
  });
  define_libfunc("element-class-names", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-has-class-name?", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-add-class-name", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-remove-class-name", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-toggle-class-name", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-clean-whitespace!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  });
  define_libfunc("element-empty?", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-descendant-of!", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("scroll-to-element!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-style", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-opacity", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-style-set!", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-opacity-set!", 2, 2, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-dimensions", 1, 1, function(ar){
    var dimensions = $(ar[0]).getDimensions();
    return new Values(dimensions.width, dimensions.height);
  })
  define_libfunc("element-make-positioned!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-undo-positioned!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-make-clipping!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-undo-clipping!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-cumulative-offset", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-positioned-offset", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-absolutize!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-relativize!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-cumulative-scroll-offset", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-offset-parent", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-viewport-offset", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-clone-position!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })
  define_libfunc("element-absolutize!", 1, 1, function(ar){
    throw new Bug("not yet implemented");
  })

  // usage:
  //  (element-new '(div "foo"))        => <div>foo</div>
  //  (element-new '("div#main" "foo")) => <div id='main'>foo</div>
  //  (element-new '("div.red" "foo"))  => <div class='red'>foo</div>
  //  (element-new '(div align right))  => <div align='right'>foo</div>
  //  (element-new '(div (span "foo"))  => <div><span>foo</span></div>
  //

  // This function is not used; slower than by_string
  BiwaScheme.create_elements_by_dom = function(spec){
    var create_element = function(name, attrs, children){
      var tag = new Element(name, attrs); //attrs is an Object
      underscore.each(children, function(child){
        tag.insert({bottom: child});
      });
      return tag;
    };
    var spec = spec.to_array();
    var name = spec[0].name || spec[0]; // Symbol or String
    var attrs = {};
    var children = [];
    for(var i=1; i<spec.length; i++){
      if(spec[i] instanceof Symbol){ //attribute
        attrs[ spec[i].name ] = spec[i+1];
        i++;
      }
      else{
        if(spec[i] instanceof Pair)
          children.push(create_elements_by_dom(spec[i]));
        else
          children.push(spec[i].toString());
      }
    }
    return create_element(name, attrs, children);
  };

  BiwaScheme.create_elements_by_string = function(spec){
    var spec = spec.to_array();
    var name = spec.shift();
    if(name instanceof Symbol) name = name.name;
    if(name.match(/(.*)\.(.*)/)){
      name = RegExp.$1;
      spec.unshift(Sym("class"), RegExp.$2);
    }
    if(name.match(/(.*)\#(.*)/)){
      name = RegExp.$1;
      spec.unshift(Sym("id"), RegExp.$2);
    }
    var children = [];
    var s = ["<" + name];
    for(var i=0; i<spec.length; i++){
      if(spec[i] instanceof Symbol){
        s.push(' ' + spec[i].name + '="' + spec[i+1] + '"');
        i++;
      }
      else{
        if(spec[i] instanceof Pair)
          children.push(create_elements_by_string(spec[i]));
        else
          children.push(spec[i]); // String
      }
    }
    s.push(">");
    s.push( children.join("") );
    s.push("</" + name + ">");
    return s.join("");
  }
  BiwaScheme.tree_all = function(tree, pred){
    if(tree === nil)
      return true;
    else if(pred(tree.car) === false)
      return false;
    else
      return BiwaScheme.tree_all(tree.cdr, pred); 
  }
  define_libfunc("element-new", 1, 1, function(ar){
    var string_or_symbol = function(item){
      return underscore.isString(item) ||
             (item instanceof Symbol) ||
             (item instanceof Pair);
    };
    if(BiwaScheme.tree_all(ar[0], string_or_symbol)){
      var div = new Element("div");
      div.html( create_elements_by_string(ar[0]) );
      return div.firstChild;
    }
    else
      return nil //create_elements_by_dom(ar[0]);
  });
  define_libfunc("element-content", 1, 1, function(ar){
    return ar[0].value || underscore.escapeHTML(ar[0].html());
  });

  //
  // load from network
  //
  define_libfunc("load", 1, 1, function(ar, intp){
    var path = ar[0];
    assert_string(path);
    return new BiwaScheme.Pause(function(pause){
      new Ajax.Request(path, {
        method: 'get',
        evalJSON: false,
        evalJS: false,
        onSuccess: function(transport) {
          // create new interpreter not to destroy current stack.
          var local_intp = new Interpreter(intp.on_error);
          local_intp.evaluate(transport.responseText,
                              function(){
                                return pause.resume(BiwaScheme.undef);
                              });
        },
        onFailure: function(transport){
          throw new Error("load: network error: failed to load"+path);
        }
      });
    });
  })

  _require = function(src, check, proc){
    var script = document.createElement('script')
    script.src = src;
    document.body.appendChild(script);

    var checker = new Function("return !!(" + check + ")");

    if(checker()) proc();
    else          setTimeout(function(){ checker() ? proc() : setTimeout(arguments.callee, 10); }, 10);
  };

  // (js-load "lib/foo.js" "Foo")
  define_libfunc("js-load", 2, 2, function(ar){
    var path = ar[0];
    var check = ar[1];
    assert_string(path);
    assert_string(check);

    return new BiwaScheme.Pause(function(pause){
      _require(path, "window." + check, function(){
        pause.resume(BiwaScheme.undef);
      });
    });
  });

  //
  // html modification
  //

  BiwaScheme.getelem = function(ar){
    var x = $(ar[0]); 
    if (x===undefined || x===null)
      return false;
    else
      return x;
  };
  define_libfunc("$",       1, 1, BiwaScheme.getelem);
  define_libfunc("getelem", 1, 1, BiwaScheme.getelem); 

  define_libfunc("set-style!", 3, 3, function(ar){
    assert_string(ar[1]);
    ar[0].style[ar[1]] = ar[2];
    return BiwaScheme.undef;
  });
  define_libfunc("get-style", 2, 2, function(ar){
    assert_string(ar[1]);
    return ar[0].style[ar[1]];
  });
  define_libfunc("set-content!", 2, 2, function(ar){
    assert_string(ar[1]);
    var str = ar[1].replace(/\n/g,"<br>").replace(/\t/g,"&nbsp;&nbsp;&nbsp;");
    ar[0].html(str);
    return BiwaScheme.undef;
  });
  define_libfunc("get-content", 1, 1, function(ar){
    return ar[0].value || underscore.unescapeHTML(ar[0].html());
  });

  //
  // handlers
  //
  define_libfunc("set-handler!", 3, 3, function(ar, intp){
    throw new Error("set-handler! is obsolete, please use add-handler! instead");
  })
  define_libfunc("add-handler!", 3, 3, function(ar, intp){
    var elem = ar[0], evtype = ar[1], proc = ar[2];
    var on_error = intp.on_error;
    Event.observe(elem, evtype, function(event){
      var intp = new Interpreter(on_error);
      intp.invoke_closure(proc, [event||Window.event]);
    });
    return BiwaScheme.undef;
  })
  define_libfunc("wait-for", 2, 2, function(ar){
    var elem = ar[0], evtype = ar[1];
    elem.biwascheme_wait_for = elem.biwascheme_wait_for || {};

    var prev_handler = elem.biwascheme_wait_for[evtype];
    if (prev_handler) {
      // Maybe a wait-for is called more than once,
      // and previous handler is not consumed.
      Event.stopObserving(elem, evtype, prev_handler);
    }

    return new BiwaScheme.Pause(function(pause){
      var handler = function(event){ 
        elem.biwascheme_wait_for[evtype] = undefined;
        Event.stopObserving(elem, evtype, handler);
        return pause.resume(BiwaScheme.undef); 
      };

      elem.biwascheme_wait_for[evtype] = handler;
      Event.observe(elem, evtype, handler);
    });
  });

  //
  // dom
  //
  define_libfunc("domelem", 1, null, function(ar){
    throw new Error("obsolete");
  });
  define_libfunc("dom-remove-children!", 1, 1, function(ar){
    puts("warning: dom-remove-children! is obsolete. use element-empty! instead");
    $(ar[0]).empty();
    return BiwaScheme.undef;
  });
  define_libfunc("dom-create-element", 1, 1, function(ar){
    throw new Error("obsolete");
  });
  define_libfunc("element-append-child!", 2, 2, function(ar){
    return $(ar[0]).appendChild(ar[1]);
  });
  define_libfunc("dom-remove-child!", 2, 2, function(ar){
    throw new Error("obsolete");
  });
//  define_libfunc("dom-get-attribute", 2, 2, function(ar){
//  });
//  define_libfunc("dom-remove-child!", 2, 2, function(ar){
//  });

  //
  // communication to server
  //
  define_libfunc("http-request", 1, 1, function(ar){
    var path = ar[0];
    assert_string(path);

    return new BiwaScheme.Pause(function(pause){
      new Ajax.Request(path, {
        method: 'get',
        onSuccess: function(transport) {
          pause.resume(transport.responseText)
        }
      });
    });
  });
  // (http-post "/foo" '(("x" . 1) ("y" . 2)))
  define_libfunc("http-post", 2, 2, function(ar){
    var path = ar[0];
    assert_string(path);
    var alist = ar[1];
    assert_list(alist);
    var h = {};

    alist.foreach(function(item){
      assert_string(item.car);
      h[item.car] = item.cdr;
    })

    return new BiwaScheme.Pause(function(pause){
      new Ajax.Request(path, {
        method: 'post',
        postBody: h.toQueryString(),
        onSuccess: function(transport) {
          pause.resume(transport.responseText)
        }
      });
    });
  });

  BiwaScheme.jsonp_receiver = [];
  define_libfunc("receive-jsonp", 1, 1, function(ar){
    var url = ar[0];
    assert_string(url);

    var receives = BiwaScheme.jsonp_receiver;
    for(var i=0; i<receives.length; i++)
      if(receives[i] === null) break;
    var receiver_id = i;
    url += "?callback=BiwaScheme.jsonp_receiver[" + receiver_id + "]"

    return new BiwaScheme.Pause(function(pause){
      receives[receiver_id] = function(data){
        pause.resume(data);
        receives[receiver_id] = null;
      }
      var script = document.createElement('script')
      script.src = url;
      document.body.appendChild(script);
    })
  });

  //
  // dialog, debug
  //
  define_libfunc("alert", 1, 1, function(ar){
    alert(ar[0]);
    return BiwaScheme.undef;
  });
  define_libfunc("confirm", 1, 1, function(ar){
    return confirm(ar[0]);
  });
//  define_libfunc("dumpobj", 1, 1, function(ar){
//    return eval(ar[0]);
//  });

}
