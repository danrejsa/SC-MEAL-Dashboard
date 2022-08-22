$(function () {
    //Check if the blog-id is given 
    let url = new URL(location.href);
    let urlParams = url.search;
    
    if(!urlParams)
    {
      location.href = "/test/admin/blog-view";
    }

    let blogId = urlParams.substr(9);
    
    $.ajax({
      type: 'GET',
      url: `/test/api/blogs/?type=details&blog-id=${blogId}`,
      success: (data) => {
        loadData(data.data);
      },
      error: (jqXHR,textStatus,errorThrown) => {
        const responseJSON = jqXHR.responseJSON;
        const message = `<div class="alert alert-danger">${responseJSON.message}</div>`
        $('#submitFeedback').html(message);
      }
    });
    $('#blogDateOfPublicationContainer').datetimepicker({ icons: { time: 'far fa-clock' } });

    // Summernote
    $('#blogBody').summernote()

    $('#submitBlogForm').submit((e) => {
      e.preventDefault();
      const blogAuthor = $('#blogAuthor').val();
      const blogTitle = $('#blogTitle').val();
      const blogDateOfPublication = $('#blogDateOfPublication').val();
      const blogBody = $('#blogBody').val();
      const blogPublish = $('#publishBlog').is(":checked") == true ? "true" : "false";
      const data = {
        blogAuthor,
        blogTitle,
        blogDateOfPublication:processDate(blogDateOfPublication),
        blogBody,
        blogPublish
      }
      
      $.ajax({
        type: 'PUT',
        url: `/test/api/blogs/?blog-id=${blogId}`,
        data:JSON.stringify(data),
        headers: {
          'Authorization': localStorage.getItem("jwt-token")
        },
        beforeSend: () => {
            $('#submitEditBlogButton').prop("disabled", true);  
        },
        processData: false,
        dataType: 'json',
        success: (data) => {
          const message = `<div class="alert alert-success">${data.message}</div>`
          $('#submitFeedback').html(message);
          clearFields();
        },
        error: (jqXHR,textStatus,errorThrown) => {
          const responseJSON = jqXHR.responseJSON;
          console.log(responseJSON);
          const message = `<div class="alert alert-danger">${responseJSON.message}</div>`
          $('#submitFeedback').html(message);
        },
        complete: () => {
            $('#submitEditBlogButton').prop("disabled", false);  
        }
      });
    })
  })
  function loadData(data){
    console.log(data);
    $('#blogAuthor').val(data.blogAuthor);
    $('#blogTitle').val(data.blogTitle)
    $('#blogDateOfPublication').val(data.blogDateOfPublication);
    $('#blogBody').summernote('code',data.blogBody);

    $('#publishBlog').prop("checked",data.blogPublish == true ? true : false);
  }
  function clearFields()
  {
    $('#blogAuthor').val("");
    $('#blogTitle').val("");
    $('#blogDateOfPublication').val("");
    $('#blogBody').summernote("reset");
  }
  function processDate(date)
  {
    if (date.length == 10) return date;
    let dateWithoutTime = date.substr(0,10);
    let result = `${dateWithoutTime.substr(6)}-${dateWithoutTime.substr(0,2)}-${dateWithoutTime.substr(3,2)}`;
    return result;
  }
