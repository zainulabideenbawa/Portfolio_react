import React, { Component } from 'react'

export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <div id="testimonials" class="section">
                    <div class="background slider-carousel" style="background-image: url(/assets/img/img_bg_main3.jpg);">
                        <div class="container">
                            <div id="carouselTestimonials" class="carousel slide" data-ride="carousel">
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselTestimonials" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselTestimonials" data-slide-to="1"></li>
                                    <li data-target="#carouselTestimonials" data-slide-to="2"></li>
                                    <li data-target="#carouselTestimonials" data-slide-to="3"></li>
                                </ol>
                                <div class="carousel-inner" role="listbox">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                                <p class="slider-carousel__title">Aegis Fang</p>
                                                <p class="slider-carousel__caption">Project: Community support – use my new website and make it look busy</p>
                                                <hr>
                                                    <p class="slider-carousel__description"><span style="color: lawnGreen;">★★★★★</span> 5.00<br />Great work!</p>
                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div class="row">
                                                <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                                    <p class="slider-carousel__title">Asem Raza</p>
                                                    <p class="slider-carousel__caption">Project: Small CSS issue. Logo won't display on some browsers</p>
                                                    <hr>
                                                        <p class="slider-carousel__description"><span style="color: lawnGreen;">★★★★★</span> 5.00<br />Fast and Reliable</p>
                </div>
                                                </div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="row">
                                                    <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                                        <p class="slider-carousel__title">Taylor Blake</p>
                                                        <p class="slider-carousel__caption">Project: Help test short survey/questionnaire</p>
                                                        <hr>
                                                            <p class="slider-carousel__description"><span style="color: lawnGreen;">★★★★★</span> 5.00<br />Thanks, Noman!</p>
                </div>
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="row">
                                                        <div class="col-md-10 col-sm-10 col-10 mr-auto ml-auto">
                                                            <p class="slider-carousel__title">Mark Murray</p>
                                                            <p class="slider-carousel__caption">Project: Translators Required for a Global Project!</p>
                                                            <hr>
                                                                <p class="slider-carousel__description"><span style="color: lawnGreen;">★★★★★</span> 5.00<br />Let's stay in touch.</p>
                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a class="carousel-control-prev" href="#testimonials" role="button" data-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="carousel-control-next" href="#testimonials" role="button" data-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                                <div class="slider-carousel__circle">
                                                    <p><i class="fa fa-quote-right" aria-hidden="true"></i></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                          }
                        }
