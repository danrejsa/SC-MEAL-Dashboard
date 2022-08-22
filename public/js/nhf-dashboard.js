(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales1").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
                    labels: ["November 21", "December 21", "January", "February", "March", "April", "May"],
                    datasets: [{
                            label: "No. of Children Benefited from PSS",
                            data: [30, 30, 55, 65, 70, 60, 75],
                            backgroundColor: "rgba(235, 22, 22, .7)"
                        },
                        {
                            label: "No of UASC Identified",
                            data: [29, 25, 60, 50, 70, 55, 70],
                            backgroundColor: "rgba(235, 22, 22, .5)"
                        },
                        {
                            label: "No. of UASC Placed in Alt care",
                            data: [12, 25, 45, 55, 65, 70, 60],
                            backgroundColor: "rgba(235, 22, 22, .3)"
                        }
                    ]
                    },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue1").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["November 21", "December 21", "January", "Febuary", "March", "April", "May"],
            datasets: [{
                    label: "No. of conflict affected out of school children accessing education",
                    data: [90, 80, 75, 63, 80, 50, 59],
                    backgroundColor: "rgba(235, 22, 22, .7)",
                    fill: true
                },
                {
                    label: "No. of teachers trained in improved teaching approaches",
                    data: [24, 70, 70, 30, 80, 50, 50],
                    backgroundColor: "rgba(235, 22, 22, .5)",
                    fill: true
                }
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart1").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
            labels: ["Indicator 2.1.2", "Indicator 3.1.1", "Indicator 4.1.1", "Indicator 4.2.1", "Indicator 4.1.2", "Indicator 3.1.2", "Indicator 1.1.2"],
            datasets: [{
                label: "Target",
                fill: false,
                backgroundColor: "rgba(235, 22, 22, .7)",
                data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
            },{
                label: "Reached",
                fill: false,
                backgroundColor: "rgba(235, 22, 22, .7)",
                data: [5, 6, 6, 7, 7, 8, 9, 10, 12, 12, 15]}
        ]

        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart1").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
            labels: ["November 21", "December 21", "January", "Febuary", "March", "April", "May"],
            datasets: [{
                backgroundColor: "rgba(235, 22, 22, .7)",
                label: "No of New MAM cases admitted for treatment",
                data: [55, 49, 44, 24, 15, 12, 8]
            },{
                label: "No. of Tombrown group formed",
                backgroundColor:  "rgba(235, 22, 22, .3)",
                data: [40, 29, 14, 24, 14, 10, 8]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart1").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "pie",
        data: {
            labels: ["Girls", "Boys", "Female", "Male"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .4)",
                    
                ],
                data: [55, 49, 44, 24]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart1").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "doughnut",
        data: {
            labels: ["IDPs", "Host Community", "Returnee"],
            datasets: [{
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)"
                  
                ],
                data: [60, 49, 14]
            }]
        },
        options: {
            responsive: true
        }
    });

    
    //NHF Dashboard
    // var ctx7 = $("#worldwide-sales1").get(0).getContext("2d");
    // var myChart7 = new Chart(ctx7, {
    //     type: "bar",
    //     data: {
    //         labels: ["November 21", "December 21", "January", "February", "March", "April", "May"],
    //         datasets: [{
    //                 label: "No. of Children Benefited from PSS",
    //                 data: [30, 30, 55, 65, 70, 60, 75],
    //                 backgroundColor: "rgba(235, 22, 22, .7)"
    //             },
    //             {
    //                 label: "No of UASC Identified",
    //                 data: [29, 25, 60, 50, 70, 55, 70],
    //                 backgroundColor: "rgba(235, 22, 22, .5)"
    //             },
    //             {
    //                 label: "No. of UASC Placed in Alt care",
    //                 data: [12, 25, 45, 55, 65, 70, 60],
    //                 backgroundColor: "rgba(235, 22, 22, .3)"
    //             }
    //         ]
    //         },
    //     options: {
    //         responsive: true
    //     }
    // });


    // // Salse & Revenue Chart
    // var ctx8 = $("#salse-revenue-nhf").get(0).getContext("2d");
    // var myChart8 = new Chart(ctx8, {
    //     type: "line",
    //     data: {
    //         labels: ["November 21", "December 21", "January", "Febuary", "March", "April", "May"],
    //         datasets: [{
    //                 label: "Target",
    //                 data: [15, 30, 55, 45, 70, 65, 85],
    //                 backgroundColor: "rgba(235, 22, 22, .7)",
    //                 fill: true
    //             },
    //             {
    //                 label: "Reached",
    //                 data: [99, 135, 170, 130, 190, 180, 270],
    //                 backgroundColor: "rgba(235, 22, 22, .5)",
    //                 fill: true
    //             }
    //         ]
    //         },
    //     options: {
    //         responsive: true
    //     }
    // });
    


    // // Single Line Chart
    // var ctx9 = $("#line-chart-nhf").get(0).getContext("2d");
    // var myChart9 = new Chart(ctx9, {
    //     type: "line",
    //     data: {
    //         labels: ["November 21", "December 21", "January", "Febuary", "March", "April", "May"],
    //         datasets: [{
    //             label: "No. of HH supported with grant",
    //             fill: false,
    //             backgroundColor: "rgba(235, 22, 22, .7)",
    //             data: [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15]
    //         },{
    //             label: "No. of businesses received soft loan",
    //             fill: false,
    //             backgroundColor: "rgba(235, 22, 22, .7)",
    //             data: [5, 6, 6, 7, 7, 8, 9, 10, 12, 12, 15]}
    //     ]

    //     },
    //     options: {
    //         responsive: true
    //     }
    // });


    // // Single Bar Chart
    // var ctx4 = $("#bar-chart-nhf").get(0).getContext("2d");
    // var myChart4 = new Chart(ctx4, {
    //     type: "bar",
    //     data: {
    //         labels: ["November 21", "December 21", "January", "Febuary", "March", "April", "May"],
    //         datasets: [{
    //             backgroundColor: [
    //                 "rgba(235, 22, 22, .7)",
    //                 "rgba(235, 22, 22, .6)",
    //                 "rgba(235, 22, 22, .5)",
    //                 "rgba(235, 22, 22, .4)",
    //                 "rgba(235, 22, 22, .3)"
    //             ],
    //             label: "No of Tombrown group supported",
    //             data: [55, 49, 44, 24, 15, 12, 8]
    //         }]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });


    // // Pie Chart
    // var ctx5 = $("#pie-chart-nhf").get(0).getContext("2d");
    // var myChart5 = new Chart(ctx5, {
    //     type: "pie",
    //     data: {
    //         labels: ["Girls", "Boys", "Female", "Male"],
    //         datasets: [{
    //             backgroundColor: [
    //                 "rgba(235, 22, 22, .7)",
    //                 "rgba(235, 22, 22, .6)",
    //                 "rgba(235, 22, 22, .5)",
    //                 "rgba(235, 22, 22, .4)",
                    
    //             ],
    //             data: [55, 49, 44, 24]
    //         }]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });


    // // Doughnut Chart
    // var ctx6 = $("#doughnut-chart-nhf").get(0).getContext("2d");
    // var myChart6 = new Chart(ctx6, {
    //     type: "doughnut",
    //     data: {
    //         labels: ["IDPs", "Host Community", "Returnee"],
    //         datasets: [{
    //             backgroundColor: [
    //                 "rgba(235, 22, 22, .7)",
    //                 "rgba(235, 22, 22, .6)",
    //                 "rgba(235, 22, 22, .5)"
                  
    //             ],
    //             data: [60, 49, 14]
    //         }]
    //     },
    //     options: {
    //         responsive: true
    //     }
    // });


    
})(jQuery);

