import './style.scss'
import React, { Component } from 'react'
import $ from 'jquery'

export default class ContentBelt extends Component{

  constructor(props, context){
    super(props);

    this.state = {
      article: {
        title: '',
        content: '',
        animationClass: 'contentBelt__article--closed'
      }
    }
  }

  componentDidMount(){
    var obj = this.props.controls;
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        $(obj[key]).on('click', (e) => {
          e.preventDefault();
          this.setState({
            article:{
              animationClass: 'contentBelt__article--closed'
            }
          });
          this.ajaxCall(this);
        });
      }
    }
  }

  ajaxCall(component) {
    $.ajax({
      url: '/ajaxContent',
      type: 'POST',
      dataType: 'json',
      async: true,

      success: function(data, status){
        component.setState({
          article:{
            title: data.title,
            content: data.content,
            animationClass: 'contentBelt__article--open'
          }
        });
      },

      error: function(xhr, textStatus, errorThrown){
        console.log(errorThrown);
      }
    });
  }


  render(){
    var article = this.state.article;
    return (
      <div className='contentBelt'>
        <div className='contentBelt__flap'>
          {ContentBeltArticle(article.title, article.content, article.animationClass)}
        </div>
      </div>
    );
  }
}

function ContentBeltArticle(title, content, animationClass){
  let articleClasses = ['contentBelt__article', animationClass];
  return (
    <article className={articleClasses.join(' ')}>
      <header className='contentBelt__article__header'>
        <h2 className='contentBelt__article__h2'>{title}</h2>
      </header>
      <p className='contentBelt__article__content'>
      {content}
      </p>
    </article>
  );
}
