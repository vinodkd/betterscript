Betterscript : a better Javascript
==================================

The idea
--------

- A Javascript-based language in the line of Coffeescript and Typescript, but closer to Javascript that both
- Provide syntactic sugar for the common boiler plate code that arises in JS without any dependencies
- JS++, but Coffeescript--, ts--

Basic Goals
-----------

- Javascript is valid Betterscript by default
- A simpler syntax for the definition and use of objects 
- A simpler syntax for the definition and use of  modules
- A simpler syntax for the definition and use of  apps
- A simpler syntax for the definition and use of  the environment

Stretch Goals
-------------

- Support outside-in dev using hoisting
- Look at JS:TGP for more things to simplify and add them
- A nice defer/wait syntax by default

Syntax
------

### Objects
Objects have private, protected and public members; private is the default.

    object obj {
      private foo = 1;
      protected bar = "blah";
    
      public baz = "bleh";
      var baz2 = "bazz";  // private is default
    
      
      function obj() {}  // c++ convention of using the object's name for the constructor
      function doSomethingPrivate(){
        
      }
    
      public function doSomethingPublic(){
      }
    };

### Inheritance

    object obj2 extends obj {
      
    };

### Properties

### Modules

Modules have private and public members and public is the default.
The module def creates the commonJS def and the `package.json`.

    module m1 {
      //private by default
      function priv()
      public function blah(){
        // code here
      }
    };

### Environments

    env {
      type: ui | server;
    }

### Apps

    app app1 {
      env: {}
    }

