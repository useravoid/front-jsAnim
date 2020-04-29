
document.addEventListener('DOMContentLoaded', 
                          function()
                            {
                              let tag1 = document.querySelector(".box1"); 
                              let tag2 = document.querySelector(".box2"); 
                              let tag3 = document.querySelector(".box3"); 
                              let tag4 = document.querySelector(".box4"); 
                              let tag5 = document.querySelector(".box5"); 
                              let button = document.querySelector('button');
                              tag1.addEventListener("mouseover",
                                                    function () 
                                                      {
                                                        // tag2.style.animation = 'rot 4s normal';
                                                        const vreme = new Date() ;   
                                                        tag1.innerHTML = new Date(vreme.getTime()).toLocaleString();
                                                      }
                                                    )
                              tag1.addEventListener("mouseout",
                                                    function () 
                                                      {
                                                        setTimeout(function ()
                                                                    {
                                                                      tag1.innerHTML = "Time in New York";
                                                                    } ,3000);
                                                      }
                                                    )

                              tag2.addEventListener("click",
                                                    function () 
                                                      {
                                                        tag2.style.animation = 'rot 4s normal';
                                                        const vreme = new Date() ;   
                                                        tag2.innerHTML = new Date(vreme.getTime() + 21600000).toLocaleString();
                                                      }
                                                    )
                                                    
                              tag2.addEventListener("animationend",
                                                    function () 
                                                      {
                                                        // tag2.style.background="green";
                                                      tag2.style.animation = 'none';
                                                      setTimeout(function ()
                                                                  {
                                                                    tag2.innerHTML = "Time in Belgrade";
                                                                  },3000);
                                                      }
                                                    )
                             
                            // sve isto za tag3 
                              tag3.addEventListener("click",
                                                    function () 
                                                      {
                                                        tag3.style.animation = 'rotacija 2s linear 0s 1';
                                                        const vreme = new Date() ;   
                                                        tag3.innerHTML = new Date(vreme.getTime() + 18000000).toLocaleString();
                                                      }
                                                    )
                              tag3.addEventListener("animationend",
                                                    function () 
                                                      {
                                                        tag3.style.animation = 'none';
                                                        setTimeout(function ()
                                                                    {
                                                                      tag3.innerHTML = "Time in London";
                                                                    },3000);
                                                      }
                                                    )

                              tag4.addEventListener("click",
                                                    function () 
                                                      {
                                                        tag4.style.animation = 'flash 1s 5';
                                                        const vreme = new Date() ;   
                                                        tag4.innerHTML = new Date(vreme.getTime() + 25200000).toLocaleString();
                                                      }
                                                    )
                              tag4.addEventListener("animationend",
                                                    function () 
                                                      {
                                                        tag4.style.animation = 'none';
                                                      }
                                                    )
                              tag5.addEventListener("click",
                                                    function () 
                                                      {
                                                        tag5.style.animation = 'zoomOutRight 4s 1';
                                                        const vreme = new Date() ;   
                                                        tag5.innerHTML = new Date(vreme.getTime() + 43200000).toLocaleString();
                                                      }
                                                    )
                              tag5.addEventListener("animationend",
                                                    function () 
                                                      {
                                                        tag5.style.animation = 'none';
                                                      }
                                                    )
                                                    
                              button.addEventListener("click",
                                                     function()
                                                      {
                                                        document.querySelector(".box6").style.animation = 'ld 1s linear 3';
                                                        const vreme = new Date() ;   
                                                        document.querySelector(".box6").innerHTML = new Date(vreme.getTime() + 46800000).toLocaleString();
                                                      
                                                    
                              document.querySelector(".box6").addEventListener("animationend",
                                                                                function () 
                                                                                  {
                                                                                    document.querySelector(".box6").style.animation= 'none';
                                                                                  }
                                                                                
                                                                              )
                                                      });

                              });