@function gray($color){
    @return rgb($color, $color, $color);
  }
  
  $red: rgb(239, 83, 80);
  $orange: rgb(255, 160, 0);
  $yellow: rgb(253, 216, 53);
  $green: rgb(42, 252, 152);
  $indigo: rgb(57, 73, 171);
  $violet: rgb(103, 58, 183);
  
  /* -- */
  
  $blue: rgb(66, 165, 245);
  
  @keyframes blink {
    from, 25%, to {
      opacity: 1;
    }
    
    50% {
      opacity: 0;
    }
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
  
    50% {
      transform: rotate(720deg);
    }
  
    to {
      transform: rotate(1440deg);
    }
  }
  
  @keyframes bounce {
    from, 6.66%, 17.66%, 33.33% {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }
  
    13.33%, 14.33% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -30px, 0) scaleY(1.1);
    }
  
    23.33% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -15px, 0) scaleY(1.05);
    }
  
    26.66% {
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0) scaleY(0.95);
    }
  
    30% {
      transform: translate3d(0, -4px, 0) scaleY(1.02);
    }
  }
  
  body{
    margin: 0px;
    overflow-x: hidden;
    padding: 0px;
    
    &::-webkit-scrollbar-track {
      background-color: gray(30);
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: rgba(white, 0.2);
      border-radius: 100px;
    }
  
    &::-webkit-scrollbar {
      height: 4px;
      width: 4px;
    }
  
    input, h1, h3, a, span {
      color: gray(90);
      font-family: "Rubik", sans-serif;
      font-weight: 400;
      margin: 0px;
      padding: 0px;
    }
  }
  
  $backgroundImage: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80";
  
  .background-image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .clear-button {
    backdrop-filter: blur(3px);
    background-color: rgba(white, 0.1);
    border: 1px solid rgba(white, 0.1);
    border-radius: 100px;
    box-shadow: 2px 2px 2px rgba(black, 0.1);
    cursor: pointer;
    
    &:hover {
      background-color: rgba(white, 0.2);
      border: 1px solid rgba(white, 0.3);
    }
  }
  
  #app {
    background-color: gray(30);
    
    &.logged-out {
      #app-info {
        margin-left: 40px;
        opacity: 1;
        transform: translateX(0%);
      }
      
      #app-background {
        cursor: pointer;
      }
      
      #sign-in-button-wrapper {
        opacity: 1;
        pointer-events: all;
        transform: translate(-50%, -40px); 
      }
    }
    
    &.logging-in,
    &.verifying-log-in,
    &.log-in-error {
      #app-background {
        #app-background-image {
          filter: blur(8px);
          transform: scale(1.2);
        }
      }
    }
    
    &.logging-in,
    &.log-in-error {
      #app-pin-wrapper {
        opacity: 1;
        pointer-events: all;
        transform: translate(-50%, -50%) scale(1);
      }
    }
    
    &.verifying-log-in {
      #app-loading-icon {
        opacity: 1;
        transform: translate(-50%, -50%);
      }
    }
    
    &.log-in-error {
      #app-pin-wrapper {
        #app-pin {
          .app-pin-digit {
            background-color: rgba($red, 0.05);
            border-color: rgba($red, 0.5); 
          }      
        }
      }
    }
    
    &.logged-in {
      #app-menu {
        height: auto;      
        overflow: initial;
        opacity: 1;
        pointer-events: all;
        transform: translateY(0%);
      }
    }
    
    .scrollable-component {
      cursor: grab;
      overflow: auto;
      user-select: none;
      width: 100%;
      
      &:active {
        cursor: grabbing;
      }
      
      &::-webkit-scrollbar {
        height: 0px;
        width: 0px;
      }
    }
    
    #app-loading-icon {
      left: 50%;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translate(-50%, 0%);
      transition: opacity 250ms, transform 250ms;
      z-index: 2;
      
      i {
        animation: 2s spin ease-in-out infinite;
        color: white;
        font-size: 2em;
      }
    }
    
    #app-background {
      height: 100%;
      left: 0px;
      overflow: hidden;
      position: fixed;
      top: 0px;
      width: 100%;
      z-index: 1;
      
      #app-background-image {
        background-image: url($backgroundImage);
        height: 100%;
        transition: filter 250ms, transform 250ms;
        width: 100%;
      }
    }
    
    #app-info {
      bottom: 0px;
      left: 0px;
      margin: 40px;
      margin-left: 0px;
      opacity: 0;
      position: absolute;
      transform: translateX(-100%);
      transition: margin 250ms, opacity 250ms, transform 250ms;
      z-index: 2;
    }
    
    .user-status-button {
      cursor: pointer;
      margin-top: 10px;
      outline: none;
      padding: 10px;
      width: 100px;
      
      i {
        color: gray(245);
        font-size: 1.25em;
      }
    }
    
    #sign-in-button-wrapper {
      bottom: 0px;
      left: 50%;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      transform: translate(-50%, 40px);
      transition: opacity 250ms, transform 250ms;
      z-index: 2;
      
      #sign-in-button {
        &:not(:hover) {
          animation: bounce 3s infinite;
          animation-delay: 3s;
        }
      }
    }
    
    .info {
      align-items: flex-end;
      display: flex;
      
      .time {
        color: gray(245);
        font-size: 6em;
        height: 80px;
        line-height: 80px;
        text-shadow: 2px 2px 2px rgba(black, 0.1);
      }
      
      .weather {
        display: inline-flex;
        height: 20px;
        margin-bottom: 6px;
        margin-left: 20px;
        
        i, span {
          align-items: center;
          display: inline-flex;
        }
        
        i {
          color: $yellow;
          font-size: 0.9em;
        }
        
        span {
          color: white;
        }
        
        .weather-type {
          height: 20px;
        }
        
        .weather-temperature-value {        
          font-size: 1.5em;
          height: 20px;
          margin-left: 5px;
        }
        
        .weather-temperature-unit {
          align-items: flex-start;
          font-size: 0.8em;
          margin-left: 3px;
        }
      }
    }
    
    .reminder {
      display: flex;    
      gap: 6px;
      margin-top: 10px;
      
      i, div {
        display: inline-flex;     
      }
      
      i {
        color: gray(245);
        font-size: 0.8em;
        height: 12px;
        line-height: 12px;
      }
      
      span {
        color: rgba(white, 0.8);
        font-size: 1.1em;
      }
      
      .reminder-icon {
        align-items: center;
        height: 20px;
      }
      
      .reminder-time {
        align-items: flex-end;
        color: gray(30);
        font-size: 0.8em;
        height: 20px;
      }
    }
    
    #quick-nav {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      overflow: auto;
      padding-bottom: 5px;
      width: 100%;
      z-index: 3;
      
      .quick-nav-item {
        padding: 10px 20px;
        
        &:last-of-type {
          margin-right: 10px;
        }
        
        .quick-nav-item-label {
          color: gray(245);
          text-shadow: 0px 0px 2px rgba(black, 0.1);
        }
      }
    }
    
    #youtube-link {
      align-items: center;
      display: inline-flex;
      gap: 5px;
      margin-top: 10px;
      padding: 10px 20px;
      text-decoration: none;
      
      i, span {
        height: 20px;
        line-height: 20px;
      }
      
      i {
        color: $red;
      }
      
      span {
        color: white;
      }
    }
    
    .menu-section {
      margin-top: 60px;
      
      .menu-section-title {
        align-items: center;
        display: flex;
        gap: 6px;
        
        i, span {
          color: gray(245);
        }
        
        i {
          font-size: 1em;
        }
        
        .menu-section-title-text {
          color: rgba(white, 0.8);
          font-size: 1.25em;
        } 
      }
      
      .menu-section-content {
        margin-top: 15px;      
        padding-top: 5px;
      }
    }
    
    #restaurants-section { 
      .menu-section-content {
        display: flex;
        gap: 1em;
        
        .restaurant-card {
          border-radius: 10px;
          box-shadow: 2px 2px 4px rgba(black, 0.25);
          cursor: pointer;
          height: 14vw;
          max-height: 240px;
          position: relative;
          transition: transform 250ms;
          width: 25%;
          
          &:hover {
            transform: translateY(-5px);
            
            .restaurant-card-content {            
              .restaurant-card-content-items {
                margin-bottom: 30px;   
              }
            }
          }
          
          .restaurant-card-content {
            background: linear-gradient(to top, rgba(black, 0.8), transparent);
            border-radius: 10px;
            height: 100%;
            width: 100%;
            
            .restaurant-card-content-items {
              bottom: 0px;
              display: flex;
              flex-direction: column;
              margin: 20px;
              position: absolute;
              right: 0px;
              text-align: right;
              transition: margin 250ms;
              
              .restaurant-card-title {
                color: gray(245);
                font-size: 1.5em;
              }
  
              .restaurant-card-desc {
                color: $blue;
                font-size: 0.9em;
              }
            }
          }
        }
      }
    }
    
    #weather-section {
      .menu-section-content {
        display: flex;
        gap: 1em;
        padding: 5px 0px;
        width: 100%;      
  
        .day-card {
          backdrop-filter: blur(3px);
          background-color: rgba(white, 0.1);
          border: 1px solid rgba(white, 0.2);
          border-radius: 10px;
          box-shadow: 2px 2px 4px rgba(black, 0.25);
          height: 8vw;
          max-height: 160px;
          min-height: 140px;
          min-width: 180px;
          position: relative;
          transition: transform 250ms;
          width: calc(100% / 7);
          
          &:last-of-type {
            margin-right: 5px;
          }
  
          .day-card-content {
            display: flex;
            flex-direction: column;
            height: calc(100% - 20px);
            justify-content: space-evenly;
            padding: 10px;
  
            i, span {
              color: gray(245);
              text-align: center;
            }
  
            .day-weather-temperature {
              align-items: flex-start;
              display: flex;
              font-size: 0.9em;
              justify-content: center;
  
              .day-weather-temperature-unit {
                font-size: 0.8em;
                margin-left: 3px;
              }
            }
  
            .day-weather-icon {
              font-size: 3.5em;
              text-shadow: 2px 2px 2px rgba(black, 0.1);
  
              &.sunny {
                color: $yellow;
              }
  
              &.rainy,
              &.stormy {
                color: $blue;
              }
            }
  
            .day-name {
              font-size: 0.9em;
              text-transform: uppercase;
            }
          }
        }
      }
    }
    
    #tools-section {
      .menu-section-content {
        display: flex;
        gap: 1em;
        
        .tool-card {
          background-color: gray(30);
          border-radius: 10px;
          box-shadow: 2px 2px 4px rgba(black, 0.25);
          cursor: pointer;
          height: 8vw;
          max-height: 160px;
          min-height: 140px;
          overflow: hidden;
          position: relative;
          transition: transform 250ms;
          width: calc(100% / 6);
          
          &:hover {
            transform: translateY(-5px);
            
            .tool-card-background {
              filter: grayscale(25%);
            }
          }
          
          .tool-card-background {
            border-radius: 10px;
            filter: grayscale(100%);
            height: 100%;
            left: 0px;
            opacity: 0.5;
            position: absolute;
            top: 0px;
            transition: filter 250ms;
            width: 100%;
          }
          
          .tool-card-content {
            background: linear-gradient(to right, rgba(black, 0.4), rgba(black, 0.1));
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            height: calc(100% - 40px);
            justify-content: space-between;
            padding: 20px;
            position: relative;
            width: calc(100% - 40px);
            z-index: 2;
            
            .tool-card-content-header {
              display: flex;
              flex-direction: column;
              gap: 2px;
  
              .tool-card-label {
                color: $blue;
                font-size: 0.8em;
                text-transform: uppercase;
              }
  
              .tool-card-name {
                color: gray(245);
                font-size: 1.25em;
              }
            }
  
            .tool-card-icon {
              color: gray(245);
              font-size: 2em;
            }
          }
        }
      }
    }
    
    #movies-section {
      .menu-section-content {
        display: flex;
        gap: 1em;
        
        #movie-card-1 {
          .movie-card-content {
            background: linear-gradient(to top, rgba($indigo, 0.4), transparent, rgba(black, 0.4));
          }
        }
          
        #movie-card-2 {
          .movie-card-content {
            background: linear-gradient(to top, rgba($violet, 0.4), transparent, rgba(black, 0.4));
          }
        }
          
        #movie-card-3 {
          .movie-card-content {
            background: linear-gradient(to top, rgba($red, 0.4), transparent, rgba(black, 0.4));
          }
        }
          
        #movie-card-4 {
          .movie-card-content {
            background: linear-gradient(to top, rgba($green, 0.4), rgba(black, 0.1), rgba(black, 0.4));
          }
        }
          
        .movie-card {
          background-color: gray(30);
          border-radius: 10px;
          box-shadow: 2px 2px 4px rgba(black, 0.25);
          cursor: pointer;
          height: 40vw;
          max-height: 600px;
          min-height: 460px;
          min-width: 260px;
          overflow: hidden;
          position: relative;
          transition: transform 250ms;
          width: calc(100% / 4);
          
          &:hover {
            transform: translateY(-5px);
            
            .movie-card-background {
              transform: scale(1.05);
            }
            
            .movie-card-content {
              i {
                transform: translate(-20%, -20%) scale(1.2);
              } 
            }
          }
          
          .movie-card-background {
            border-radius: 10px;
            height: 100%;
            left: 0px;
            position: absolute;
            top: 0px;
            transition: transform 250ms;
            width: 100%;
            z-index: 1;
          }
          
          .movie-card-content {
            background: linear-gradient(to top, rgba(black, 0.5), rgba(black, 0.1), rgba(black, 0.4));
            border-radius: 10px;
            height: 100%;
            position: relative;
            z-index: 2;
            
            .movie-card-info {
              display: flex;
              flex-direction: column;
              gap: 5px;
              padding: 30px;
              
              span {              
                text-shadow: 2px 2px 2px rgba(black, 0.1);
              }
              
              .movie-card-title {
                color: gray(245);
                font-size: 2em;
              }
              
              .movie-card-desc {
                color: gray(200);
                font-size: 0.9em;
              }            
            }
            
            i {
              bottom: 0px;
              color: gray(245);
              font-size: 5em;
              padding: 30px;
              position: absolute;
              right: 0px;
              text-shadow: 2px 2px 2px rgba(black, 0.1);
              transition: transform 250ms;
            }
          }
        }
      }
    }
    
    #app-pin-wrapper {
      left: 50%;
      opacity: 0;        
      pointer-events: none;
      position: absolute;
      top: 50%;    
      transform: translate(-50%, -30%) scale(0.8);
      transition: opacity 250ms, transform 250ms;
      z-index: 2;
      
      #app-pin-label {
        color: gray(245);
        font-size: 0.9em;
        margin: 10px;
        text-shadow: 2px 2px 2px rgba(black, 0.1);
        
        #app-pin-cancel-text {
          cursor: pointer;
          margin-left: 2px;
          
          &:hover {
            text-decoration: underline;
          }
        }
        
        #app-pin-error-text {
          color: $red;
        }
      }
      
      #app-pin-hidden-input {
        background-color: transparent;
        border: none;
        height: 0px;
        outline: none;
        pointer-events: none;
        position: absolute;
        width: 0px;
      }
      
      #app-pin {
        display: flex;
        gap: 10px;
        
        .app-pin-digit {
          align-items: center;
          background-color: rgba(white, 0.05);
          border: 1px solid rgba(white, 0.2);
          border-radius: 10px;
          box-shadow: 2px 2px 2px rgba(black, 0.06);
          display: inline-flex;
          font-size: 3em;
          height: 80px;
          justify-content: center;
          position: relative;
          transition: background-color 250ms, border-color 250ms;
          width: 60px;
          
          &:after,
          &:before {
            box-shadow: 2px 2px 2px rgba(black, 0.06);
            content: "";
            position: absolute;
            transition: opacity 250ms, transform 250ms;
            z-index: 2;
          }
          
          &:before {
            background-color: gray(245);
            border-radius: 10px;
            bottom: 0px;
            height: 3px;
            left: 15%;
            opacity: 0;
            transform: translateY(0px);
            width: 70%;
          }
          
          &:after {
            background-color: gray(245);
            border-radius: 20px;
            height: 20px;
            opacity: 0;
            transform: scale(0.25);
            width: 20px;
          }
          
          &.focused {
            &:before {
              animation: blink 2s ease-in-out infinite;
              opacity: 1;
              transform: translateY(-10px);
            }
          }
          
          &.hidden {
            &:after {
              opacity: 1;
              transform: scale(1);
            }
            
            .app-pin-digit-value {
              opacity: 0;
              transform: scale(0.25);
            }
          }
          
          .app-pin-digit-value {
            color: gray(245);
            transition: opacity 250ms, transform 250ms;
          }
        }
      }
    }
    
    #app-menu {
      height: 100vh;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      position: relative;
      transform: translateY(-10%);
      transition: opacity 250ms, transform 250ms;
      z-index: 2;
      
      #app-menu-content-wrapper {
        background: linear-gradient(to bottom, transparent, gray(30));
        margin-top: 30vh;
        min-height: 80vh;
        padding: 80px;
        padding-top: 0px;
        
        #app-menu-content {
          margin: auto;
          max-width: 1600px;
          position: relative;
          
          #app-menu-content-header {
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
  
  @media(max-width: 1300px) {
    #app {
      &.logged-out {
        #sign-in-button-wrapper {
          transform: translate(-40px, 0px); 
        }
      }
    
      #sign-in-button-wrapper {
        bottom: 40px;
        left: auto;
        right: 0px;
        transform: translate(40px, 0px); 
      }
      
      #app-menu {
        #app-menu-content-wrapper {
          padding: 30px;
          
          #app-menu-content {
            #restaurants-section { 
              .menu-section-content {
                flex-wrap: wrap;
  
                .restaurant-card {
                  height: 30vw;
                  max-height: 300px;
                  position: relative;
                  width: calc(50% - 0.5em);
                }
              }
            }
            
            #tools-section {
              .menu-section-content {
                flex-wrap: wrap;
                
                .tool-card {
                  width: calc(33.33% - 0.69em);
                }
              }
            }
          }
        }
      }
    }
  }
  
  @media(max-width: 600px) {
    #app {
      .info {
        .time {
          font-size: 4em;
          height: 60px;
          line-height: 60px;
        }
      }
      
      .user-status-button {
        width: 60px;
      }
    
      #app-menu {
        #app-menu-content-wrapper {
          #app-menu-content {  
            #restaurants-section { 
              .menu-section-content {
                flex-direction: column;
  
                .restaurant-card {
                  height: 40vw;
                  position: relative;
                  width: 100%;
                }
              }
            }
            
            #tools-section {
              .menu-section-content {
                flex-wrap: wrap;
                
                .tool-card {
                  width: calc(50% - 0.5em);
                }
              }
            }
          }
        }
      }
    }
  }
  
  @media(max-width: 400px) {
    #app {
      #app-menu {
        #app-menu-content-wrapper {
          #app-menu-content {
            #tools-section {
              .menu-section-content {
                flex-wrap: wrap;
                
                .tool-card {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }