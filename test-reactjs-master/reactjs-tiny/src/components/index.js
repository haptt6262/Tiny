import React, { Component } from "react";
import TinyComponent from "./TinyComponent";
class ItemComponent extends Component {
    state = {
        id: "",
        title: "",
        content: "",
        textSearch: "",
        arrNameImg: [],
        showContent: true,
        showText: true,
    };
     handleClear = () => {
        this.setState({ id: "", title: "", content: "" });
    };
    handleClearNameImg = () => {
        this.setState({ arrNameImg: [] });
    };
    handleChange = (e) => {
        this.setState({ showContent: !this.state.showContent });
    };
    handleShow = () => {
        this.setState({ showText: !this.state.showText });
    };
    render() {
        console.log(this.state.showText, "text ");
        let listData = [];
        if (this.props.items) {
            listData = this.props.items.map((item, index) => {
                return (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{item.title}</th>
                        <th>
                            {this.state.showContent && (
                                <span dangerouslySetInnerHTML={{ __html: item.content }}></span>
                            )}
                        </th>
                        <th>
                            {/* <button onClick={this.handleChange}>
                                {this.state.showContent ? "Hide" : "Show"}
                            </button> */}
                        </th>
                        {/* <th>
                            {
                                this.state.showText === true ? (<span style={{
                                    display: "inline-block",
                                    width: "250px",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }} dangerouslySetInnerHTML={{ __html: item.content }}></span>)
                                    :
                                    (<span style={{
                                        display: "flex",
                                        whiteSpace: "nowrap",
                                        overflow: "visible",
                                        textOverflow: "ellipsis",
                                    }} dangerouslySetInnerHTML={{ __html: item.content }}></span>)
                            }
                        </th> */}
                        <th>
                            {/* <span
                                style={this.state.textOverflow == true ? { textOverflow: "ellipsis" } : { textOverflow: "clip" }}
                                dangerouslySetInnerHTML={{ __html: item.content }}></span> */}
                        </th>
                        {/* <th>
                            <p style={{ cursor: "pointer" }} onClick={this.handleShow}>{this.state.showText ? "...Read more" : "Show less"}</p>
                        </th> */}

                        <th>
                            <button
                                onClick={() => {
                                    this.props.deleteItem({ id: item._id });
                                }}
                            >
                                DELETE
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={() => {
                                    this.setState({
                                        id: item._id,
                                        title: item.title,
                                        content: item.content,
                                    });
                                }}
                            >
                                SELECT
                            </button>
                        </th>
                    </tr>
                );
            });
        }
        return (
            <div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>STT</th>
                                <th>Content</th>
                            </tr>
                            {listData}
                        </tbody>
                    </table>
                </div>
                <TinyComponent
                    addItem={this.props.addItem}
                    updateItem={this.props.updateItem}
                    searchItem={this.props.searchItem}
                    id={this.state.id}
                    title={this.state.title}
                    content={this.state.content}
                    textSearch={this.state.textSearch}
                    handleClear={this.handleClear}
                    handleClearNameImg={this.handleClearNameImg}
                />
            </div>
        );
    }
}

export default ItemComponent;
